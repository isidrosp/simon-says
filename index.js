//Random number generator between 1 and 4.
function rng() {
    return (Math.floor(Math.random()*4)+1);
}

//Animation for the button that gets pressed.
function btnAnimation(buttonNumber) {
    var currentButton = ("#btn"+buttonNumber);
    $(currentButton).addClass("pressed");
    setTimeout(()=>{
        $(currentButton).removeClass("pressed");
    },200)
}

//Machine chooses next button.
function machineSeq () {
    pSeq = [];
    var random = rng();
    lvl++;
    $("h1").text("Level "+lvl);
    mSeq.push(random);
    btnAnimation(random);
}

//Checking the button the player has just clicked.
function checkAnswer() {
    var i = 0;
    while ((diff==false)&(i<pSeq.length)) {
        // console.log("The current number of the player sequence is: "+pSeq[i]);
        // console.log("The current number of the machine sequence is: "+mSeq[i]);
        if (pSeq[i]!=mSeq[i]) {
            diff = true;
        } else {
        i++;
        }
    }
    // console.log("The diff variable in the checkAnswer function equals: "+diff);
    return diff;
}

//Game over screen, resetting player sequence and changing h1 text.
function gameOver() {
    pSeq = [];
    $("h1").text("Game over.");
    $("h1").css("color", "red");
}

//Player clicks button.
$(".btn").click(function(){
    var clickedButton = (this.id).slice(3,4);
    var diff = false;
    pSeq.push(clickedButton);
    btnAnimation(clickedButton);
    diff = checkAnswer();
    // console.log(diff);
    // console.log("The player sequence length is: "+pSeq.length+". And its current array is: ["+pSeq+"]");
    // console.log("The machine sequence length is: "+mSeq.length+". And its current array is: ["+mSeq+"]");
    if (diff==true) {
        gameOver();
    } else {
        if (pSeq.length==mSeq.length) {
            setTimeout(()=>{
                machineSeq();
            },300)
        }
    }
});

//Variables that need to be declared at the beginning of the program.
var mSeq = [];
var pSeq = [];
var lvl = 0;
var diff = false;
machineSeq();