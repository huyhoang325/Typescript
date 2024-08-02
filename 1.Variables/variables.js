var age = 30;
var pi = 3.14159;
var motto = "Learning never stops";
var colors;
(function (colors) {
    colors[colors["RED"] = 0] = "RED";
    colors[colors["GREEN"] = 1] = "GREEN";
    colors[colors["BLUE"] = 2] = "BLUE";
    colors[colors["YELLOW"] = 3] = "YELLOW";
    colors[colors["BLACK"] = 4] = "BLACK";
    colors[colors["WHITE"] = 5] = "WHITE";
    colors[colors["PURPLE"] = 6] = "PURPLE";
})(colors || (colors = {}));
console.log(age);
console.log(pi);
console.log(motto);
console.log(colors);
