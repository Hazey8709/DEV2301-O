const regions = Array.from(document.querySelectorAll('section[role="region"]'));
const numbers = Array.from(document.querySelectorAll("#numbers button"));
const letters = Array.from(document.querySelectorAll("#letters button"));

const numberType = numbers.map((button) => button.innerHTML);
const letterType = letters.map((button) => button.innerHTML);

const moveFocus = (region, item) => {
    region[item].focus();
};

const handleArrowEvent = (event, items, currentRegion) => {
    let currentItem = 0;
    if (
        event.code === "ArrowDown" ||
        event.code === "ArrowRight" ||
        event.code === "ArrowUp" ||
        event.code === "ArrowLeft" ||
        event.code === "Enter"
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
        } else {
            console.log("No Multiple Options");
        }

        moveFocus(regionItems, currentItem);
    }
};

// const handleNumberKeyEvent = (event) => {
//     if (event.key === "*") return;
//     const captureEvent = event.code || event.code;
//     const digit = captureEvent.split("");
//     const input = digit[digit.length -1] === 'd' ? '.' : digit[digit.length - 1];
//     console.log(input);
// };

const handleClick = (event) => {
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
        // console.log(event.code, event.key, ":Numbers");
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
        //handleNumberKeyEvent(event);
        registerInput(event.code || event.key);
        // console.log(event.code, event.key, ":Letters");
    }
};

const registerInput = (input) => {
    console.log(input);
};

(() => {
    window.addEventListener("keydown", handleKeyEvent);
    // // numerals.forEach((button) => button.addEventListener("click", handleClick));
    numbers.forEach((button) => button.addEventListener("click", handleClick));
    letters.forEach((button) => button.addEventListener("click", handleClick));
})();
