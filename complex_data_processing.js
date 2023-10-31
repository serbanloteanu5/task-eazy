// Filename: complex_data_processing.js

/*
 * This code demonstrates a complex data processing algorithm
 * that performs multiple data manipulations and analysis.
 */

// Declare some example data
var data = [
  { name: "John", age: 32, gender: "male", income: 50000 },
  { name: "Jane", age: 28, gender: "female", income: 60000 },
  { name: "Bob", age: 45, gender: "male", income: 70000 },
  { name: "Alice", age: 35, gender: "female", income: 55000 }
  // ... more data entries ...
];

// Function to calculate average income
function calculateAverageIncome(data) {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum += data[i].income;
  }
  return sum / data.length;
}

// Calculate average income
var avgIncome = calculateAverageIncome(data);
console.log("Average Income: $" + avgIncome);

// Function to filter data by age range
function filterDataByAge(data, minAge, maxAge) {
  var filteredData = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].age >= minAge && data[i].age <= maxAge) {
      filteredData.push(data[i]);
    }
  }
  return filteredData;
}

// Filter data by age range
var filteredData = filterDataByAge(data, 30, 40);
console.log("Filtered Data:");
console.log(filteredData);

// Function to group data by gender
function groupDataByGender(data) {
  var groupedData = {};
  for (var i = 0; i < data.length; i++) {
    var gender = data[i].gender;
    if (!groupedData[gender]) {
      groupedData[gender] = [];
    }
    groupedData[gender].push(data[i]);
  }
  return groupedData;
}

// Group data by gender
var groupedData = groupDataByGender(data);
console.log("Grouped Data:");
console.log(groupedData);

// Function to find the oldest person in the data
function findOldestPerson(data) {
  var oldestPerson = null;
  for (var i = 0; i < data.length; i++) {
    if (oldestPerson === null || data[i].age > oldestPerson.age) {
      oldestPerson = data[i];
    }
  }
  return oldestPerson;
}

// Find the oldest person
var oldestPerson = findOldestPerson(data);
console.log("Oldest Person:");
console.log(oldestPerson);

// ... more code ...

// Example usage:

/*
 * Expected Output:
 * Average Income: $58750
 * Filtered Data:
 * [
 *   { name: "John", age: 32, gender: "male", income: 50000 },
 *   { name: "Alice", age: 35, gender: "female", income: 55000 }
 * ]
 * Grouped Data:
 * {
 *   "male": [
 *     { name: "John", age: 32, gender: "male", income: 50000 },
 *     { name: "Bob", age: 45, gender: "male", income: 70000 }
 *   ],
 *   "female": [
 *     { name: "Jane", age: 28, gender: "female", income: 60000 },
 *     { name: "Alice", age: 35, gender: "female", income: 55000 }
 *   ]
 * }
 * Oldest Person:
 * { name: "Bob", age: 45, gender: "male", income: 70000 }
 */