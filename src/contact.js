function showContact(){
    const contactDiv = document.createElement("div");
    contactDiv.textContent = "Contact information goes here.";
    return contactDiv;
}

function loadContact(){
    const content = document.getElementById("content");
    content.appendChild(showContact());
}

export default loadContact;