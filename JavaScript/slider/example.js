let myFirstFunction = (name,greeting) => {
    console.log(greeting + ' mam na imię ' + name + ' !');
};

myFirstFunction('Gabriel', 'Hey');
myFirstFunction('Jan', 'Witam')

let multiplyByTwo = (num) => {
    console.log(num * 2);
};

let multiplyByNumber = (num1, num2) => {
    console.log(num1 * num2);
};

let powerToTwo = (num) => {
    console.log(num ** 2);
};

multiplyByTwo(3)
multiplyByNumber(2,4)
powerToTwo(4)


let car1 = {
    'mark': 'Fiat',
    'model': 'Punto',
    'productionYear': 'Rok produkcji: 2021',
};

let car2 = {
    'mark': 'BMW',
    'model': 'E36',
    'productionYear': 'Rok produkcji: 2018',
};

console.log(car1.mark, car1.model, car1.productionYear);
console.log(car2.mark, car2.model, car2.productionYear);


let C = 299792458;
console.log(C);
let M = 10;
let E = M*(C*C)
console.log(E);