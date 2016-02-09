// Task

// You are given a variable marks. Your task is to print: 

// - AA if marks is greater than 9090. 
// - AB if marks is greater than 8080 and less than or equal to 9090. 
// - BB if marks is greater than 7070 and less than or equal to 8080. 
// - BC if marks is greater than 6060 and less than or equal to 7070. 
// - CC if marks is greater than 5050 and less than or equal to 6060. 
// - CD if marks is greater than 4040 and less than or equal to 5050. 
// - DD if marks is greater than 3030 and less than or equal to 4040. 
// - FF if marks is less than or equal to 3030.

//Do not declare variable marks.
//Write your code below this line.
if(marks > 90) {
    console.log("AA");
} else if (marks > 80 && marks <= 90) {
    console.log("AB")
} else if (marks > 70 && marks <= 80) {
    console.log("BB")
} else if (marks > 60 && marks <= 70) {
    console.log("BC")
} else if (marks > 50 && marks <= 60) {
    console.log("CC")
} else if (marks > 40 && marks <= 60) {
    console.log("CD")
} else if (marks > 30 && marks <= 40) {
    console.log("DD")
} else if(marks <= 30){
    console.log("FF")
}