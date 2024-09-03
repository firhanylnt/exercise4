// problem
// 4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
function remove(arrInput: number[]) {
    const input: number[] = arrInput;
    const output: number[] = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            output.push(input[i]);
        }
    }

    return output;
}
console.log(remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));