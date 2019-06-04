
// Important to start jQuery logic with the ready function

$(document).ready(function() {
    
    // I will declare the values that will be global to the runtime of the game
    var userScore = 0;
    var userWins = 0;
    var userLosses = 0;
    var targetScore = 0;
    var didUserReachTargetScore = false;
    var didUserPassTargetScore = false;

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

        // these booleans ensure that the game goes to the point where the user has not won or lost the game
        didUserPassTargetScore = false;
        didUserReachTargetScore = false;

        // this will set the elements that should display zero, to be zero
        userLosses = 0;
        userScore = 0;
        userWins = 0;
    }


});