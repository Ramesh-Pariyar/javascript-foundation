/* eslint-disable no-unused-vars, no-prototype-builtins */
const bookPrototype = {
  getPrice() {
    return this.price;
  },
  getInfo() {
    return `${this.title} by ${this.author}`;
  },
  addRating(rating) {
    this.rating.push(rating);
  },
  getRating() {
    if (this.rating.length === 0) return 0;
    const numericRatings = this.rating.map((r) => r.length);
    const total = numericRatings.reduce((acc, val) => acc + val, 0);
    return Math.round(total / this.rating.length);
  },
};

function createBook(id, title, author, price) {
  const book = Object.create(bookPrototype);
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
}
