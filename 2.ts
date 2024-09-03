// problem
// 2.Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
function fizzBuzz(n: number){
    let number: string = '';
    for (let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            number += ' FizzBuzz,'
        }else if(i % 3 === 0 || i % 5 === 0){
            if(i % 3 === 0){
                number += ' Fizz,';
            }else if(i % 5 === 0){
                number += ' Buzz,';
            }
        }else{
            number += ` ${i},`;
        }
        
    }
    const result = number.slice(0, -1)
    return result;
}
console.log(fizzBuzz(15))