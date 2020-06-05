var numSquares = 6;
//we are creating color array. That will give us an array as string
var colors = [];
//secmemiz gereken rengi tanımlıyoruz
var pickedColor;

//javascriptte kullanmak için  bütün .square classlarını seçiyoruz
var squares = document.querySelectorAll(".square");
//colorDisplayi seçecegiz
var colorDisplay = document.getElementById("colorDisplay");
//span'ın içine yazdıgımız message id'sini seçecegiz
var messageDisplay = document.getElementById("message");
//we want to update color
colorDisplay.textContent = pickedColor;
// h1 nın arkasına backgroun color ekleyecegız
var h1 = document.querySelector("h1");
//rest button'u seçeceğiz
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButton();
    setUpSquares();
    reset();
}
function setUpModeButton(){
    //mode buttons event
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            this.classList.add("selected");
             modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
             this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }else{ numSquares = 6;
            }
            reset();
        });
    }
}
function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to square
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent =pickedColor;
    resetButton.textContent ="New Colors";
    messageDisplay.textContent ="";
    //change color of square
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
           squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }   
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }    
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColor(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
        //get random color and push into arr

    }
    //return that array
    return arr;
}
function randomColor(){
    //pick a "red" rom 0 to 255
   var r = Math.floor(Math.random()*256);
    //pick a "green" rom 0 to 255
    var g = Math.floor(Math.random()*256);
    //pick a "blue" rom 0 to 255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}