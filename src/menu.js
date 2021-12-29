function showMenu(){
    const menuDiv = document.createElement("div");
    menuDiv.textContent = "Menu information goes here.";
    return menuDiv;
}

function loadMenu(){
    const content = document.getElementById("content");
    content.appendChild(showMenu());
}

export default loadMenu;