/*
// mi collego al container nell'HTML
const container = document.querySelector('.conteiner')
// creo la variabile che poi diventerà la classe
let evenOrOdd;
let text;

// do le classi a seconda del numero
for(let i=0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        evenOrOdd = 'fizzBuzz';
        text = 'fizzbuzz'
    } else if (i % 3 === 0) {
        evenOrOdd = 'fizz';
        text = 'fizz'
    } else if (i % 5 === 0) {
        evenOrOdd = 'buzz';
        text = 'buzz'
    } else {
        text = i
    }
    let box = `<div class="box ${evenOrOdd}">${text}</div>`;
    container.innerHTML += box;
} 
*/

// mi collego al container
const container = document.getElementById('container');

// creao le var che diventeranno classe e testo dei box
let clas;
let text;

// do la classe e il testo con if
for(let i=0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        clas = 'fizzBuzz';
        text = 'fizzbuzz';
    } else if (i % 3 === 0) {
        clas = 'fizz';
        text = 'fizz';
    } else if (i % 5 === 0) {
        clas = 'buzz';
        text = 'buzz';
    } else {
        clas = ''
        text = i
    }
    // aggiungo il tag box al container
    const box = `<div class="box ${clas}"> ${text}</div>`
    container.innerHTML += box
}