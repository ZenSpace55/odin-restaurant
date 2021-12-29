import loadPage from "./page-load";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./styles.css";

console.log("hey what's up!??!?");

function buildTabSwitching(){
    console.log("trying tab switch");
    const home = document.getElementById("homeButton");
    home.addEventListener("click", function(){
        switchTab("home");
    });
    const menu = document.getElementById("menuButton");
    menu.addEventListener("click", function(){
        switchTab("menu");
    });
    const contact = document.getElementById("contactButton");
    contact.addEventListener("click", function(){
        switchTab("contact");
    });

}

function switchTab(tab){
    clearContent();
    if (tab === "home"){
        console.log("show " + tab);
        loadHome();
    }

    else if (tab === "contact"){
        console.log("show " + tab);
        loadContact();
    }
    else if (tab === "menu"){
        console.log("show " + tab);
        loadMenu();
    }
}

function clearContent(){
    const mainTab = document.getElementById("content");
    for (let i = 1; i < mainTab.childNodes.length; i++){
        mainTab.removeChild(mainTab.childNodes[i]);
    }
}

loadPage();
buildTabSwitching();