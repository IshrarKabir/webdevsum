removeButton.onclick=function() {
    var image1 = document.querySelector('#image1');
    if (image1) {
        image1.remove();
        }
    };
addButton.onclick = function() {
    var addimage = document.createElement('img');
    addimage.src = "https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg";
    addimage.id = "image2";
    addimage.alt = "A happy cat";
    addimage.width = 400;
    addimage.height = 400;
    addButton.parentNode.appendChild(addimage);
    };



