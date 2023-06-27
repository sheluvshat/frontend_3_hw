function FilterBooks(bookList) {
    var booksWithU = [];
    var otherBooks = [];

    for (var i = 0; i < bookList.length; i++) {
        if (containsU(bookList[i])) {
            booksWithU.push(bookList[i]);
        } else {
            otherBooks.push(bookList[i]);
        }
    }

    console.log("Книги с буквой 'у':", booksWithU);
    console.log("Остальные книги:", otherBooks);
}

function containsU(book) {

    return book.toLowerCase().includes('у');
}
const bookList = ["Гарри Поттер", "Улисс", "1941", "Мастер и Маргарита", "Унесённые ветром"];
FilterBooks(bookList);

function calculateAverage(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    var total = numbers.reduce((sum, num) => sum + num, 0);
    var average = total / numbers.length;

    return average;
}
var result = calculateAverage(1, 10, 100, 1000, 10000);
console.log(result);