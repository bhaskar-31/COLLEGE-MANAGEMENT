// 🔐 Login
function login(e) {
    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "bhaskar" && pass === "bhaskar@31") {
        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Login");
    }
}

// 🚪 Logout
function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}

// ➕ Add Student
function addStudent(e) {
    e.preventDefault();

    let student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value,
        year: document.getElementById("year").value
    };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added!");
    window.location.href = "view_students.html";
}

// 📋 Load Students
function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let table = document.getElementById("studentTable");

    students.forEach(s => {
        let row = table.insertRow();

        row.insertCell(0).innerText = s.name;
        row.insertCell(1).innerText = s.email;
        row.insertCell(2).innerText = s.course;
        row.insertCell(3).innerText = s.year;
    });
}
// 📝 Add Exam Result
function addResult(e) {
    e.preventDefault();

    let result = {
        name: document.getElementById("studentName").value,
        subject: document.getElementById("subject").value,
        marks: document.getElementById("marks").value
    };

    let results = JSON.parse(localStorage.getItem("results")) || [];
    results.push(result);

    localStorage.setItem("results", JSON.stringify(results));

    alert("Result Added!");
    location.reload();
}

// 📋 Load Results
function loadResults() {
    let results = JSON.parse(localStorage.getItem("results")) || [];
    let table = document.getElementById("resultTable");

    results.forEach(r => {
        let row = table.insertRow();
        row.insertCell(0).innerText = r.name;
        row.insertCell(1).innerText = r.subject;
        row.insertCell(2).innerText = r.marks;
    });
}


// 💰 Add Fee
function addFee(e) {
    e.preventDefault();

    let fee = {
        name: document.getElementById("studentFeeName").value,
        amount: document.getElementById("amount").value,
        status: document.getElementById("status").value
    };

    let fees = JSON.parse(localStorage.getItem("fees")) || [];
    fees.push(fee);

    localStorage.setItem("fees", JSON.stringify(fees));

    alert("Fee Added!");
    location.reload();
}

// 📊 Load Fees
function loadFees() {
    let fees = JSON.parse(localStorage.getItem("fees")) || [];
    let table = document.getElementById("feeTable");

    fees.forEach(f => {
        let row = table.insertRow();
        row.insertCell(0).innerText = f.name;
        row.insertCell(1).innerText = f.amount;
        row.insertCell(2).innerText = f.status;
    });
}
// 📅 Mark Attendance
function markAttendance(e) {
    e.preventDefault();

    let attendance = {
        name: document.getElementById("attName").value,
        date: document.getElementById("attDate").value,
        status: document.getElementById("attStatus").value
    };

    let records = JSON.parse(localStorage.getItem("attendance")) || [];
    records.push(attendance);

    localStorage.setItem("attendance", JSON.stringify(records));

    alert("Attendance Marked!");
    location.reload();
}

// 📋 Load Attendance
function loadAttendance() {
    let records = JSON.parse(localStorage.getItem("attendance")) || [];
    let table = document.getElementById("attendanceTable");

    records.forEach(r => {
        let row = table.insertRow();
        row.insertCell(0).innerText = r.name;
        row.insertCell(1).innerText = r.date;
        row.insertCell(2).innerText = r.status;
    });
}


// 👩‍🏫 Add Faculty
function addFaculty(e) {
    e.preventDefault();

    let faculty = {
        name: document.getElementById("facName").value,
        subject: document.getElementById("subject").value
    };

    let facultyList = JSON.parse(localStorage.getItem("faculty")) || [];
    facultyList.push(faculty);

    localStorage.setItem("faculty", JSON.stringify(facultyList));

    alert("Faculty Added!");
    location.reload();
}

// 📋 Load Faculty
function loadFaculty() {
    let facultyList = JSON.parse(localStorage.getItem("faculty")) || [];
    let table = document.getElementById("facultyTable");

    facultyList.forEach(f => {
        let row = table.insertRow();
        row.insertCell(0).innerText = f.name;
        row.insertCell(1).innerText = f.subject;
    });
}