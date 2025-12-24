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