function showHome(){
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("contentPanel");
    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "Welcome"
    homeDiv.appendChild(homeHeader);
    const homeText = document.createElement("p");
    homeText.classList.add("homeText");
    homeText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id magna placerat, finibus turpis vitae, gravida lacus. Proin consequat erat sodales quam ornare scelerisque. Ut eleifend sollicitudin orci, id molestie purus vehicula vel. Sed enim lectus, vestibulum nec sem bibendum, congue egestas dui. Praesent auctor condimentum lorem. Sed mauris orci, porta in urna eu, finibus vestibulum libero. Etiam consequat eu nisl quis vehicula. In ac suscipit lacus, eu vehicula erat. Cras porta, nibh ac cursus imperdiet, turpis nunc facilisis magna, sit amet luctus ante tortor vel purus. Nullam a lorem at dui iaculis efficitur. Pellentesque ac justo id purus egestas scelerisque vitae at risus. Quisque id varius lorem.";
    homeDiv.appendChild(homeText);
    return homeDiv;
}

function loadHome(){
    const content = document.getElementById("content");
    content.appendChild(showHome());
}

export default loadHome;