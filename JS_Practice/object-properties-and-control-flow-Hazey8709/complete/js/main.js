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

let history = [];
const equation = {
    firstExpression: null,
    secondExpression: null,
    carriedExpression: null,
    operator: null,
    lastOperator: null,
    outcome: null,
    modifier: null,
    solved: false,
    currentDisplay: 0
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
    buildEquation(equation, input, 'number')
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
    buildEquation(equation, input, 'operator')
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

const updateHistory = (left, right, op) => {
    const currentHistory = [...history]
    if(currentHistory.length >= 3) currentHistory.pop()
    const update = `${left} ${op} ${right}`
    currentHistory.push(update)
    history = currentHistory;
    displayHistory(currentHistory)
}

const toggleDisplayNegative = data => {
    if (data === 0) return
    return data * -1;
}
const displayHistory = data => {
    const historyList = document.querySelector('#display ul')
    const currentList = Array.from(historyList.children)
    const newHistoryItem = document.createElement('li')
    newHistoryItem.setAttribute('tabindex','-1');
    newHistoryItem.setAttribute('new','true');
    if(currentList.length >= 3) {
        const firstItem = document.querySelector('#display ul li:first-of-type')
        firstItem.parentElement.removeChild(firstItem)
    }
    data.forEach((item, i) => {
        newHistoryItem.innerText = item
        historyList.appendChild(newHistoryItem)
    })
}

const buildEquation = (equation, input, type) => {
    console.log("build equation with:")
    console.log("equation: ", equation)
    console.log("input: ", input)
    console.log("type: ", type)
    const {
        firstExpression,
        secondExpression,
        carriedExpression,
        operator,
        lastOperator,
        outcome,
        modifier,
        solved,
        currentDisplay
    } = equation

    if (
        input === '-/+' && currentDisplay !== null
    ){
        updateDisplay(toggleDisplayNegative(currentDisplay))
    }

    if (
        input === '&lt;'
    ){
        const first = currentDisplay === firstExpression;
        const second = currentDisplay === secondExpression;
        if(first && !second) {
            const updatedNumber = equation.firstExpression.toString().slice(0,-1)
            if(updatedNumber <= 0) {
                updateDisplay(0)
                equation.firstExpression = null
                return;
            }
            updateDisplay(updatedNumber)
            equation.firstExpression = updatedNumber
        }
        if((first && second) || (!first && second)) {
            const updatedNumber = equation.secondExpression.slice(0,-1)
            if(updatedNumber <= 0) {
                updateDisplay(0)
                equation.secondExpression = null
                return;
            }
            updateDisplay(updatedNumber)
            equation.secondExpression = updatedNumber
        }
        if(!first && !second) return
    }
 
    if(
        (
            operator === null
            && lastOperator === null
            && firstExpression === null
            && type === 'number'
            && solved === false)
            || (
                operator === null
                && lastOperator !== null
                && firstExpression
                && secondExpression
                && carriedExpression
                && outcome
                && type === 'number'
                && solved === false
        )
    ){
        // Begin Left Expression
        console.log("First left expression")
        equation.firstExpression = null;
        equation.secondExpression = null;
        equation.carriedExpression = null;
        equation.operator = null;
        equation.outcome = null;
        equation.modifier = null;
        equation.solved = false;
        equation.firstExpression = parseFloat(input)
        updateDisplay(equation.firstExpression)
       
    }

    if(
        operator === null
        && firstExpression
        && secondExpression === null
        && type === 'number'
        && solved === false){
            // Build Left Expression
            equation.firstExpression = `${firstExpression}${input}`
            equation.firstExpression = parseFloat(equation.firstExpression)
            equation.firstExpression = checkLength(equation.firstExpression)
            updateDisplay(equation.firstExpression)
    }

    if(type === 'operator' && solved === false && (input != '=' || input != '&lt;')) {
            console.log("equation.lastOperator:", equation.lastOperator)
            equation.operator = input
            equation.lastOperator = null
            updateDisplay(equation.operator)
    }

    if(
        operator
        && firstExpression
        && secondExpression === null
        && type === 'number'
        && outcome === null){
            // Start Right Expression
            equation.secondExpression = parseFloat(input)
            updateDisplay(equation.secondExpression)
    }

    if(
        operator 
        && firstExpression
        && secondExpression
        && type === 'number'
        && outcome === null
        && solved === false){
             // Build Right Expression
            equation.secondExpression = `${secondExpression}${input}`
            equation.secondExpression = parseFloat(equation.secondExpression)
            equation.secondExpression = checkLength(equation.secondExpression)
            updateDisplay(equation.secondExpression)
        
    }

    if(
        input === '='
        && firstExpression !== outcome
        && secondExpression
        && carriedExpression === null
        && solved === false ){
            console.log("operator:", operator)
            equation.lastOperator = operator;
            equation.operator = null;
            equation.solved = true;
            equation.outcome = calculate(equation);
            equation.carriedExpression = equation.outcome
            equation.firstExpression = null
            displayAnswer(equation)
    }

    if(
        input === '='
        && firstExpression
        && secondExpression
        && carriedExpression !== null
        && solved === true
        && lastOperator  ){
            console.log(equation)
            equation.firstExpression = parseFloat(equation.carriedExpression)
            equation.outcome = calculate(equation);
            equation.carriedExpression = equation.outcome
            displayAnswer(equation)  
    }

    if(
        input === '.'
        && firstExpression
        && operator === null
        && secondExpression === null
    ) {
        equation.firstExpression = `${equation.firstExpression}.`
        equation.firstExpression = checkLength(equation.firstExpression)
        updateDisplay(equation.firstExpression)
    }

    if(
        input === '.'
        && firstExpression
        && operator
        && secondExpression
        && outcome === null
    ) {
        equation.secondExpression = `${equation.secondExpression}.`
        equation.secondExpression = checkLength(equation.secondExpression)
        updateDisplay(equation.secondExpression)
    }

    if(
        input === 'C'
    ) {
        console.log("Point 19")
        equation.firstExpression = null;
        equation.secondExpression = null;
        equation.carriedExpression = null;
        equation.operator = null;
        equation.lastOperator = null;
        equation.outcome = null;
        equation.modifier = null;
        equation.solved = false;
        clearHistory();
        updateDisplay(0)
    }
}

const clearHistory = () => {
    history = [];
    const historyListContainer = document.querySelector('#display ul')
    const historyList = document.querySelectorAll('#display ul li')
    
    Array.from(historyList).forEach(item => {
        item.parentElement.removeChild(item)
    })

    for (var i = 0; i < 3; i++) {
        const newHistoryItem = document.createElement('li')
        const nbsp =  document.createTextNode("\u00A0")
        newHistoryItem.setAttribute('tabindex','-1');
        newHistoryItem.setAttribute('aria-hidden','true');
        newHistoryItem.append(nbsp)
        historyListContainer.appendChild(newHistoryItem)
    }
}

const convertToDecimal = (num) => {
    const newNum = parseFloat(num.toFixed(5))
    const numAsString = newNum.toString()
    if(numAsString.length > 10) {
        return numAsString.substring(0,10);
    } else {
        return newNum
    }
}

const calculate = (equation) => {
    const {
        firstExpression,
        secondExpression,
        carriedExpression,
        operator,
        modifier,
        lastOperator
    } = equation

    const leftExpression = carriedExpression ? carriedExpression : firstExpression;
    const rightExpression = secondExpression;
    const operation = lastOperator ? lastOperator : operator;

    if(operation === '+') {
        equation.solved = true;
        updateHistory(leftExpression, rightExpression, operation)
        return convertToDecimal(parseFloat(leftExpression) + parseFloat(rightExpression));
    }
    if(operation === '-') {
        equation.solved = true;
        updateHistory(leftExpression, rightExpression, operation)
        return convertToDecimal(parseFloat(leftExpression) - parseFloat(rightExpression));
    }
    if(operation === '/') {
        equation.solved = true;
        updateHistory(leftExpression, rightExpression, operation)
        return convertToDecimal(parseFloat(leftExpression) / parseFloat(rightExpression));
    }
    if(operation === '*') {
        equation.solved = true;
        updateHistory(leftExpression, rightExpression, operation)
        return convertToDecimal(parseFloat(leftExpression) * parseFloat(rightExpression));
    }
}

const checkLength = value => {
    const valueAsString = value.toString()
    if(valueAsString.length > 10) {
        return valueAsString.substring(0,10)
    } else {
        return value
    }
}

const updateDisplay = value => {
    if(value.length > 10) { 
        equation.currentDisplay = value.substring(0,10);
        answerDisplay.innerText = equation.currentDisplay
    }
    else {
        equation.currentDisplay = value
        answerDisplay.innerText = equation.currentDisplay
    }
}

const displayAnswer = equation => {
    updateDisplay(equation.outcome);
    resetEquation(equation);
}

const resetEquation = currentOutcome => {
    equation.firstExpression = currentOutcome.outcome;
    equation.secondExpression = currentOutcome.secondExpression;
    equation.operator = currentOutcome.operator;
    equation.outcome = currentOutcome.outcome;
    equation.currentDisplay = 0;
    equation.solved = true;
    equation.modifier = null;
}

(() => {
    window.addEventListener('keydown', handleKeyEvent);
    audioToggle.addEventListener('click', toggleAudio);
    numerals.forEach(button => button.addEventListener('click', handleClick))
    operators.forEach(button => button.addEventListener('click', handleClick))
    modifiers.forEach(button => button.addEventListener('click', handleClick))
})()