

const border1 = document.getElementById('border_1');
const border2 = document.getElementById('border_2');
const border3 = document.getElementById('border_3');
const border4 = document.getElementById('border_4');
const move1 = document.getElementById('move_1');
const move2 = document.getElementById('move_2');
const move3 = document.getElementById('move_3');
const move4 = document.getElementById('move_4');
const color1 = document.getElementById('color_1');
const color2 = document.getElementById('color_2');
const color3 = document.getElementById('color_3');
const color4 = document.getElementById('color_4');
const color5 = document.getElementById('color_5');
const color6 = document.getElementById('color_6');
const color7 = document.getElementById('color_7');
const color8 = document.getElementById('color_8');

const modal_bg = document.querySelector('.modal_bg');



function border1_modal(){
    modal_open(border1);
    
}
function border2_modal(){
    modal_open(border2);
}
function border3_modal(){
    modal_open(border3);
}
function border4_modal(){
    modal_open(border4);
}
function move1_modal(){
    modal_open(move1);
}
function move2_modal(){
    modal_open(move2);
}
function move3_modal(){
    modal_open(move3);
}
function move4_modal(){
    modal_open(move4);
}
function color1_modal(){
    modal_open(color1);
}
function color2_modal(){
    modal_open(color2);
}
function color3_modal(){
    modal_open(color3);
}
function color4_modal(){
    modal_open(color4);
}
function color5_modal(){
    modal_open(color5);
}
function color6_modal(){
    modal_open(color6);
}
function color7_modal(){
    modal_open(color7);
}
function color8_modal(){
    modal_open(color8);
}

function modal_open(value) {
    value.style.display = 'block';
    value.classList.add('fadeIn');
    modal_bg.style.display= 'block';
    modal_bg.classList.add('fade50');
    modal_bg.addEventListener('click', function(){
        value.style.display = 'none';
        value.classList.remove('fadeIn');
        modal_bg.style.display= 'none';
        modal_bg.classList.remove('fade50');
    });

}
