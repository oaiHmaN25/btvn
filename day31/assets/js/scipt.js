var checkCtrl = false;
var button = document.querySelector("button");
var time = 20;
var timerDisplay = document.querySelector(".timer");
var value = false;  // Start with the countdown paused
var animation;

document.addEventListener("keydown", function(e) {
    if (e.keyCode === 17) {
        checkCtrl = true;
    }
});

document.addEventListener("keyup", function(e) {
    if (e.keyCode === 17) {
        checkCtrl = false;
    }
});

document.addEventListener("keydown", function(e) {
    if (checkCtrl && e.keyCode === 85) {
        // Prevent Ctrl+U
        e.preventDefault();
        return false;
    }
});

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
        cancelAnimationFrame(animation);  
    } else if (document.visibilityState === "visible" && time > 0) {
        value = true;  
        countTime();
    }
});

getTime(time);