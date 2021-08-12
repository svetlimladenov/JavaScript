import { Map } from "../../../../node_modules/immutable/dist/immutable.es.js";

let dataStore = Map({
    name: "Ivan",
    bio: "My name is ivan"
});

function renderProfileInfo(data) {
    const root = document.getElementById("root");

    function createProfileData(profileData) {
        console.log("render");
        const profileDataWrapper = document.createElement("div");
        const nameHeader = document.createElement("h1");
        nameHeader.textContent = data.get("name");
        const bioParagraph = document.createElement("p");
        bioParagraph.textContent = data.get("bio");

        profileDataWrapper.appendChild(nameHeader);
        profileDataWrapper.appendChild(bioParagraph);

        const nextUser = document.createElement("button");
        nextUser.textContent = "Next user";

        profileDataWrapper.appendChild(nextUser);

        nextUser.addEventListener("click", () => {
            const newData = profileData
                .set("name", "Goshe")
                .set("bio", "Hi my name is Goshe");
            // we leave the original dataStore unchaged and render with the new data;
            if (profileData !== newData) {
                // if smth changed, rerender, if it did not do not rerender
                profileData = newData;
                renderProfileInfo(profileData);
            }
        });

        return profileDataWrapper;
    }

    if (root.lastChild) {
        root.removeChild(root.lastChild);
    }

    root.appendChild(createProfileData(data));
}

renderProfileInfo(dataStore);
