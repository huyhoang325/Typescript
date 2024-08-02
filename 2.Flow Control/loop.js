var maxAge = parseInt(prompt('Enter the maximum age'));
var age = 1;
while (age <= maxAge) {
    if (age % 3 !== 0) {
        console.log(age, 'years old');
    }
    age++;
}
