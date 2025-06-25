const soundMap = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3"
};

function playSound(key) {
    const soundFile = soundMap[key];
    if (soundFile) {
        new Audio(soundFile).play();
    }
}

function handleDrumEvent(e) {
    const key = e.key || e.target.innerHTML;
    playSound(key);
}

document.querySelectorAll(".drum").forEach(btn =>
    btn.addEventListener("click", handleDrumEvent)
);

document.addEventListener("keydown", handleDrumEvent);
