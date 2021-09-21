const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


function getRandomColor(){
    return Math.floor(Math.random() * hex.length);

}

btn.addEventListener("click", function(){
    let hexColor = "#";
    for(i=0; i<6;i++){
        hexColor += hex[getRandomColor()]
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    console.log(hexColor);

    if(hexColor == "#00000" ){
        hexColor = "#FFFFFF";
        color.style.color = hexColor
    }
    color.style.color = hexColor;
})

