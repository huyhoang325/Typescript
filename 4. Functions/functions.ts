function calculateBMI(height: number, weight: number): void {
    let bmi = weight / ((height / 100) * (height / 100));
    if (bmi >= 30) {
        console.log("The category is Obese");
    } else if (bmi >= 25) {
        console.log("The category is Overweight");
    } else if (bmi >= 18.5) {
        console.log("The category is Normal weight");
    } else {
        console.log("The category is Underweight");
    }
}

var height = Number(prompt("Enter your height in cm"));
var weight = Number(prompt("Enter your weight in kg"));

calculateBMI(height, weight);
