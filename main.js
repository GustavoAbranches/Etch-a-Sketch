function createGrid(size){
    const divSquare = document.getElementById('div-square');
    divSquare.innerHTML = '';

    const itemSize = 600/size;

    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement('div');

        newDiv.classList.add('created-div');
        newDiv.style.width = `${itemSize}px`;
        newDiv.style.width = `${itemSize}px`;

        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'black'
        });

        divSquare.appendChild(newDiv);
    }
}

function resizedGrid(){
    const newSize = parseInt(prompt('Enter the number of squares per side (max 100):'), 10);

    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createGrid(newSize);
    }
}

document.getElementById('button-square').addEventListener('click',resizedGrid );
createGrid(16);