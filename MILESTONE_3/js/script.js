// mi collego al container
const container = document.getElementById('container');

// creao le var che diventeranno classe e testo dei box
let clas;
let text;

// do la classe e il testo con if
for(let i=0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        clas = 'fizzBuzz';
        text = 'FizzBuzz';
    } else if (i % 3 === 0) {
        clas = 'fizz';
        text = 'Fizz';
    } else if (i % 5 === 0) {
        clas = 'buzz';
        text = 'Buzz';
    } else {
        clas = '';
        text = i;
    }
    // aggiungo il tag box al container
    const box = `<div class="box ${clas}"> ${text}</div>`;
    container.innerHTML += box;
}