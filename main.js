function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

// Create a center tag to center all the elements
var center = document.createElement('center');
 
// Create a table element
var ChessTable = document.createElement('table');
for (var i = 0; i < 16; i++) {

    // Create a row
    var tr = document.createElement('tr');
    for (var j = 0; j < 16; j++) {

        // Create a cell
        var td = document.createElement('td');

        td.setAttribute('class', 'cell whitecell');
        tr.appendChild(td);
    }

    // Append the row
    ChessTable.appendChild(tr);
}
center.appendChild(ChessTable);

// Modifying table attribute properties
ChessTable.setAttribute('cellspacing', '0');


const container = document.querySelector('.container');
container.appendChild(center);

const squares = document.querySelectorAll('.cell');

squares.forEach((button) => {

    // and for each one we add a 'mouseover' listener
    button.addEventListener('mouseover', () => {
        
        button.style.backgroundColor = getRandomColor(); 

    });
});

