import Team from "./modules/DataModule.js";

(()=>{
    let userSection = document.querySelector(".user-section").children;

    userSection[1].textContent = Team["Justin"].name;
    userSection[2].textContent = Team["Justin"].role;
    userSection[3].textContent = Team["Justin"].nickname;
})();