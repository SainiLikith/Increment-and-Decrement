// console.log("heeeeyyyyyy");

function Increment() {
        let counterIncrement = document.getElementById('counter');
        let currentValue = parseInt(counterIncrement.innerText);

        currentValue++;

        counterIncrement.innerText = currentValue;
}

function Decrement() {
    let counterDecrement = document.getElementById('counter');
        let currentValue = parseInt(counterDecrement.innerText);

        currentValue--;
        
        counterDecrement.innerText = currentValue;
}