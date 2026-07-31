console.log("Hello, World!");
let a = 5;
let b = 8;
let c = `the sum is:${a + b} happend`
console.log(c);

let n = 10;
let sum = `the sum is:${n + (n + 1)}`;
console.log(sum);
let x = 20;
let y = ++x;
let z = x++;
console.log(y);
console.log(z);
let age = 23;
let vote = (age >= 18)
console.log(vote);
let agev = 17
if (agev >= 18) {
    console.log("You are eligible to vote");

}
if (agev == 17) {
    console.log("lets think");
}
let color = "yellow";

if (color === "red") {
    console.log("stop");

}
else if (color === "green") {
    console.log("go");

}
else if (color === "yellow") {
    console.log("wait");
}
else {
    console.log("invalid color");
}
let price = 150;
if (price === 250) {
    console.log("size XL");

}
else if (price < 250 && price > 100) {
    console.log("size L");
}
else if (price <= 100 && price > 50) {
    console.log("size M");

}
else if (price === 50) {
    console.log("size S");
}
else {
    console.log("invalid size");
}