
// var checkCtrl = false;

// $(document).keydown(function(e) {
//     if (e.keyCode === 17) {
//         checkCtrl = true;
//     }
// }).keyup(function(e) {
//     if (e.keyCode === 17) {
//         checkCtrl = false;
//     }
// }).keydown(function(e) {
//     if (checkCtrl && e.keyCode === 85) {
//         // Prevent Ctrl+U
//         e.preventDefault();
//         return false;
//     }
// });
var button = document.querySelector("button");
var time = 20;
var timerDisplay = document.querySelector(".timer");
var value = false;  // Start with the countdown paused
var animation;

button.addEventListener("click", function(){
    console.log(`ok`);
    window.location.href='https://www.facebook.com/';
});

function getTime(x) {
    time = x;
    countTime();
}

function countTime() {
    var startTime = new Date().getTime();
    
    function update() {
        if (!value) return;  // Pause the countdown if isCounting is false

        var currentTime = new Date().getTime();
        var elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
        var remaining = Math.max(time - elapsedSeconds, 0);

        timerDisplay.innerHTML = remaining;
        console.log(remaining);

        if (remaining > 0) {
            animation = requestAnimationFrame(update);
        } else {
            timerDisplay.innerHTML = `${remaining}`;
            button.disabled = false;
        }
    }

    update();
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        cancelAnimationFrame(animation);  // Stop the countdown when not visible
    } else if (document.visibilityState === "visible" && time > 0) {
        value = true;  // Resume the countdown when visible
        countTime();
    }
});

getTime(time);