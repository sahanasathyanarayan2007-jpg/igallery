# Ex.07 Design of Interactive Image Gallery
## Date:24-12-2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
gall.html
<html>
<head>
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="top-banner">Interactive Image Gallery</div>

    <div class="main-content">
        <div class="gallery-container">
            <img id="galleryImage" class="gallery-image" src="blue.jpg">
            <div id="caption" class="caption">Blue and Golden Macaw</div>
            <div class="gallery-buttons">
                <button onclick="prevImage()">Previous</button>
                <button onclick="nextImage()">Next</button>
            </div>
        </div>
    </div>

    <div class="footer-banner">
        SAHANA S(25004522)
    </div>

    <script src="script.js"></script>
</body>
</html>

script.js

const gallery = [
    { src: "blue.jpg", caption: "Blue and Golden Macaw" },
    { src: "green.jpg", caption: "Green-Winged Macaw" },
    { src: "scar.jpg", caption: "Scarlet Macaw" },
    { src: "hya.jpg", caption: "Hyacinth Macaw" }
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}

style.css
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f8f9fa;
}

.top-banner {
    background-color: #ada298;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 22px;
    font-weight: bold;
}

.main-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery-container {
    background: rgb(172, 164, 164);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 450px;
}

.gallery-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
}

.caption {
    margin: 15px 0;
    font-size: 18px;
    font-weight: 500;
}

.gallery-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

button {
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #716fbe;
    color: white;
    font-size: 16px;
    transition: background 0.2s;
}

button:hover {
    background-color: #9393a2;
}

.footer-banner {
    background-color: #b4bcc4;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 10px;
    font-size: 14px;
}
```

## OUTPUT:
![alt text](<sahana/galleryapp/static/Screenshot (35).png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
