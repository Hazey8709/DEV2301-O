const regions = Array.from(document.querySelectorAll('section[role="region"]'));
const numbers = Array.from(document.querySelectorAll("#numbers button"));
const letters = Array.from(document.querySelectorAll("#letters button"));

const numberType = numbers.map((button) => button.innerHTML);
const letterType = letters.map((button) => button.innerHTML);

const audioToggle = document.querySelector("#muteBtn");
const muteOn = document.querySelector("#audioW");
const muteOff = document.querySelector("#audioE");
const audioClicks = document.querySelector("#audio2");
const audioLetters = document.querySelector("#audioQ");
const audioArrows = document.querySelector("#audio5");
const audioNumbers = document.querySelector("#audioR");

const audioProps = {
    mute: true,
};

//! Mute Toggle
const toggleAudio = () => {
    if (audioProps.mute === true) {
        muteOn.currentTime = 0;
        console.log("Mute On!");
        muteOn.play();
    } else if (audioProps.mute === false) {
        muteOff.currentTime = 0;
        console.log("Mute Off!");
        muteOff.play();
    }

    audioProps.mute = !audioProps.mute;
    audioProps.mute === false
        ? audioToggle.classList.add("mute")
        : audioToggle.classList.remove("mute");
};

const moveFocus = (region, item) => {
    region[item].focus();
};

const handleArrowEvent = (event, items, currentRegion) => {
    //! Audio Arrows
    if (audioProps.mute === true) {
        audioArrows.currentTime = 0;
        console.log("Arrow Sounds");
        audioArrows.play();
    }

    let currentItem = 0;
    if (
        event.code === "ArrowDown" ||
        event.code === "ArrowRight" ||
        event.code === "ArrowUp" ||
        event.code === "ArrowLeft"
    ) {
        event.preventDefault();
        event.stopPropagation();

        const regionItems = Array.from(currentRegion.children);
        regionItems.forEach((child) => {
            items.push(child);
        });
        currentItem = items.indexOf(event.target);

        const lastItem = items.length - 1;
        const isFirst = currentItem === 0;
        const isLast = currentItem === lastItem;

        if (event.code === "ArrowDown" || event.code === "ArrowRight") {
            currentItem = isLast ? 0 : currentItem + 1;
        } else if (event.code === "ArrowUp" || event.code === "ArrowLeft") {
            currentItem = isFirst ? lastItem : currentItem - 1;
        }

        moveFocus(regionItems, currentItem);
    }
};

const handleNumberKeyEvent = (event) => {
    //! Audio Letters
    if (audioProps.mute === true) {
        audioLetters.currentTime = 0;
        console.log("Letters Sound");
        audioLetters.play();
    }

    if (event.key === "*") return;
    const captureEvent = event.code || event.code;
    const digit = captureEvent.split("");
    const input =
        digit[digit.length - 1] === "d" ? "." : digit[digit.length - 1];
    registerInput(input);
};

const handleClick = (event) => {
    //! Audio Clicks
    if (audioProps.mute === true) {
        audioClicks.currentTime = 0;
        console.log("Click Sounds");
        audioClicks.play();
    }

    registerInput(event.target.innerHTML);
};

const handleKeyEvent = (event) => {
    const items = [];
    const currentRegion = event.target.closest('section[role="region"]');

    if (
        event.code === "ArrowDown" ||
        event.code === "ArrowRight" ||
        event.code === "ArrowUp" ||
        event.code === "ArrowLeft" ||
        event.code === "Enter"
    ) {
        event.preventDefault();
        event.stopPropagation();
        handleArrowEvent(event, items, currentRegion);

        //registerInput(event.code);
        //console.log(event.code, event.key, ":Arrows");
    }

    if (
        event.key === "1" ||
        event.code === "Digit1" ||
        event.key === "2" ||
        event.code === "Digit2" ||
        event.key === "3" ||
        event.code === "Digit3" ||
        event.key === "4" ||
        event.code === "Digit4" ||
        event.key === "5" ||
        event.code === "Digit5"
    ) {
        registerInput(event.code || event.key);
        //! Audio Numbers
        if (audioProps.mute === true) {
            audioNumbers.currentTime = 0;
            console.log("Number Sounds");
            audioNumbers.play();
            // console.log(event.code, event.key, ":Numbers");
        }
    }

    if (
        event.key === "q" ||
        event.code === "KeyQ" ||
        event.key === "w" ||
        event.code === "KeyW" ||
        event.key === "e" ||
        event.code === "KeyE" ||
        event.key === "r" ||
        event.code === "KeyR" ||
        event.key === "t" ||
        event.code === "KeyT"
    ) {
        handleNumberKeyEvent(event);
        registerInput(event.code || event.key);
        // console.log(event.code, event.key, ":Letters");
    }
};

const registerInput = (input) => {
    console.log(input);
};

(() => {
    window.addEventListener("keydown", handleKeyEvent);
    audioToggle.addEventListener("click", toggleAudio);
    numbers.forEach((button) => button.addEventListener("click", handleClick));
    letters.forEach((button) => button.addEventListener("click", handleClick));
})();
