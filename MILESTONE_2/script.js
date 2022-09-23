const mainList = document.querySelector('.list');
// stampo tutti i numeri da 1 a 100 a schermo in una lista
// se un numero è divisivile per 3 e per 5 stampo in lista la posto del numero di `FizzBuzz`
// se un numero è divisivile per 3 stampo in lista la posto del numero di `Fizz`
// se un numero è divisivile per 5 stampo in lista la posto del numero di `Buzz`

for(let i=0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        newLi = `<li>FizzBuzz</li>`;
    } else if (i % 3 === 0) {
        newLi = `<li>Fizz</li>`;
    } else if (i % 5 === 0) {
        newLi = `<li>Buzz</li>`;
    } else {
        newLi = `<li>${i}</li>`
    }
    mainList.innerHTML += newLi;
} 

