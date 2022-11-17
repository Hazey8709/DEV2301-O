import userProfile from "./data/user";

const userSection = document.getElementById("user");
const userInfoList = document.createElement("ul");

const buildUser = (userData) => {
    for (const prop in userData) {
        const lineItemContent = `${prop} ${userData[prop]}`;
        const lineItem = document.createElement("li");
        lineItem.innerText = lineItemContent;
        userInfoList.appendChild(lineItem);
        userSection.appendChild(userInfoList);
    }
};

(() => {
    console.log(userProfile);
    buildUser(userProfile);
})();
