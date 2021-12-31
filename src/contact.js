function showContact(){
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contentPanel");
    const contactHeader = document.createElement("h3");
    contactHeader.textContent = "Address:"
    contactDiv.appendChild(contactHeader);
    
    const addressText = document.createElement("p");
    addressText.classList.add("centeredText");
    addressText.textContent = "835 Paul Drive\nBoston MA 37224\nUSA";
    contactDiv.appendChild(addressText);

    const hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "Hours:"
    contactDiv.appendChild(hoursHeader);

    const hoursText = document.createElement("p");
    hoursText.classList.add("centeredText");
    hoursText.textContent = "Open EVERYDAY from 8am to 8pm!\n\n\n\n\n"
    contactDiv.appendChild(hoursText);


    return contactDiv;
}

function loadContact(){
    const content = document.getElementById("content");
    content.appendChild(showContact());
}

export default loadContact;