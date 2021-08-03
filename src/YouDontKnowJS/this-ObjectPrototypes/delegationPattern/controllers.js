function Controller() {
    this.errors = [];
}

Controller.prototype.showDialog = function showDialog(title, msg) {
    // eslint-disable-next-line no-alert
    console.log(title, msg);
};

Controller.prototype.success = function success(msg) {
    this.showDialog("Success", msg);
};

Controller.prototype.failure = function failure(err) {
    this.errors.push(err);
    this.showDialog("Error", err);
};

function LoginController() {
    Controller.call(this);
}

LoginController.prototype = Object.create(Controller.prototype);

LoginController.prototype.getUser = function getUser() {
    return document.getElementById("username").value;
};

LoginController.prototype.getPassword = function getPassword() {
    return document.getElementById("password").value;
};

LoginController.prototype.validateEntry = function validateEntry(user, pw) {
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if (!(user && pw)) {
        return this.failure("Please enter a username & password!");
    }

    if (pw.length < 5) {
        return this.failure("Password must be 5+ characters!");
    }
    // got here? validated!
    return true;
};

LoginController.prototype.failure = function failure(err) {
    Controller.prototype.failure.call(this, `Login invalid ${err}`);
};

function AuthController(loginController) {
    Controller.call(this);
    this.loginController = loginController;
}

AuthController.prototype = Object.create(Controller.prototype);

AuthController.prototype.server = function server(url, data) {
    return $.ajax({
        url,
        data
    });
};

AuthController.prototype.checkAuthentication = function checkAuthentication() {
    const user = this.loginController.getUser();
    const password = this.loginController.getPassword();

    if (this.loginController.validateEntry(user, password)) {
        this.server("/check-auth", {
            user,
            password
        })
            .then(this.success.bind(this))
            .fail(this.failure.bind(this));
    }
};

AuthController.prototype.success = function success() {
    Controller.prototype.success.call(this, "Authenticated!");
};

AuthController.prototype.failure = function failure(err) {
    Controller.prototype.failure.call(this, `Auth failed${err}`);
};

const auth = new AuthController();
auth.checkAuthentication(
    // in addition to inheritance, we also need composition
    new LoginController()
);
