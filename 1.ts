// problem
// 1. Create a function that can create a triangle pattern according to the height we provide like the 
function pyramid(height: number){
    let number: number = 1;
    for (let i = 1; i <= height; i++) {
        let row: string = '';
        for (let j = 1; j <= i; j++) {
            // ES2016
            // row += number.toString().length === 1 ? '0' + number.toString() : number.toString();
            // ES2017
            row += number.toString().padStart(2, '0');
            number++;
        }
        console.log(row); // Print the row
    }
}

console.log(pyramid(4));