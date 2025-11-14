//Task 1
//Task 1.1

// To Create fruits array
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

// To Print first and last item
console.log("First fruit:", fruits[0]); // First element
console.log("Last fruit:", fruits[fruits.length - 1]); // Last element

// To Add new fruit at the end
fruits.push("Pineapple");
console.log("After adding pineapple:", fruits);

// To Remove the second fruit (index 1)
fruits.splice(1, 1); // Remove 1 element at index 1
console.log("After removing banana:", fruits);

// To Find length of array
console.log("Array length:", fruits.length);

//Task 1.2

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach()
console.log("Using forEach():");
fruits.forEach((fruit) => {
    console.log(fruit);
});

//Task 2

//Task 2.1

const numbers = [2, 5, 8, 10, 12];

// Using .map() to double each number
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Using .filter() to keep numbers greater than 6
const filteredNumbers = numbers.filter(num => num > 6);
console.log("Numbers greater than 6:", filteredNumbers);

// Using .reduce() to find sum
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of numbers:", sum);

//Task 2.2

// Check if 8 is in the array
console.log("Includes 8:", numbers.includes(8));

// Find index of 10
console.log("Index of 10:", numbers.indexOf(10));

// Sort array in ascending order
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

//Task 3

//Task 3.1

// Creating student object
const student = {
    name: "Kavindu",
    age: 21,
    faculty: "Computing",
    subjects: ["Web Development", "Database Systems", "Programming"]
};

// Printing name and faculty of the student
console.log("Name:", student.name);
console.log("Faculty:", student.faculty);

// Adding new property
student.year = 2025;
console.log("After adding year:", student);

// Changing the age of the student
student.age = 22;
console.log("After updating age:", student);

// Printing all subjects
console.log("Subjects:");
student.subjects.forEach((subject, index) => {
    console.log(`${index + 1}. ${subject}`);
});

// Task 4

//Task 4.1

//Initializing all students
const students = [
    {name: "Kavindu", age: 21, faculty: "Computing"},
    {name: "Nimesha", age: 22, faculty: "Engineering"},
    {name: "Dinuka", age: 23, faculty: "Business"}
];

// Printing all student names
console.log("Student names:");
students.forEach(student => {
    console.log(student.name);
});

// Finding students older than 21
const olderStudents = students.filter(student => student.age > 21);
console.log("Students older than 21:", olderStudents);

// Creating an array of faculty names
const faculties = students.map(student => student.faculty);
console.log("Faculty names:", faculties);

//Task 4.2

//Inititalizing teacher details
const classroom = {
    className: "IT2025",
    teacher: "Mr. Perera",
    students: [
        {name: "Kavindu", age: 21},
        {name: "Nimesha", age: 22},
        {name: "Dinuka", age: 23}
    ]
};

// Printing teacher's name
console.log("Teacher:", classroom.teacher);

// Adding a new student
classroom.students.push({name: "Sachini", age: 20});
console.log("After adding new student:", classroom.students);

// Printing all student names
console.log("All students in classroom:");
classroom.students.forEach(student => {
    console.log(student.name);
});

//Task 5

//Initializing a list of Products
const products = [
    {name: "Keyboard", price: 2500, qty: 2},
    {name: "Mouse", price: 1500, qty: 3},
    {name: "Monitor", price: 22000, qty: 1}
];

// Calculating total value using reduce function
const totalValue = products.reduce((total, product) => {
    return total + (product.price * product.qty);
}, 0);

//Printing the Total value of all Products
console.log("Total value of all products: Rs.", totalValue);





