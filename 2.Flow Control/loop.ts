let maxAge:number = parseInt(prompt('Enter the maximum age'));

let age:number = 1;
while(age <= maxAge) {
    if (age % 3 !== 0) {
        console.log(age, 'years old');
    }
    age++;
}
