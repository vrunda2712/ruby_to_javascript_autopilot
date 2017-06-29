var apples = 14;
console.log(apples);
console.log("I have " + apples + " apples.");


var materials = ['wood','metal','stone'];
var words = {};
words["elephant"] = "The world's largest land mammal.";
words["school"] = "A place of learning.";
words["ice cream"] = "A delicious milk-based desserts.";


var num = 16;
if (num > 10){
 console.log( num + " is greater than 10.");
 } else if (num == 10) {
 console.log( num + " is exactly 10.");
 } else {
 console.log( num + "must be less than 10.");
 };


for (var i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over.");
};


var base = 5;
for (var num = 0; num < 20; num++) {
  console.log( num + base);
};


var total = 0;
for (var num = 0; num < 100; num++) {
  console.log( total += num);
};
console.log(total);


for (var height = 3; height <= 15; height++) {
  if (height > 9){
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  };
};


containers = ['purse', 'wallet', 'backback'];
for (var i in containers){
  console.log(containers[i]);
};


function helloWorld(){
  console.log("Hello World!");
};
console.log(helloWorld());


function add(firstNum, secondNum){
  return firstNum+secondNum;
};
amount = add (5, 7);
console.log(amount);
