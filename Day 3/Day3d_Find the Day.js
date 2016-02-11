// Task

// Write a JavaScript function to get the day of a particular date.
// Input Format
//
// Several lines of input containing dates in MM/DD/YYYY format.
// The program should end when it encounters −1−1.
//
// Output Format
//
// Print the day of the week indicated by the date for each line of input on a separate line.

function findDay(myDate) {
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
    if(myDate != -1){
        var allWeekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
         var day = new Date(myDate);
        console.log(allWeekDays[day.getDay()]);
    }
}
