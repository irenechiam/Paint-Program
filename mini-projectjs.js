let paintColor = "black"; // default color 
let columns = 16;
let rows = 15;

function pickColor(id) {
    paintColor = document.getElementById(id).style.backgroundColor;
    document.getElementById('selectedColor').style.backgroundColor = paintColor;
}

function changeColor(id) {
    document.getElementById(id).style.backgroundColor = paintColor;
}

//Resetting the canvas 
function reset() {
    location.reload();
}

function shiftLeft() {
    let rightCol = [];
    // iterates throught the most right column and store its color at each cell
    for (let i = 1; i < rows + 1; i++) {
        let id = 'r' + i.toString() + 'c16';
        let color = document.getElementById(id).style.backgroundColor;
        rightCol.push(color);
    }
    //iterates through each column
    for (let j = 1; j < columns + 1; j++) {
        // iterates through each row
        for (let i = 1; i < rows + 1; i++) {
            let paintCellId = 'r' + i.toString() + 'c' + j.toString();
            if (j == 1) {
                let leftId = 'r' + i.toString() + 'c16';
                document.getElementById(leftId).style.backgroundColor = document.getElementById(paintCellId).style.backgroundColor;
            }
            else if (j == columns) {
                // assigns the color of the cell based on the rightCol
                let leftId = 'r' + i.toString() + 'c' + (j - 1).toString();
                // Array index starts with 0, while the row starts with index 1 
                document.getElementById(leftId).style.backgroundColor = rightCol[i - 1];
            }
            else {
                let leftId = 'r' + i.toString() + 'c' + (j - 1).toString();
                document.getElementById(leftId).style.backgroundColor = document.getElementById(paintCellId).style.backgroundColor;
            }
        }
    }
}

// shift all colors to the right 
function shiftRight() {
    // iterates throught the most left column and store its color at each cell
    let leftCol = [];
    for (let i = 1; i < rows + 1; i++) {
        let id = 'r' + i.toString() + 'c1';
        let color = document.getElementById(id).style.backgroundColor;
        leftCol.push(color);
    }
    //iterates through each column
    for (let j = columns; j >= 1; j--) {
        // iterates through each row
        for (let i = 1; i < rows + 1; i++) {
            let paintCellId = 'r' + i.toString() + 'c' + j.toString();
            if (j == columns) {
                let rightId = 'r' + i.toString() + 'c1';
                document.getElementById(rightId).style.backgroundColor = document.getElementById(paintCellId).style.backgroundColor;
            }
            else if (j == 1) {
                // assigns the color of the cell based on the leftCol
                let rightId = 'r' + i.toString() + 'c' + (j + 1).toString();
                // Array index starts with 0, while the row starts with index 1 
                document.getElementById(rightId).style.backgroundColor = leftCol[i - 1];
            }
            else {
                let rightId = 'r' + i.toString() + 'c' + (j + 1).toString();
                document.getElementById(rightId).style.backgroundColor = document.getElementById(paintCellId).style.backgroundColor;
            }
        }
    }
}

// fills the table with 1 color 
function fillColor() {
    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < columns + 1; j++) {
            let id = 'r' + i.toString() + 'c' + j.toString()
            document.getElementById(id).style.backgroundColor = paintColor;
        }
    }
    
}

function randomGenerate() {
    // iterates through each row
    for (let i = 1; i < rows + 1; i++) {
        // iterate through each column
        for (let j = 1; j < columns + 1; j++) {
            let id = 'r' + i.toString() + 'c' + j.toString();
            // random generates a number from 1 to 16
            let num = Math.round(Math.random() * 15) + 1;
            let colorId = 'c' + num.toString();
            document.getElementById(id).style.backgroundColor = document.getElementById(colorId).style.backgroundColor;
        }
    }
}

// makes an image of a duck
function duck() {
    let yellowList = Array.from(document.querySelectorAll(".yellowCells"));
    let blackList = Array.from(document.querySelectorAll(".blackCells"));
    let orangeList = Array.from(document.querySelectorAll(".orangeCells"));

    for (let i = 0; i < yellowList.length; i++) {
        id = yellowList[i].getAttribute("id");
        document.getElementById(id).style.backgroundColor = "yellow";
    }

    for (let i = 0; i < blackList.length; i++) {
        id = blackList[i].getAttribute("id");
        document.getElementById(id).style.backgroundColor = "black";
    }

    for (let i = 0; i < orangeList.length; i++) {
        id = orangeList[i].getAttribute("id");
        document.getElementById(id).style.backgroundColor = "orange";
    }
}

