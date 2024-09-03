// problem
// 5. Write a function to split a string and convert it into an array of words
function splitWord(param: string){
    const sentence = param;
    const arr = sentence.split(' ');
    return arr;
    
}
console.log(splitWord('Hello World'));