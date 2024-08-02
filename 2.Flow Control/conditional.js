var input = prompt("Enter your salary");
var salary = input !== null ? parseFloat(input) : 0;
if (salary >= 50000) {
    alert("You are well-paid");
}
else {
    alert("You are not well-paid");
}
