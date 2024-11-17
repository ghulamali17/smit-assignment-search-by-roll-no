let flag = false;
let studentDetails = [
  {
    stdName: "Ali",
    stdRollNo: "256270",
    stdObtMarks: 1000,
    stdTotalMarks: 1100,
  },
  {
    stdName: "Bilal",
    stdRollNo: "256278",
    stdObtMarks: 1000,
    stdTotalMarks: 1100,
  },
  {
    stdName: "Basit",
    stdRollNo: "256279",
    stdObtMarks: 1000,
    stdTotalMarks: 1100,
  },
  {
    stdName: "suban",
    stdRollNo: "256280",
    stdObtMarks: 1000,
    stdTotalMarks: 1100,
  },
];

let name = document.getElementById("name");
let rollNo = document.getElementById("rollNo");
let tMarks = document.getElementById("tMarks");
let obtMarks = document.getElementById("obtMarks");
const rollError = document.getElementById("rollError");
const nameError = document.getElementById("nameError");
const marksError = document.getElementById("marksError");
marksError.style.display = "none";
rollError.style.display = "none";
nameError.style.display = "none";
marksError.style.display = "none";

function formData(e) {
  e.preventDefault();
  Validate();

  if (flag) {
    let userData = {
      stdName: name.value.trim(),
      stdRollNo: rollNo.value.trim(),
      stdObtMarks: parseInt(obtMarks.value.trim()),
      stdTotalMarks: parseInt(tMarks.value.trim()),
    };

    if (userData.stdObtMarks > userData.stdTotalMarks) {
      alert("Obtained marks cannot be greater than total marks!");
      return;
    }

    studentDetails.push(userData);
    alert("Form submitted successfully!");
    console.log(studentDetails);
  } else {
    console.log("Validation failed.");
  }
}

function Validate() {
  flag = true;

  // Validating roll number
  if (rollNo.value.trim().length < 6) {
    rollError.style.display = "block";
    rollError.innerText = "Roll No should be at least 6 characters";
    flag = false;
  } else {
    rollError.style.display = "none";
  }

  // Validating name
  if (name.value.trim() === "") {
    nameError.style.display = "block";
    nameError.innerText = "Name should not be empty";
    flag = false;
  } else {
    nameError.style.display = "none";
  }

  // Validate marks
  if (tMarks.value.trim() === "" || obtMarks.value.trim() === "") {
    marksError.style.display = "block";
    marksError.innerText = "Marks should not be empty";
    flag = false;
  } else {
    marksError.style.display = "none";
  }
}

function searchData() {
  let rollNoFind = document.getElementById("search").value.trim();

  if (!rollNoFind) {
    document.getElementById("result").innerHTML =
      "<p>Please enter a roll number.</p>";
    return;
  }

  // Searching tudent
  let studentFound = null;
  for (let i = 0; i < studentDetails.length; i++) {
    if (studentDetails[i].stdRollNo === rollNoFind) {
      studentFound = studentDetails[i];
      break;
    }
  }

  // Displaying the result
  let resultDiv = document.getElementById("result");
  if (studentFound) {
    resultDiv.innerHTML = `
      <h2>Student Found:</h2>
      <p><strong>Name:</strong> ${studentFound.stdName}</p>
      <p><strong>Roll Number:</strong> ${studentFound.stdRollNo}</p>
      <p><strong>Obtained Marks:</strong> ${studentFound.stdObtMarks}</p>
      <p><strong>Total Marks:</strong> ${studentFound.stdTotalMarks}</p>
    `;
  } else {
    resultDiv.innerHTML = "<p>No student found with this roll number.</p>";
  }
}
