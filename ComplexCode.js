/* 
   Filename: ComplexCode.js
   Description: This complex code performs various operations on a dataset of employees.
*/

// Importing external libraries
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');

// Constants
const API_URL = 'https://api.example.com';

// Helper functions
const calculateAge = (dob) => {
  const today = moment();
  const birthday = moment(dob);
  return today.diff(birthday, 'years');
};

const fetchEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error.message);
    return [];
  }
};

// Main function
const main = async () => {
  try {
    // Fetching employee data
    const employees = await fetchEmployees();

    // Filtering employees based on criteria
    const filteredEmployees = employees.filter((employee) => {
      const age = calculateAge(employee.dob);
      return employee.department === 'Sales' && age > 25;
    });

    // Sorting employees by hire date
    filteredEmployees.sort((a, b) => {
      return moment(a.hireDate).diff(moment(b.hireDate));
    });

    // Writing filtered results to a file
    fs.writeFileSync('filtered_employees.txt', JSON.stringify(filteredEmployees));

    console.log('Filtered employees:', filteredEmployees);
    console.log('Filtered employees count:', filteredEmployees.length);

    // Performing additional operations on filtered employees...
    // ...

    console.log('Complex code execution completed successfully!');
  } catch (error) {
    console.error('Error executing complex code:', error.message);
  }
};

// Execute the main function
main();