//variabels
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const selectBox = document.createElement("select")
selectBox.id = "selectBox"


//lijst gedaan todos
const gedaanTodos = [
  {
    naam: "appel",
    winkel: "lidl"
  },
  {
    naam: "banaan",
    winkel: "carrefour"
  },
  {
    naam: "peer",
    winkel: "colruyt"
  },
  {
    naam: "kiwwi",
    winkel: "aldi"
  }
]

//
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});

//takenlijst
list.appendChild(selectBox)
gedaanTodos.forEach((todo)=>{
  //vooraf taken in lijst
  const gedaanTodo = document.createElement("p")
  gedaanTodo.textContent = todo.naam
  list.appendChild(gedaanTodo)
  //dropdown
  const winkelOptie = document.createElement("option")
  winkelOptie.textContent = todo.winkel
  selectBox.appendChild(winkelOptie)
})


