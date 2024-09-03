// problem
// 3.Create a function to calculate Body Mass Index (BMI)
function bmi(weight: number, height: number) {
    let index: string = '';
    const result = weight / (height*height);
    if(result <= 18.5){
        index = 'less weight';
    }else if(result > 18.5 && result <= 24.9) {
        index = 'ideal';
    }else if(result > 25 && result <= 29.9){
        index = 'overweight';
    }else if(result > 30 && result <= 39.9){
        index = 'very overweight';
    }else{
        index = 'obesity';
    }
    return index;
}
console.log(bmi(65, 1.70));