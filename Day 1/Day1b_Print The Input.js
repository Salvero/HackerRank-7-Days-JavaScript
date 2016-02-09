function processData(input) {
    //Enter your code here
    console.log(input)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});



// Comments: You don't need to use something like console.log("How many chickens does it take to cross the road?"), just use "input" inside console.