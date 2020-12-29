
class Book {
    constructor(title, isbn, author, ratings) {
        this.title = title;
        this.isbn = isbn;
        this.author = author;
        this.ratings = ratings;
    }

    getAverageReview() {
        let averageReview = (this.ratings.reduce((a, b) => a + b)) / this.ratings.length
        return averageReview;
    }
}

class BookFactory {
    constructor() {
        this._books = [];
    }

    createBook(title, isbn, author, ratings) {
        let book = this.getBookBy(isbn);
        if (book) {
            return book;
        } else {
            const newBook = new Book(title, isbn, author, ratings);
            this._books.push(newBook);
            return newBook;
        }
    }

    getBookBy(attr) {
        return this._books.find(book => book.attr === attr);
    }
}