const mainList = document.querySelector('.list');


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

