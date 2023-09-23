var button = document.querySelector("button");
var timerDisplay = document.querySelector(".timer");
var time = 20;  // Initial time in seconds
var startTime = Date.now();

button.addEventListener("click", function () {
    console.log("Button clicked.");
    window.location.href = "https://www.facebook.com/";
});

function getTime(x) {
    time = x;
    update();
}

function update() {
    var currentTime = Date.now();
    var elapsedTime = Math.floor((currentTime - startTime) / 1000);
    var remaining = Math.max(time - elapsedTime, 0);

    timerDisplay.innerHTML = remaining;

    if (remaining > 0) {
        requestAnimationFrame(update);
    } else {
        timerDisplay.innerHTML = "0";
        button.disabled = false;
    }
}

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        startTime += Date.now() - currentTime;
        console.log("Countdown paused.");
    } else if (document.visibilityState === "visible" && time > 0) {
        console.log("Countdown resumed.");
        update();
    }
});

getTime(time);





