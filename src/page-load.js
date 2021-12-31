function createHeader(){
    const exportDiv = document.createElement("div");
    const headerText = document.createElement("h2");
    headerText.textContent = "The Crooked Cod Tavern";
    exportDiv.appendChild(headerText);
    
    //exportDiv.textContent = "testing testing 123...";
    exportDiv.classList.add("restaurantHeader");

    const buttonPanel = document.createElement("div");
    buttonPanel.classList.add("headerButtons");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Location";
    home.classList.add("headerButton");
    menu.classList.add("headerButton");
    contact.classList.add("headerButton");
    home.id = "homeButton";
    menu.id = "menuButton";
    contact.id = "contactButton";
    buttonPanel.appendChild(home);
    buttonPanel.appendChild(menu);
    buttonPanel.appendChild(contact);
    exportDiv.appendChild(buttonPanel);
    return exportDiv;
}

function loadPage(){
    console.log("made it to loadpage");
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    console.log("calling load page function");
}

export default loadPage;