
// Important to start jQuery logic with the ready function

// IMPORTANT NOTE: I have decided to leave some of the lines of code that I attempted to use and their comments in order to get feedback on these failed attemps

$(document).ready(function() {
    // Always test with a quick console.log to make sure the HTML file is taking the javascript
    console.log("is this mic on?")
    
    // I will declare the values that will be global to the runtime of the game
    var userScore = 0;
    var userWins = 0;
    var userLosses = 0;
    var targetScore = 0;
    var didUserReachTargetScore = false;
    var didUserPassTargetScore = false;
    
    var rupeeSound = new Audio("assets/sounds/rupee-sound-effect.wav");
    var winnerSound = new Audio("assets/sounds/OOT_Fanfare_Item.wav");
    var loserSound = new Audio ("assets/sounds/AOL_Ganon_Laugh.wav")

    // var didGameStart = false;

    // these variables will be declared in order to randomize the crystal values
    var redRupeeValue = 0;
    var greenRupeeValue = 0;
    var yellowRupeeValue = 0;



    // I will use a function to start the game
    function initializeCrystalGame() {

        // starting the game should set all of these values to random intergers
        targetScore = Math.floor((Math.random() * 100) + 30);
        redRupeeValue = Math.floor((Math.random() * 15) + 1);
        greenRupeeValue = Math.floor((Math.random() * 15) + 1);
        yellowRupeeValue = Math.floor((Math.random() * 15) + 1);

        // user score should be zero on each initialization
        userScore = 0;



        // these booleans ensure that the game resets to where the user has not won or lost the game
        didUserPassTargetScore = false;
        didUserReachTargetScore = false;
        // didGameStart = true;



        // this will set the elements that should display zero, to be zero upon the initial game, and then change after each successive game played
        $("#user-score").html(userScore);
        $("#user-wins").html(userWins);
        $("#user-losses").html(userLosses);


    

        // these lines will append the randomized numbers to their respective components
        newTargetScore = $("#target-score").html(targetScore);

        // These next three have to be different because they will not show their value in the html

        // document.getElementById("#red-rupee").value = redRupeeValue;
        // document.getElementById("#green-rupee").value = greenRupeeValue;
        // document.getElementById("#yellow-rupee").value = yellowRupeeValue;

        // newRedRupeeValue = $("#randomRed").append(redRupeeValue);
        // newGreenRupeeValue = $("#randomGreen").append(greenRupeeValue);
        // newYellowRupeeValue = $("#randomYellow").append(yellowRupeeValue);



        // time to test out some of the functionality, wish me luck
        console.log(targetScore)
    };

    // this function is to fix the issue i've been having with the user score getting reset too fast
    
    // function resetUserScoreAndTargetScore() {
    //         userScore = 0;
    //         $("#user-score").html(userScore);
    //         targetScore = Math.floor((Math.random() * 100) + 30);
    //         $("#target-score").html(targetScore);
            
    //     };
    

    // This function will detail what happens if the user wins
    function userHasWon() {
        // setTimeout(resetUserScoreAndTargetScore(),2000);
        userWins++;
        winnerSound.play()
        initializeCrystalGame();
    };

    // this function will detail what needs to happen if the user loses
    function userHasLost() {
        // setTimeout(resetUserScoreAndTargetScore(),2000);
        userLosses++;
        loserSound.play();
        
        initializeCrystalGame();
    };

    // --------------------------------Click Events-------------------------------------------//

    // this function will go into the click events to run game-ending logic
    function winLoseOrContinueGame() {
        if (userScore === targetScore) {
            didUserReachTargetScore = true;
            userHasWon();
        } else if (userScore > targetScore) {
            didUserPassTargetScore = true;
            userHasLost();
        } else {
            didUserPassTargetScore = false;
            didUserReachTargetScore = false;
        }
    };

    // The next functions will listen for the user clicking on the the rupee crystals
    $("#red-rupee").on("click", function() {
        
        // will add the value assigned to the red rupee to the user score
        userScore += redRupeeValue;

        // will play the sound of the rupee when clicked
        rupeeSound.play();

        // will update the user score on the screen
        $("#user-score").html(userScore);

        // will run the function that determines whether the game should continue or not
        winLoseOrContinueGame();
    });

    $("#green-rupee").on("click", function() {
        userScore += greenRupeeValue;
        rupeeSound.play();
        $("#user-score").html(userScore);
        winLoseOrContinueGame();
    });

    $("#yellow-rupee").on("click", function() {
        userScore += yellowRupeeValue;
        rupeeSound.play();
        $("#user-score").html(userScore);
        winLoseOrContinueGame();
    });

    // this function will detail how the browser should listen for the outcome of the game
    // $(".crystal").on("click", function() {
    //     if (didUserReachTargetScore || didUserPassTargetScore) {
    //         return false;
    //     };

    //     if (didUserReachTargetScore) {
    //         userHasWon();
    //     };

    //     if (didUserPassTargetScore) {
    //         userHasLost();
    //     };

    // });

    // Time to play the game 
    initializeCrystalGame();
});