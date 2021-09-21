const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);

}

btn.addEventListener("click", function(){
    const randomNumber = getRandomColor();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
})