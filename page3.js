
// function myremove() {
//     const myDiv = document.getElementById(image);
//     const parent= constant

// const removebutton = document.getElementById('removebutton'); 
// const imageElement = document.getElementById('image'); 
// removebutton.addEventListener('click', function () { 
//     imageElement.parentNode.removeChild(imaged); 
//             }); 
document.addEventListener('DOMContentLoaded', function() {
    var removeButton = document.getElementById('removebutton');
    var image = document.getElementById('imaged');

    function myfunction() {
        const element = document.getElementById("img");
        element.remove();
    };

    removeButton.addEventListener('click', hideImage);
});