import ProfilePicture from "./components/ProfilePicture.js";
import Button from "./components/Button.js";

const profilePicture = Object.create(ProfilePicture);
profilePicture.init("https://picsum.photos/200");

const button = new Button("Click me");
const secondBtn = new Button();

const App = {
    build() {
        return `
            <h1>Simple Profile Picture Viewer</h1>
            ${profilePicture.build()}
            ${button.build()}
            ${secondBtn.build()}
            `;
    }
};

export default App;
