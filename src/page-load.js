function createHeader(){
    const exportDiv = document.createElement("div");
    exportDiv.textContent = "testing testing 123...";
    exportDiv.classList.add("restaurantHeader");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact Us";
    home.classList.add("headerButton");
    menu.classList.add("headerButton");
    contact.classList.add("headerButton");
    home.id = "homeButton";
    menu.id = "menuButton";
    contact.id = "contactButton";
    exportDiv.appendChild(home);
    exportDiv.appendChild(menu);
    exportDiv.appendChild(contact);
    return exportDiv;
}

function loadPage(){
    console.log("made it to loadpage");
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    console.log("calling load page function");
}

export default loadPage;