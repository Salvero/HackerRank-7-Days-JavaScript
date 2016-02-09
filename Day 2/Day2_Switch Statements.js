// Task

// You are given a variable num. Your task is to print: 

// - ONE, if num is equal to 11. 
// - TWO, if num is equal to 22. 
// - THREE, if num is equal to 33.
// - FOUR, if num is equal to 44.
// - FIVE, if num is equal to 55.
// - SIX, if num is equal to 66.
// - SEVEN, if num is equal to 77.
// - EIGHT, if num is equal to 88.
// - NINE, if num is equal to 99.
// - PLEASE TRY AGAIN, if num is none of the above.


//Do not declare variable num.
//Write your code below this line.
switch(num) {
    case 1:
        text = "ONE";
        break;
    case 2:
        text = "TWO";
        break;
    case 3:
        text = "THREE";
        break;
    case 4:
        text = "FOUR";
        break;
    case 5:
        text = "FIVE";
        break;
    case 6:
        text = "SIX";
        break;
    case 7:
        text = "SEVEN";
        break;
    case 8:
        text = "EIGHT";
        break;
    case 9:
        text = "NINE";
        break;
    default:
        text = "PLEASE TRY AGAIN";
}

console.log(text);