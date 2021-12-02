let numberOfRowsSelected = 16;
const container = document.querySelector('.container');
document.querySelector('.reset-button').onclick = reset;

start(numberOfRowsSelected);

function start(numberOfRowsSelected) {
    createGrid(numberOfRowsSelected);
    setUpCells();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(numberOfRowsSelected) {
    for (let i = 0; i < numberOfRowsSelected; i++) {

        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < numberOfRowsSelected; j++) {
            let unit = document.createElement('div');
            unit.classList.add('cell', 'blackcell');
            row.appendChild(unit);
        }

        container.appendChild(row);
    }
}



function setUpCells() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {

        // and for each one we add a 'mouseover' listener
        cell.addEventListener('mouseover', () => {
            if (!cell.style.backgroundColor || cell.style.backgroundColor == 'black') {
                cell.style.backgroundColor = getRandomColor();
                cell.style.color = cell.style.backgroundColor;

            } else {
                let orignalRgb = cell.style.color;
                let rgb = cell.style.backgroundColor;

                let colors = ["red", "green", "blue"]

                // Getting the index of "(" and ")" 
                // by using the indexOf() method
                let colorArr = rgb.slice(
                    rgb.indexOf("(") + 1,
                    rgb.indexOf(")")
                ).split(", ");

                let originalColorArr = orignalRgb.slice(
                    orignalRgb.indexOf("(") + 1,
                    orignalRgb.indexOf(")")
                ).split(", ");


                let obj = new Object();

                // Insert the values into obj 
                colorArr.forEach((k, i) => {

                    obj[colors[i]] = k - (originalColorArr[i] / 10)
                })


                cell.style.backgroundColor = `rgb(${obj[colors[0]]}, ${obj[colors[1]]}, ${obj[colors[2]]})`

            }
        });
    });
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function reset() {

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'black';
    });

    let answer = prompt('Enter the number of rows you wish to use! The Grid will remain a square.', '16');

    let numcheck = parseInt(answer);

    removeAllChildNodes(container);
    if (answer != null && numcheck == answer) {
        start(answer);
    } else {
        start(16);
    }


}