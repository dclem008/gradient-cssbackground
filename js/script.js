let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let body = document.getElementById("gradient");
let gradBtn = document.querySelector(".changeGradient");
let brightnessFilter = document.querySelector(".brightness");
let contrastFilter = document.querySelector(".contrast");

const changeBackground = () => {

    body.style.background = "linear-gradient(to right, " + color1.value  + " , " + color2.value + "," + color3.value + ")";

    gradBtn.style.background = "linear-gradient(to top, " + color2.value  + " , " + color1.value + "," +  color3.value + ")";
    css.textContent = body.style.background + ";";
}

const getRandomColor = () => {
    const colorLetters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const generateRandomColors = () => {

    let firstColor = getRandomColor();
    let secondColor = getRandomColor();
    let thirdColor = getRandomColor();

    color1.value = firstColor;
    color2.value = secondColor;
    color3.value = thirdColor;

    changeBackground();
}

const changeBrightness = () => {
    if(brightnessFilter.value > 0 && brightnessFilter.value <= 15) {
        setBodyFilter("brightness", brightnessFilter.value)
    }
}

const changeContrast = () => {
    if(contrastFilter.value > 0 && contrastFilter.value <= 10) {
        setBodyFilter("contrast", contrastFilter.value);
    }
}

const setBodyFilter = (filter, value) => {
    body.style.filter = filter + "(" + (value * 10) + "%)";
}

window.onload = () => {
    css.textContent = ";";
}

gradBtn.addEventListener("click", generateRandomColors);

color1.addEventListener("input", changeBackground)

color2.addEventListener("input", changeBackground)

brightnessFilter.addEventListener("input", changeBrightness);

contrastFilter.addEventListener("input", changeContrast);

