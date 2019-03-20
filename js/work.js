const items = document.getElementsByClassName('projectTitle');
const images = document.getElementsByClassName('bio-image');


function setDisplayNone() {
 for(let incrument=0;incrument<items.length;incrument++){
   
    items[incrument].classList.add('noneActive');
    images[incrument].addEventListener('mouseover',function () {
        hoverAlert(incrument);
    });
    images[incrument].addEventListener('mouseout',function () {
        hoveroutAlert(incrument);
    });
 }

}

setDisplayNone(); 

function hoverAlert (counter) {
    // alert('Hello from hover '+counter);
    items[counter].classList.remove('noneActive');
}
function hoveroutAlert (counter) {
    // alert('Hello from hover '+counter);
    items[counter].classList.add('noneActive');
}