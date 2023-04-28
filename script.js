let container = document.querySelector('.container');
//16*16 divs inside container using for loop
let grid_size = 16
let paint_color = 'black';
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
    let grids = document.querySelectorAll('.col');
    grids.forEach(grid => {grid.addEventListener('mouseover', function(){
        grid.style.backgroundColor = paint_color;
    })})
}
let grids = document.querySelectorAll('.col');

let eraser_button = document.querySelector('.eraser');

eraser_button.addEventListener('click', function(){
    let grids = document.querySelectorAll('.col');
    grids.forEach(grid => {grid.addEventListener('mouseover', function(){
        grid.style.backgroundColor = 'white';
    })
})});       

let color_select = document.querySelector('#color_btn');
let colorSelectValue = document.querySelector('#color_value');

color_select.addEventListener('click',function(){
    colorSelectValue.click();
})

colorSelectValue.addEventListener('change',function(){
    paint_color = colorSelectValue.value;
    grids.forEach(grid => {grid.addEventListener('mouseover', function(){
        grid.style.backgroundColor = paint_color;
    
    })})    
})



let reset = document.querySelector('#reset');

reset.addEventListener('click', function(){
    let grids = document.querySelectorAll('.col');
    grids.forEach(grid  => {grid.style.backgroundColor = 'white'});
})