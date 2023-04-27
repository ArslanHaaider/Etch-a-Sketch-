let container = document.querySelector('.container');
//16*16 divs inside container using for loop
let grid_size = 20
for(let x = 0; x<=grid_size; x++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let y = 0;y<=grid_size ;y++){
        let col = document.createElement('div');
        col.classList.add('col');
        row.appendChild(col);
    }
}

