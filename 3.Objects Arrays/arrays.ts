var cars: string[] = ["Toyota", "Honda", "Ford"];

cars.push("Tesla");

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(car);
}

let [c1, c2, c3, c4] = cars;
console.log(c1 + ", " + c2 + ", " + c3 + ", " + c4);
