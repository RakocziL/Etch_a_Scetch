//Select elements
const container = document.querySelector(".container");
const slider = document.querySelector("#gridSlider");
const buttonBlack =document.querySelector("#black");
const buttonColorChange = document.querySelector("#colorChange");
const buttonClear = document.querySelector("#clear");
const colorPicker = document.querySelector("#colorPicker");

//Addin event listeners
slider.addEventListener("change", gridRange );
buttonBlack.addEventListener("click", changeToBlack);
buttonColorChange.addEventListener("click", changeToColorChange);
buttonClear.addEventListener("click", gridClear);
colorPicker.addEventListener("change", changeColorPicker);
colorPicker.addEventListener("click", changeColorPicker);


//test function
function test(e){
    console.log("Jenő");
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
function colorChanger(color){
    const cells = document.querySelectorAll(".grid-cell");
    if(color=="CHANGE"){
        for(var i = 0; i < cells.length;i++){
            const cell = cells[i];
            cell.addEventListener("mouseover", function(){
            color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            cell.style.backgroundColor = color;
            })
            }
    }

    else if(color=="white"){
        for(var i = 0; i < cells.length;i++){
            const cell = cells[i];
            cell.style.backgroundColor = color;
            }
    }
    else{
        for(var i = 0; i < cells.length;i++){
            const cell = cells[i];
            cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = color;
            })
        }
    }
}
    //Colors
    function changeToBlack(){
        colorChanger("black");
    }
    function changeToColorChange(){
        colorChanger("CHANGE");
    }
    function changeColorPicker(){
        colorChanger(colorPicker.value);
    }
    //Clear the whole grid
    function gridClear(){
        colorChanger("white");
    }



gridRange()




