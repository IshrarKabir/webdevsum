document.addEventListener('DOMContentLoaded', function() {
    var removeButton = document.getElementById('removeButton');
    var addButton = document.getElementById('addButton');
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    removeButton.addEventListener('click', function() {
        if (image1) {
            image1.parentNode.removeChild(image1); 
        }
    });

    var gatoimage = document.getElementById('image2');
        if (!gatoimage) {
            
            var gato = document.createElement('img');
            gato.src = "https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg";
            gato.id = "image2";
            gato.alt = "A happy cat";
            gato.width = 400;
            gato.height = 400;

            addButton.parentNode.appendChild(gato); // Append the new image after the add button
        }
    });

