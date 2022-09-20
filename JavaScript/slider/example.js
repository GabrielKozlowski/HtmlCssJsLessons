let circleLenght = (radius) => {
    console.log(2*radius*3.14);
};

for(let i = 1; i <= 20; i++) {
    circleLenght(i)
}


let divide = (number1, number2) => {
    if(number1 === 0 || number2 === 0) {
        console.log('Operacja niedozwolona');
    }
    else {
        console.log(number1 / number2);
    }
};

divide(10,2);
divide(20,0);
divide(0,20);


let nOddNumbers = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log(2*i - 1);
    }
}

nOddNumbers(5)