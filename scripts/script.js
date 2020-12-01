
let gridSize = 16;
let colorChoice = "rgb(230, 113, 113)";
let initialLoad = false;

/* Iterate over loop to create rows and columns of divs */
function createGrid() {
    const allSquares = document.getElementsByClassName('gridsquare');
    while (allSquares[0]){
        gridContainer.removeChild(allSquares[0]);
    }
    const valueButton = document.getElementById('gsize').value;
    /* Checks if user has entered value. If not, placeholder value of 16 is used. */
    if (valueButton === '') {
        gridSize === 16;
    } else {
        gridSize = valueButton;
    }
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            let newDiv = document.createElement('div');
            /* Assign all divs the same class and a unique ID based on row/column */
            newDiv.id = 'square' + i + j;
            newDiv.className = 'gridsquare';
            document.getElementById('gridContainer').appendChild(newDiv);
        }
    }
    /* Set grid container rows/columns equal to the grid size. */
    document.getElementById('gridContainer').setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr);
        grid-template-rows: repeat(${gridSize}, 1fr)`)
}
/* Add event listeners to all squares via their class. */
function createButtonEvents(){
    const element = document.getElementsByClassName('gridsquare');
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('click', function(){
            element[i].style.backgroundColor = colorChoice;
        });
    }
}

/* Pressing Set Size triggers grid creation function and click events for each square */
document.getElementById('setValue').addEventListener("click", function(){
    createGrid();
    createButtonEvents();
});

document.getElementById('red').addEventListener("click", function() {
    colorChoice = 'rgb(230, 113, 113)';
});

document.getElementById('blue').addEventListener("click", function() {
    colorChoice = "rgb(148, 148, 219)";
});

document.getElementById('green').addEventListener("click", function() {
    colorChoice = "rgb(131, 224, 131)";
});

document.getElementById('yellow').addEventListener("click", function() {
    colorChoice = "rgb(255, 217, 94";
});

document.getElementById('gridContainer').addEventListener('mouseenter', function(){
    if (initialLoad === false) {
        createGrid();
        createButtonEvents();
        initialLoad = true;
    }
});
