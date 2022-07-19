//Задание 1
class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
    this._state = this._state * 1.5;
    if (this._state < 0) this._state = 0;
	  if (this._state > 100) this._state = 100;
	} 

	set state(num) {
		if (num < 0) this._state = 0;
    if (num > 100) this._state = 100;
    else this._state = num;
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name,releaseDate, pagesCount);
    this._state = 100;
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this._state = 100;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this._state = 100;
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this._state = 100;
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this._state = 100;
    this.type = "detective";
  }
}

//Задание 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) this.books.push(book);
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      for (let key in this.books[i]) {
        if (key === type && this.books[i][key] === value) {
         return this.books[i];
        } 
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    let tmpBook;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        tmpBook = Object.assign({}, this.books[i]);
        this.books.splice(i);
        return tmpBook;
      }
    }
    return null;
  }
}

// Задание 3

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.gradeBook = {};
  }

  addMark(mark, subject) {
    if (mark < 1 || mark > 5) {
      console.log ('Ошибка, оценка должна быть числом от 1 до 5');
    } else if (Object.keys(this.gradeBook).includes(subject)) {
      this.gradeBook[subject].push(mark);
    } else {
      this.gradeBook[subject] = [mark];
    }
  }

  getAverageBySubject(subject) {
    let marksSum, marksCount, averageBySubject;
    if (Object.keys(this.gradeBook).includes(subject)) { 
      marksSum = Object.values(this.gradeBook[subject]).reduce(((sum, mark) => sum + mark),0);
      marksCount = this.gradeBook[subject].length;
      averageBySubject = marksSum / marksCount;
      return averageBySubject;
    } else {
      console.log('Несуществующий предмет');
    }
  }

  getAverage() {
    let marksSum = 0;
    let marksCount = 0;
    for (let key in this.gradeBook) {
      marksSum += Object.values(this.gradeBook[key]).reduce(((sum, mark) => sum + mark),0);
      marksCount += this.gradeBook[key].length;
    }
    return (marksSum / marksCount);
  }

    exclude(reason) {
    delete this.gradeBook;
    this.excluded = reason;
  }
}