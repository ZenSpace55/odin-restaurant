function showHome(){
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("contentPanel");
    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "Welcome"
    homeDiv.appendChild(homeHeader);
    const homeText = document.createElement("p");
    homeText.classList.add("homeText");
    homeText.textContent = "Experience the best fish and chips in town, only at the Crooked Cod Tavern. We serve only the freshest, ocean-caught fish on the east coast. We also offer an assortment of pub-inspired foods, prepared with love and served in generous portions. We also offer a variety of vegan and vegetarian options. Bring your family, grab a seat, and have a good time at the Crooked Cod Tavern!";
    const hoursText = document.createElement("p");
    hoursText.classList.add("centeredText");
    hoursText.textContent = "\n\n\nOpen EVERYDAY from 8am to 8pm!"
    homeText.appendChild(hoursText);
    homeDiv.appendChild(homeText);

    return homeDiv;
}

function loadHome(){
    const content = document.getElementById("content");
    content.appendChild(showHome());
}

export default loadHome;