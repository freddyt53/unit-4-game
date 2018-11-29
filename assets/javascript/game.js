
//a game with 4 jewels and random result
//every jewel needs to have a random number betwee 1 - 12
//a new random number should be generate every single time we win or lose
//when clicking any jewel, it should be adding to the previous result until it equals the random result or goes over
//if it is greater than the random result, then we increment the losses counter
//if it is equal, then we increment a win counter



//sets up random number user is trying to match
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    console.log(Random)
    $('#number').text(Random);

//	setting up four random numbers array, total variable and printing the wins & losses variables	
var generatedNumbers = []
var total= 0;	
var wins= 0;
var losses = 0;
$('#numberWins').text(wins);
$('#numberLosses').text(losses);		


//sets up random numbers for each jewel
function fourRandomNumbers(){
for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*11+1);
    generatedNumbers.push(num);
}
console.log(generatedNumbers) 
}

fourRandomNumbers();

//resets the game
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#number').text(Random);
    generatedNumbers = [];
    fourRandomNumbers();
    total= 0;
    $('#Combined').text(total);
    } 

//adds the wins to the total
function win(){
alert("You won!!!");
    wins++;	
    $('#numberWins').text(wins);
    reset();
}

//adds the losses to the total
function lose(){
alert ("You lose!!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}

//sets up click for jewels
    $('#one').on ('click', function(){
        total = total + generatedNumbers[0];
        console.log("New total= " + total);
        $('#Combined').text(total);	

//sets win/lose conditions
        if (total == Random){
            win();
        }
        else if ( total > Random){
            lose();
        }		
    })	

    $('#two').on ('click', function(){
        total = total + generatedNumbers[1];
        console.log("New total= " + total);
        $('#Combined').text(total);	

        if (total == Random){
            win();
        }
        else if ( total > Random){
            lose();
        }	
    })	

    $('#three').on ('click', function(){
        total = total + generatedNumbers[2];
        console.log("New total= " + total);
        $('#Combined').text(total);

    if (total == Random){
        win();
    }
    else if ( total > Random){
        lose();
        }	
    })	

    $('#four').on ('click', function(){
        total = total + generatedNumbers[3];
        console.log("New total= " + total);
        $('#Combined').text(total);	
            
                    if (total == Random){
                    win();
                }
                else if ( total > Random){
                    lose();
                }
    });  	

});	

