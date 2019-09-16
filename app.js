// Working With Table in index.html and app.js
//console.log(table)

var students = [
    {
        name: "Dauda",
        level: "300",
        grade: 90,
        age: 23,
        gender: "male"
    },
    {
        name: "Dauda",
        level: "300",
        grade: 90,
        age: 23,
        gender: "male"
    },
    {
        name: "Dauda",
        level: "300",
        grade: 90,
        age: 23,
        gender: "male"
    }
];
// Getting Element By Id and Editing the Table by Adding style.
var table = document.getElementById("table");
students.forEach((student)=>{
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.style.textAlign = "center"; td1.style.backgroundColor = "brown"; td1.innerHTML = student.name;
    var td2 = document.createElement("td");
    td2.style.textAlign = "center"; td2.style.backgroundColor = "brown"; td2.innerHTML = student.level;
    var td3 = document.createElement("td");
    td3.style.textAlign = "center"; td3.style.backgroundColor = "brown";td3.innerHTML = student.grade;
    var td4 = document.createElement("td");
    td4.style.textAlign = "center"; td4.style.backgroundColor = "brown"; td4.innerHTML = student.age;
    var td5 = document.createElement("td");
    td5.style.textAlign = "center"; td5.style.backgroundColor = "brown";td5.innerHTML = student.gender;
    tr.append(td1,td2,td3,td4,td5);
    table.appendChild (tr);
});

var name = document.getElementById ("Name");
var level = document.getElementById ("Level");
var grade = document.getElementById ("Grade");
var age = document.getElementById ("Age");
var gender = document.getElementById ("Gender");
var btm = document.getElementById ("btn");

// adding Event Listener to my Code
btn.addEventListener("Click",()=>{
    console.log (Name.Value, Level.Value, Grade.Value, Age.Value, Gender.Value);

})

//var clickHandle = ("event")=>{ 
  //  console.log ("Working ...");
//};
//btn.addEventListener ("Click", ClickHandle);

