import CatsController from "./scripts/infrastructure/CatsController.js";

const firstController = Object.create(CatsController);

document.getElementById("root").innerHTML = `
    <div>
        ${firstController.init()}
    </div>
`;
