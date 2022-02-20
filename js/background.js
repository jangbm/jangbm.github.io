const images = [
    "001.PNG",
    "002.PNG",
    "003.PNG",
    "004.PNG",
    "005.PNG",
    "006.PNG",
    "007.PNG",
    "008.PNG",
    "009.PNG",
    "010.PNG",
];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${choseImage}`;

document.body.appendChild(bgImage);
