
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1 ; // 1 - 6

// EXPLANATION OF ABOVE CODE WE CAAN ALSO WRITE IT LIKE BELOW
// var randomNumber1 = math.random();
// // creating a random number bw 0 - .99 it is whole number FOR 1 DICE
//  randomNumber1 = randomNumber1 * 6 ;
//
//  // making that number from 0 to 5.99 it is also whole number
//  randomNumber1 = math.floor(randomNumber1) + 1:
//  // math.floor() is for making it a integer and + 1 to make it 6 from 5.99 which is converted to 5
//  // by math.floor() as it simply drops the value after decimal it works like whole number

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1 - dice6
// taking random image with the help of random number , and done by string concactenation

var randomImageSource = "images/" + randomDiceImage ; //images/dice1.png - images/dice6.png
// to incude the full path as the images are in the images folder

 var image1 = document.querySelectorAll("img")[0];
//All as there are two elements with class = image , i.e. to include both and [0] to select img1 element

image1.setAttribute("src" , randomImageSource);
// setting the attribute source to the randomImageSource so that it will change randomly

// all similar process for the 2 dice6

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);

//if player 1 wins
if(randomNumber1 > randomNumber2){

document.querySelector("h1").innerHTML = "Player 1 Wins";

} else if(randomNumber2 > randomNumber1){// if plpayer 2 wins

document.querySelector("h1").innerHTML = " Player 2 Wins";

}

else { //if the match draws
  document.querySelector("h1").innerHTML = " Draw";
}
