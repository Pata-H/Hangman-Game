window.onload = function name(){

// Create an array of Pokemon names//
// Set win count and loss count to 0, and the number of guesses to 10//


var pokeNames = [
    'bulbasaur', 'pikachu', 'tyranitar', 'virizion', 'chespin',
    'kecleon', 'whiscash', 'tornadus', 'milotic', 'venonat',
    'electrike', 'porygon', 'donphan', 'floatzel', 'suicune',
    'sylveon', 'lunala', 'empoleon', 'gothitelle', 'dragalge',
    'talonflame', 'oranguru', 'noivern', 'diglett', 'mewtwo'
];
   
   var pickedName = "";
   var pickedLetters = [];
   var blankSlots = 0;
   var totalSlots = [];
   var wrongCount = [];
   
   var winCount = 0;
   var lossCount = 1;
   var guessLeft = 15;
   
   function startGame(){

   wrongCount = [];
   guessLeft = 15;
   totalSlots = [];
   
   
   pickedName = pokeNames[Math.floor(Math.random() * pokeNames.length)];
   pickedLetters = pickedName.split("");
   blankSlots = pickedLetters.length;
   console.log(pickedName);
   console.log(blankSlots)
   
   for(var i = 0; i < blankSlots; i++){
       totalSlots.push("_");
   }
   console.log(totalSlots);
   document.getElementById('letters').innerHTML = totalSlots.join(" ");
   document.getElementById('guesses').innerHTML = guessLeft;
   }

   
// When the player presses a key, it checks if it matches one of the letters on the selected names//

//If yes it swaps one of the blank boxes in the right place//

//If no it reduces the Guess counter by one, and puts the used letter in the Wrong Guess box//


   
   
   function checkLetters(letter){
   
       var nameLetter = false;
   
       for(var i = 0; i < blankSlots; i++){
           if(pickedName[i] === letter){
               nameLetter = true
           }
       }
   
       if(nameLetter){
           for(i = 0; i <blankSlots; i++){
               if(pickedName[i] === letter){
               totalSlots[i] = letter;   
           }
           }

       }else{
           guessLeft --;
           wrongCount.push(letter)
       }
   }
   
//If guesses reach 0 it clears the boxes, resets the guess counter, and picks a new name, and incriments the loss counter by one.//

//If name is guessed it clears the boxes, resets the guess counter, picks a new name, and incriments the win counter by one.//
   
   function nextRound(){

   
       document.getElementById('letters').innerHTML = totalSlots.join(" ");
       document.getElementById('guesses').innerHTML = guessLeft;
       document.getElementById('wrong').innerHTML = wrongCount.join(" ");
   
       console.log(pickedLetters);
       console.log(totalSlots);
       if(pickedLetters.join(" ") === totalSlots.join(" ")){
           winCount++;
           alert("You caught a " + pickedName + "!");
           document.getElementById('wins').innerHTML = winCount;
           startGame();
       }else if(guessLeft === 0){
           document.getElementById('losses').innerHTML  = lossCount ++;
           document.getElementById('wrong').innerHTML = "";
           alert("Darn it got away!");        
           startGame();
       }
   }
   
   startGame();
   document.onkeyup = function(event){
 
       var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
       checkLetters(letterGuessed)
       nextRound();
   }

}