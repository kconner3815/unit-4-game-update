
// 4 crystals ( you will need images that are buttons)
// Random number at the start of the game 
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.
// You need a new random number everytime someone hits a win or loose 
// when you click the crystal, it should add previous number until you hit the random number
// If the added number is greater than random then you loose  COUNT LOOSE
// if the added number is equal then COUNT WIN


// declare varibales 

// value at the begining of game PS dont set to an empty string or will be undegined


$(document).ready(function() {

    var randomResult; 
    
    // Add wins to increment counter 
    var win = 0;
    
    // Add losses to increment counter
    var lost = 0; // these will always = undefinfed below I added = 0 to make it not undefinned
    
    
    var previous = 0;
    // build the 4 crystals
    
    
    
    
    
    
    var resetAndStartGame = function () {
    
    $(".crystals").empty();
    
    var images = ["cry1.png",
                  "cry2.png", 
                  "cry3.png",
                  "cry4.png"]
    
    randomResult = Math.floor(Math.random() * 69) + 30;
    //console.log(randomResult);
    
    $("#result").html("Your random number is: " + randomResult);
    
    for ( var i = 0; i < 4; i ++) {
    
    
    
    // this creates 4 divs for the crystal containers - easier than creating 4 new divs
    
    // generate 4 random numbers in the loop with a math.random
    
    var random = Math.floor(Math.random()* 11) + 1;
    //console.log(random);
    
    
    
    
    
    var crystal = $("<div>");
    
    // then set an attribute 
    
    crystal.attr({
        "class": "crystal", 
        "data-random": random // this inputs those random numbers in the DIVS! notice that is a oject with kwys 
        
    });
    
    crystal.css({
        "background-image": "url('" + images[i] + "')",
        "background-size":"250px"
    });
    
    $(".crystals").append(crystal);
    
    }
    
        $("#previous").html("Total score: " + previous);
    }
    
    
    
    
    resetAndStartGame();
    
    // now add clicks - when you click the crystal
    $(document).on("click", ".crystal", function () {
    
        //console.log($(this).attr("data-random"));
    
        var num = parseInt($(this).attr("data-random"));
    
           //var result = num + 5; 
           //console.log(num, "+", result);
    
        previous += num;
    
        $("#previous").html("Total score: " + previous);
    
        console.log(previous);
    
        if (previous > randomResult) {
            //console.log("You lose");
            // add increment counter
            lost++;
            $("#lost").html("Amount of loses: " + lost);
    
            previous = 0;
    
    
            
            resetAndStartGame();
    
        } else if (previous === randomResult) {
    
           // console.log("Winner Winner!");
           //add increment counter
           win++; 
    
           $("#win").html("Amnout of Wins: " + win);
    
           previous = 0;
    
          
           resetAndStartGame();
        }
        
        });
    
    
    
    
    
    
    });