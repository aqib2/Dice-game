//  RANDOM DICE IMAGE 1 

 var randomNumber1 = Math.round(Math.random() * 6); //going to give a random number betwwen 1-6//

 var randomDiceImage = "Dice" + randomNumber1 + ".png" //dice1.png-dice6.png//

 var randomImageSource = "images/" + randomDiceImage; //images/dice1.png- images/dice6.png//

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src" , randomImageSource);

//  RANDOM DICE IMAGE 2

 var randomNumber2 = Math.floor(Math.random() * 6) + 1;

 var randomDiceImage2 = "Dice" + randomNumber2 + ".png";

 var randomImageSource2 = "images/" + randomDiceImage2;

 var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src" , randomImageSource2)

 //CHANGING NAME OF THE WINNER FROM REFRESH ME

 // if player 1 wins

 if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 wins!";
 } 
 else if (randomNumber2 > randomNumber1) {
     document.querySelector("h1").innerHTML = "Player 2 wins!"
 } else {
     document.querySelector("h1").innerHTML = "It is a draw"
 }