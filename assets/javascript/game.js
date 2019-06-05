
// Important to start jQuery logic with the ready function

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
    // var didGameStart = false;

    // these variables will be declared in order to randomize the crystal values
    var redRupeeValue = 0;
    var greenRupeeValue = 0;
    var yellowRupeeValue = 0;



    // I will use a function to start the game
    function initializeCrystalGame() {

        // starting the game should set all of these values to random intergers
        targetScore = Math.floor((Math.random() * 100) + 1);
        redRupeeValue = Math.floor((Math.random() * 15) + 1);
        greenRupeeValue = Math.floor((Math.random() * 15) + 1);
        yellowRupeeValue = Math.floor((Math.random() * 15) + 1);



        // these booleans ensure that the game resets to where the user has not won or lost the game
        didUserPassTargetScore = false;
        didUserReachTargetScore = false;
        // didGameStart = true;



        // this will set the elements that should display zero, to be zero upon the initial game, and then change after each successive game played
        $("#user-score").append(userScore);
        $("#user-wins").append(userWins);
        $("#user-losess").append(userLosses);


    

        // these lines will append the randomized numbers to their respective components
        newTargetScore = $("#targetScore").append(targetScore);

        // These next three have to be different because they will not show their value in the html
        document.getElementById("#red-rupee").value = redRupeeValue;
        document.getElementById("#green-rupee").value = greenRupeeValue;
        document.getElementById("#yellow-rupee").value = yellowRupeeValue;

        // newRedRupeeValue = $("#randomRed").append(redRupeeValue);
        // newGreenRupeeValue = $("#randomGreen").append(greenRupeeValue);
        // newYellowRupeeValue = $("#randomYellow").append(yellowRupeeValue);



        // time to test out some of the functionality, wish me luck
        console.log(targetScore)
    };

    // This function will detail what happens if the user wins
    function userHasWon() {
        userWins++;
        // play audio //
        alert("You won the game!");
        initializeCrystalGame();
    };
    // this function will detail what needs to happen if the user loses

    function userHasLost() {
        userLosses++;
        // play audio //
        alert("YOU DIED");
        initializeCrystalGame();
    };

    // --------------------------------Click Events-------------------------------------------//

    // The next functions will listen for the user clicking on the the rupee crystals
    $("#red-rupee").on("click", function() {
        userScore = userScore + redRupeeValue;
        if (userScore === targetScore) {
            didUserReachTargetScore = true;
        } else if (userScore > targetScore) {
            didUserPassTargetScore = true;
        } else {
            didUserPassTargetScore = false;
            didUserReachTargetScore = false;
        }
    });

    $("#green-rupee").on("click", function() {
        userScore = userScore + greenRupeeValue;
        if (userScore === targetScore) {
            didUserReachTargetScore = true;
        } else if (userScore > targetScore) {
            didUserPassTargetScore = true;
        } else {
            didUserPassTargetScore = false;
            didUserReachTargetScore = false;
        }
    });

    $("#yellow-rupee").on("click", function() {
        userScore = userScore + yellowRupeeValue;
        if (userScore === targetScore) {
            didUserReachTargetScore = true;
        } else if (userScore > targetScore) {
            didUserPassTargetScore = true;
        } else {
            didUserPassTargetScore = false;
            didUserReachTargetScore = false;
        }
    });

    // this function will detail how the browser should listen for the outcome of the game
    $("#btn").on("click", function() {
        if (didUserReachTargetScore || didUserPassTargetScore) {
            return false;
        };

        if (didUserReachTargetScore) {
            userHasWon();
        };

        if (didUserPassTargetScore) {
            userHasLost();
        };

    });

    
});