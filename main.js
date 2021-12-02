let numberOfRowsSelected = 32;
let numberOfColumnsSelected = 32;

const container = document.querySelector('.container');


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


for (let i = 0; i < numberOfRowsSelected; i++) {

    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < numberOfColumnsSelected; j++) {
        let unit = document.createElement('div');
        unit.classList.add('cell', 'blackcell');
        row.appendChild(unit);
    }

    container.appendChild(row);
}

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {

    // and for each one we add a 'mouseover' listener
    cell.addEventListener('mouseover', () => {

        cell.style.backgroundColor = getRandomColor();

    });
});