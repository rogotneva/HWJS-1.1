
function Student (name, gender, age) {
  this.name = name
  this.gender = gender
  this.age = age
}

// const student1 = new Student('Вася', 'м', 18);
// const student2 = new Student('Аня', 'ж', 17);
// const student3 = new Student('Петя', 'м', 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = []
    this.marks.push(mark)
    } else {
    this.marks.push(mark)
    }
}

Student.prototype.addMarks = function (...mark) {
  for (let i = 0; i < mark.length; i++) {
    if(this.marks === undefined){ 
   	  this.marks = []
      this.marks.push(mark[i])
      } else {
      this.marks.push(mark[i])
    }
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  if(this.marks === undefined) return 0;
  else {
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
      }
    return (sum / this.marks.length);
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject
  delete this.marks
  this.excluded = reason
} 

//Задание2
// Student.prototype.setSubject = function (subjectName) {
//   //ваш код
// }

// ваш код для остальных методов