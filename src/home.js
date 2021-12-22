function ShowHome(){
    const homeDiv = document.createElement("div");
    homeDiv.textContent = "Home information goes here."
    return homeDiv;
}

function LoadHome(){
    const content = document.getElementById("content");
    content.appendChild(ShowHome());
}

export default LoadHome;