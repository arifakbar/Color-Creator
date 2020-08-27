// console.log("hello")
var red =document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var screen = document.getElementById('screen');
var samples = document.getElementById('samples');
var rgbValue;
function colorMix(){
    var redValue = red.value;
    var greenValue = green.value;
    var blueValue = blue.value;
    rgbValue = `rgb(${redValue},${greenValue},${blueValue})`;
    screen.style.backgroundColor = rgbValue;
    screen.innerHTML = "Click to add Sample";
}
screen.addEventListener('click',function(){
    if(rgbValue !== undefined){
        samples.innerHTML += ` <div style="background-color:${rgbValue} ;" class="samples"></div>`
    }
})