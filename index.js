const container = document.querySelector("#container");


function createGrid(){
    let number = prompt("How large do you want your grid? (Ex: 16x16 then enter 16)")
    let totalPanels = number*number;
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

function deleteGrid(){
    const grid = document.querySelectorAll(".panel");
    grid.forEach((panel) =>{
        container.removeChild(panel);  
    })
}

const btnOn = document.querySelector("#on");
const btnOff = document.querySelector("#off");


btnOn.addEventListener("click", function(e){
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) =>{
        panel.addEventListener("mouseenter", function (e) {
            e.target.style.background ="black";
        });
    });
});

btnOff.addEventListener("click", function(e){
    const panels =document.querySelectorAll(".panel")
    panels.forEach((panel) =>{
        panel.style.background ="greenyellow";
    });
})

const grid = document.querySelector("#grid");
grid.addEventListener("click", createGrid);

const gridReset = document.querySelector("#grid-reset");
gridReset.addEventListener("click", deleteGrid);