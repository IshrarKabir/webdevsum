document.addEventListener('DOMContentLoaded', function() {
    var removeButton = document.getElementById('removeButton');
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    removeButton.addEventListener('click', function() {
        if (image1) {
            image1.parentNode.removeChild(image1); 
        }
    });
    
    
    addButton.onclick = function() {
        var addimage = document.createElement('img');
        addimage.src = "https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg";
        addimage.id = "image2";
        addimage.alt = "A happy cat";
        addimage.width = 400;
        addimage.height = 400;
        addButton.parentNode.appendChild(addimage);
    };
});


