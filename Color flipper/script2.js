const colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn-click");
const color = document.querySelector(".color");

document.body.style.backgroundColor = color.textContent;

btn.addEventListener("click", function () {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        const randomNumber = getRandomNumber();
        hex += colors[randomNumber];
    }
    document.body.style.backgroundColor = hex;
    color.textContent = hex;

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}