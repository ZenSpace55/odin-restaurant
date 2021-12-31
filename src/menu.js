function showMenu(){
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuPanel");

    /*const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Our Menu";
    menuDiv.appendChild(menuHeader);*/

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuHead = document.createElement("div");
    menuHead.classList.add("menuHeader");
    menuHead.textContent = "-Lunch Menu-";
    menuDiv.appendChild(menuHead);

    const menuSubHead = document.createElement("div");
    menuSubHead.classList.add("menuSubHeader");
    menuSubHead.textContent = "Served between 10am and 4pm";
    menuDiv.appendChild(menuSubHead);

    const item1 = document.createElement("div");
    item1.classList.add("menuItem");
    buildMenuItem(item1, "Chip Butty", "16", "Our world famous chip butty, go scalloped for $2 extra.");


    const item2 = document.createElement("div");
    item2.classList.add("menuItem");
    buildMenuItem(item2, "Fish & Chips", "22", "A fillet of haddock with a generous serving of chips.");

    const item3 = document.createElement("div");
    item3.classList.add("menuItem");
    buildMenuItem(item3, "Cheeseburger", "18", "A premium beef patty served on a sesame seed bun, with swiss cheese, lettuce, tomato, onion, and our secret sauce.");

    const item4 = document.createElement("div");
    item4.classList.add("menuItem");
    buildMenuItem(item4, "Veggie Burger", "20", "A vegan patty served on a sesame seed bun, with swiss cheese, lettuce, tomato, onion, and our secret sauce.");

    const item5 = document.createElement("div");
    item5.classList.add("menuItem");
    buildMenuItem(item5, "Club Sandwich", "18", "Farm-raised chicken on your choice of bread, with lettuce, tomato, and our special house mayo.");

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);
    menuDiv.appendChild(menu);
    return menuDiv;
}

function buildMenuItem (myParent, myName, myPrice, myDescription){
    const nameTag = document.createElement("div");
    nameTag.classList.add("menuItemNameTag");
    const name = document.createElement("div");
    name.textContent = myName;
    name.classList.add("menuItemName");
    nameTag.appendChild(name);
    const span = document.createElement("span");
    span.textContent = "...........................................................................................................................................................";
    nameTag.appendChild(span);
    const price = document.createElement("div");
    price.textContent = "$"+ myPrice;
    price.classList.add("menuItemPrice");
    nameTag.appendChild(price);
    const description = document.createElement("div");
    description.textContent = myDescription;
    description.classList.add("menuItemDescription");
    myParent.appendChild(nameTag);
    myParent.appendChild(description);
}

function loadMenu(){
    const content = document.getElementById("content");
    content.appendChild(showMenu());
}

export default loadMenu;