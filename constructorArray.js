// Constructor function for Student

function Student(firstName, graduatedYear, eyeColor, introduction, height) {

  this.firstName = firstName;

  this.graduatedYear = graduatedYear;

  this.eyeColor = eyeColor;

  this.introduction = introduction;

  this.height = height;

}

 

// Method to display student information

Student.prototype.displayInfo = function() {

  console.log("Student Information:");

  console.log("Name: " + this.firstName);

  console.log("Graduated Year: " + this.graduatedYear);

  console.log("Eye Color: " + this.eyeColor);

  console.log("Introduction: " + this.introduction);

  console.log("Height: " + this.height + " cm");

};

 

// Create student objects using the constructor

var student1 = new Student("John", 2022, "Brown", "Hello, I'm John!", 175);

var student2 = new Student("Alice", 2021, "Blue", "Hi, I'm Alice!", 163);

var student3 = new Student("Bob", 2023, "Green", "Hey, I'm Bob!", 180);

 

// Display student information

student1.displayInfo();

console.log("-------------------");

student2.displayInfo();

console.log("-------------------");

student3.displayInfo();
