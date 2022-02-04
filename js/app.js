const title = document.querySelector(".class:first-child");

const handleTitleClick = () => {
    console.log("click");
    title.style.color = "#ff22ff";
    title.style.fontSize = "50px";
};

title.addEventListener("click", handleTitleClick);

const handleResize = () => {
    console.log(window.innerWidth);
};

window.addEventListener("resize", handleResize);
console.dir(window);
