function displayInformation() {
     // var library is defined, use it to print the information
     var bill = "Already read " + "'" + library[0].title + "'" + " by " + library[0].author + "."
     console.log(bill);
     var steve = "Already read " + "'" + library[1].title + "'" + " by " + library[1].author + "."
     console.log(steve);
     var mock = "You still need to read " + "'" + "Mockingjay: The Final Book of The Hunger Games" + "'" + " by " + library[2].author + ".";
    console.log(mock);
}

// tail starts here
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();
