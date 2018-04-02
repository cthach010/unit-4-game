  $( document ).ready(function(){
  //  random number to guess
  var Random=Math.floor(Math.random()*102+19)
  
  // Display random number
  $('#scoreToMatch').text(Random);
  
  // random number for each pups
  var num1= Math.floor(Math.random()*12+1)
  var num2= Math.floor(Math.random()*12+1)
  var num3= Math.floor(Math.random()*12+1)
  var num4= Math.floor(Math.random()*12+1)
  
  // Variables of wins, losses and total
  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
  

$('#wins').text(wins);
$('#losses').text(losses);

// Reset game
function reset(){
      Random=Math.floor(Math.random()*102+19);
      console.log(Random)
      $('#scoreToMatch').text(Random);
      num1= Math.floor(Math.random()*12+1);
      num2= Math.floor(Math.random()*12+1);
      num3= Math.floor(Math.random()*12+1);
      num4= Math.floor(Math.random()*12+1);
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
      } 
// wins
function win(){
alert("Yay! You won!");
  wins++; 
  $('#wins').text(wins);
  reset();
}
//  losses
function lost(){
alert ("Aww! Try again");
  losses++;
  $('#losses').text(losses);
  reset()
}
// Clicking pups
  $('.1').on ('click', function(){
    playerTotal = playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
          //Win & lose conditions
        if (playerTotal == Random){
          win();
        }
        else if ( playerTotal > Random){
          lost();
        }   
  })  
  $('.2').on ('click', function(){
    playerTotal = playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
        if (playerTotal == Random){
          win();
        }
        else if ( playerTotal > Random){
          lost();
        } 
  })  
  $('.3').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal);

          if (playerTotal == Random){
          win();
        }
        else if ( playerTotal > Random){
          lost();
        } 
  })  
  $('.4').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
      
          if (playerTotal == Random){
          win();
        }
        else if ( playerTotal > Random){
          lost();
        }
  });   
}); 