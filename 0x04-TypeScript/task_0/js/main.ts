// 1. Define the Student Interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two Student objects
const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "New York"
};

const student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 24,
  location: "London"
};

// 3. Create the studentsList array
const studentsList: Student[] = [student1, student2];

// 4. Function to render the table
const renderTable = (students: Student[]): void => {
  // Create table and table body elements
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // Create table header
  const headerRow = document.createElement('tr');
  const header1 = document.createElement('th');
  header1.textContent = 'First Name';
  const header2 = document.createElement('th');
  header2.textContent = 'Location';

  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  tbody.appendChild(headerRow);

  // Loop through the studentsList and append rows
  students.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement('tr');

    // Create and populate the First Name cell
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    // Create and populate the Location cell
    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;

    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append row to the table body
    tbody.appendChild(row);
  });

  // Append table body to the table
  table.appendChild(tbody);

  // Append the table to the document body
  document.body.appendChild(table);
};

// Execute the rendering function when the window loads
window.onload = () => {
  renderTable(studentsList);
};
