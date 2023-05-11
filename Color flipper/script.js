const colors = ["Red", "Blue", "Green", "Yellow", "Violet", "Indigo", "Orange"];
const btn = document.getElementById("btn-click");
const color = document.querySelector(".color");
document.body.style.backgroundColor = color.textContent;

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}