const regions = Array.from(document.querySelectorAll('section[role="region"]'))
const numerals = Array.from(document.querySelectorAll('#numerals button'))
const operators = Array.from(document.querySelectorAll('#operators button'))
const modifiers = Array.from(document.querySelectorAll('#modifiers button'))

const numeralTypes = numerals.map(op => op.innerHTML)
const operatorTypes = operators.map(op => op.innerHTML)
const modifiersTypes = modifiers.map(op => op.innerHTML)

const answerDisplay = document.querySelector('#display p span:last-of-type');

const audioButtons = document.querySelector(`#audioOne`);
const audioClicks = document.querySelector(`#audioTwo`);
const audioArrows = document.querySelector(`#audioThree`);

const audioToggle = document.querySelector('#display button')

const moveFocus = (region, item) => {
    region[item].focus();
}

const audioProps = {
    mute: true
}

const toggleAudio = () => {
    audioProps.mute = !audioProps.mute
    audioProps.mute === false
        ? audioToggle.classList.add('mute')
        : audioToggle.classList.remove('mute')
}

const handleArrowEvent = (event, items, currentRegion) => {
    let currentItem = 0;
    if(audioProps.mute === true){
        audioArrows.currentTime = 0;
        audioArrows.play();
    }
    if(
        event.code === 'ArrowDown' ||
        event.code === 'ArrowRight' ||
        event.code === 'ArrowUp' ||
        event.code === 'ArrowLeft' ||
        event.code === 'KeyW' ||
        event.code === 'KeyA' ||
        event.code === 'KeyS' ||
        event.code === 'KeyD'
    ) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target)
        const regionItems = Array.from(currentRegion.children);
        regionItems.forEach(child => {
            items.push(child)
        })
        currentItem = items.indexOf(event.target);
        const lastItem = items.length - 1;
        const isFirst = currentItem === 0;
        const isLast = currentItem === lastItem;

        if(event.code === 'ArrowDown' || event.code === 'ArrowRight' || event.code === 'KeyS' || event.code === 'KeyD') {
            currentItem = isLast ? 0 : currentItem + 1;
        } else if ( event.code === 'ArrowUp' || event.code === 'ArrowLeft' || event.code === 'KeyA' || event.code === 'KeyW' ) {
            currentItem = isFirst ? lastItem : currentItem - 1;
        }

        moveFocus(regionItems, currentItem)
    }
}

const handleNumberKeyEvent = event => {
    if(audioProps.mute){
        audioButtons.currentTime = 0;
        audioButtons.play();
    }
    
    if (event.key === '*') return
    const captureEvent = event.code || event.key
    const digit = captureEvent.split('')
    const input = digit[digit.length - 1] === 'd' ? '.' : digit[digit.length - 1];
    registerInput(input)
}

const handleMathKeyEvent = event => {
    if(audioProps.mute){
        audioButtons.currentTime = 0;
        audioButtons.play();
    }
    const input = event.key === 'Enter'
        ? '=' 
        : event.key === 'Escape'
            ? 'C'
            : event.key === 'Backspace'
            ? '&lt;'
            : event.key
    registerInput(input)
}

const handleClick = event => {
    
    if(audioProps.mute){
        audioClicks.currentTime = 0;
        audioClicks.play();
    }
    registerInput(event.target.innerHTML)
}

const handleKeyEvent = (event) => {
    const items = [];
    const currentRegion = event.target.closest('section[role="region"]');
    if(
        event.code === 'ArrowDown' ||
        event.code === 'ArrowRight' ||
        event.code === 'ArrowUp' ||
        event.code === 'ArrowLeft' ||
        event.code === 'KeyW' ||
        event.code === 'KeyA' ||
        event.code === 'KeyS' ||
        event.code === 'KeyD'
    ) { handleArrowEvent(event, items, currentRegion) }

    if(
        event.code === 'Digit1' || event.key === '1' ||
        event.code === 'Digit2' || event.key === '2' ||
        event.code === 'Digit3' || event.key === '3' ||
        event.code === 'Digit4' || event.key === '4' ||
        event.code === 'Digit5' || event.key === '5' ||
        event.code === 'Digit6' || event.key === '6' ||
        event.code === 'Digit7' || event.key === '7' ||
        event.code === 'Digit8' || event.key === '8' ||
        event.code === 'Digit9' || event.key === '9' ||
        event.code === 'Digit0' || event.key === '0' ||
        event.code === 'Period' || event.key === '.'
    ) { handleNumberKeyEvent(event)}

    if(
        event.key === '+' ||
        event.key === '=' ||
        event.key === '-' ||
        event.key === '/' ||
        event.key === '*' ||
        event.key === 'Enter' ||
        event.key === 'Escape' ||
        event.key === 'Backspace'
    ) { handleMathKeyEvent(event)}
}

const registerInput = input => {
    numeralTypes.find(check => input === check) ? buildEquation(equation, input, 'number') : null;
    operatorTypes.find(check => input === check) ? buildEquation(equation, input, 'operator') : null;
    modifiersTypes.find(check => input === check) ? buildEquation(equation, input, 'modifier') : null;
}

(() => {
    window.addEventListener('keydown', handleKeyEvent);
    audioToggle.addEventListener('click', toggleAudio);
    numerals.forEach(button => button.addEventListener('click', handleClick))
    operators.forEach(button => button.addEventListener('click', handleClick))
    modifiers.forEach(button => button.addEventListener('click', handleClick))
})()