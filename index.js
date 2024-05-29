// let number =0;
// function add (){
//     return number=number+1
// }



// const form = document.getElementById("form1");
// const table = document.getElementById("tble")
// form.addEventListener("submit" , function(e){
// if (e.target.input1.value ==="" && e.target.input2.value === "" && e.target.input3.value === "") {
//     alert("empty form");
// }

// else {
// let row = document.createElement("tr");
// row.innerHTML = `<td>${add()}</td> 
// <td>${e.target.input1.value}</td>
// <td>${e.target.input2.value}</td>
// <td>${e.target.input3.value}</td>`
// table.appendChild(row)}

// })


// let number = 0;

// function add() {
//   return number++;
// }

const form = document.getElementById("form1");
const table = document.getElementById("tble");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent the form from submitting

  if (e.target.elements.input1.value === "" && e.target.elements.input2.value === "" && e.target.elements.input3.value === "") {
    alert("Please fill in all fields");
  } else {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${e.target.elements.input1.value}</td>
    <td>${e.target.elements.input2.value}</td>
    <td>${e.target.elements.input3.value}</td>`
    table.appendChild(row);
  }

  e.target.input1.value =""
  e.target.input2.value =""
  e.target.input3.value =""
  save()
  
  table.addEventListener("click" , function(e){
    e.target.remove();
    save()
  })
  
});

function save() {
  localStorage.setItem("data", table.innerHTML);
}
function read() {
table.innerHTML=localStorage.getItem("data")
}
read()


// add();



