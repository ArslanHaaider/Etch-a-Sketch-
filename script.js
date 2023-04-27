let container = document.querySelector('.container');
//16*16 divs inside container using for loop
let grid_size = 16
create_grid();
let size_button = document.querySelector('.change_size');
size_button.addEventListener('click', function(){
    grid_size = prompt('Enter the size of the grid(max 40)');
    if(grid_size>40){
        grid_size = 40;
    }
    container.innerHTML = '';
    create_grid();
})

function create_grid(){
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
}
