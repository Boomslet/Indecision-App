const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: 'Mark',
    cities: ['Albany', 'Perth'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());