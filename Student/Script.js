"use strict";

let student = [];
function addStudent(){
    console.log("Agregar estudiante");
    const name = document.getElementById("nameInput").value.trim(); //trim sirve para quitar espacios por ejemplo "   Diego  " lo cambia a "Diego"
    const grade = parseFloat(document.getElementById("gradeInput").value); //parseFloat sirve para recibir numeros decimales 

    if(name === "" || isNaN(grade) || (grade < 0 && grade > 100)){
        alert("Please enter a valid data");
        return;
    }

    const student = {name,
         grade, 
        status: grade >= 70 ? "Passed" : "Failed",
};
students.push(student);
displayStudents();
updateAverage();
}

function displayStudents(){
    const list = document.getElementById("studentList");
    for(let i = 0; i<students.lengt; i++){
        const li = document.createElement("li");
        li.innerHTML=`<p>
        ${students[i].name} - ${students[i].grade} - ${students[i].status}
        </p>`;
        list.appendChild(li);
    }
}


function updateAverage() {
    if (students.length === 0) {
      return;
    }
    let total = 0;
    for (let i = 0; i < students.length; i++) {
      total = total + students[i].grade;
    }
    let average = total / students.length;
  
    document.getElementById("averageDisplay").textContent = `Average Grade: ${average.toFixed(2)}`;//to fixed sirve para redondear dependiendo del número que pongas en los parentesis
  }
  
  function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
  }