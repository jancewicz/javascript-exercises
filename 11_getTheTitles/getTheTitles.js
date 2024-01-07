const getTheTitles = function (bookList) {
    const titleList = bookList.map((book) => book.title);
    return titleList;

};

// MAP IS BETTER METHOD BUT COULD'VE BEEN DONE WITH REDUCE

// const bookTitles = bookList.reduce((titles, book) => {
//     titles.push(book.title);
//     return titles;
//   }, []);

// Do not edit below this line
module.exports = getTheTitles;



