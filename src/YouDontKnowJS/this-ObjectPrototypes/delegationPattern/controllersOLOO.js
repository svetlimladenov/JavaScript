const LoginController = {
    errors: [],
    getUser() {
        return document.getElementById("login_username").value;
    },
    getPassword() {
        return document.getElementById("login_password").value;
    },
    validateEntry(user, pw) {
        user = user || this.getUser();
        pw = pw || this.getPassword();
        if (!(user && pw)) {
            return this.failure("Please enter a username & password!");
        }
        if (user.length < 5) {
            return this.failure("Password must be 5+ characters!");
        }
        // got here? validated!
        return true;
    },
    showDialog(title, msg) {
        // display success message to user in dialog
    },
    failure(err) {
        this.errors.push(err);
        this.showDialog("Error", `Login invalid: ${err}`);
    }
};

// Link `AuthController` to delegate to `LoginController`
const AuthController = Object.create(LoginController);
AuthController.errors = [];
AuthController.checkAuth = function checkAuth() {
    const user = this.getUser();
    const pw = this.getPassword();
    if (this.validateEntry(user, pw)) {
        this.server("/check-auth", {
            user,
            pw
        })
            .then(this.accepted.bind(this))
            .fail(this.rejected.bind(this));
    }
};
AuthController.server = function server(url, data) {
    return $.ajax({
        url,
        data
    });
};
AuthController.accepted = function accepted() {
    this.showDialog("Success", "Authenticated!");
};
AuthController.rejected = function rejected(err) {
    this.failure(`Auth Failed: ${err}`);
};
