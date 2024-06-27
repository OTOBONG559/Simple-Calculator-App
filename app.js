 


 function appendToDisplay(value) {
 document.getElementById('display').value += value;
 }
function clearDisplay() {
     document.getElementById('display').value = '';
 }

 function delDisplay() {
     document.getElementById('display').value = display.value.slice(0,-1);
 }

 function calculate() {
     var display = document.getElementById('display');
    try {
         display.value = eval(display.value);
    } catch (error) {
         display.value = 'Error';
     }
 }



 document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById('display');

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            appendToDisplay(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });
});





