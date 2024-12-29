const container = document.querySelector("#container");

function createGrid(){
    let number = prompt("How large do you want your grid? (Ex: 16x16 then enter 16)")
    let totalPanels = number*number;
    container.innerHTML ="";
    let i = 0;
    while(i<totalPanels){
        const div = document.createElement("div")
        div.setAttribute("class", "panel");
        div.innerHTML ="&nbsp";
        let volume = (960/number)-2;
        div.style.width = volume+"px";
        div.style.height= volume+"px";
        container.appendChild(div);
        i++;
    }
}

const grid = document.querySelector("#grid");
grid.addEventListener("click", createGrid);

const gridReset = document.querySelector("#grid-reset");
gridReset.addEventListener("click", function(){
    document.querySelectorAll(".panel").forEach((panel) =>{
        panel.style.background = "greenyellow";
    })
})

const btnOn = document.querySelector("#on");
const btnOff = document.querySelector("#off");

function change2Black(event){
    event.target.style.background = "black";
}


btnOn.addEventListener("click", function(){
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) =>{
        if(!panel.hasAttribute("data-listener")){
            panel.addEventListener("mouseenter", change2Black)
            panel.setAttribute("data-listener", "true");
        }
    })
})


btnOff.addEventListener("click", function(){
    const panels =document.querySelectorAll(".panel")
    panels.forEach((panel) =>{
        if(panel.hasAttribute("data-listener")){
            panel.removeEventListener("mouseenter", change2Black);
            panel.removeAttribute("data-listener");
        }

    });
});
