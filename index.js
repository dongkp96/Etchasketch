const container = document.querySelector("#container");

let i = 0;
while (i<256){
    const div = document.createElement("div");
    div.setAttribute("class", "panel");
    div.innerHTML ="&nbsp"
    container.appendChild(div);
    i++;
}

