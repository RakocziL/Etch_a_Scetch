//Select the main container
const container = document.querySelector(".container");
const slider = document.querySelector("#gridSlider");

slider.addEventListener("change", gridRange );

//test function
function test(e){
    console.log("Jeno");
}

//Grid creator function
function createGrid(height){

    for(var i = 0; i < height;i++){
        const row = document.createElement("div");
        row.classList.add("grid-row");
        container.appendChild(row);

        for(var j = 0; j < height;j++){
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            //Mouseover colorchange
            cell.addEventListener("mouseover", function(){
                const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                cell.style.backgroundColor = color;
            });
            row.appendChild(cell);
        }
    }
}

//Grid remover
function removeGrid(){
    const container = document.getElementById("gridContainer");
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

//Create grid via range slider
function gridRange(e){
    removeGrid();
    const value = slider.value;
    createGrid(slider.value)
}

//Swap between colors
function colorChanger(){
    
}


gridRange()




