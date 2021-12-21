function createHeader(){
    const exportDiv = document.createElement("h1");
    exportDiv.textContent = "testing testing 123...";
    return exportDiv;
}

function loadPage(){
    console.log("made it to loadpage");
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    console.log("calling load page function");
}

export default loadPage;