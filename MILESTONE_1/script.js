// per tutti i numeri da 1 a 100
//se un numero è divisivile per 3 e per 5 faccio il console log di `FizzBuzz`
//se un numero è divisivile per 3 faccio il console log di `Fizz`
//se un numero è divisivile per 5 faccio il console log di `Buzz`

for(i=0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz`)
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
} 