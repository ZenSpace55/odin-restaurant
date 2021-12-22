import loadPage from "./page-load";
import loadHome from "./home";
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
    if (tab === "home"){
        console.log("show " + tab);
        loadHome();
    }

    else if (tab === "contact"){
        console.log("show " + tab);
    }
    else if (tab === "menu"){
        console.log("show " + tab);
    }
}

loadPage();
buildTabSwitching();