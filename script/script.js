//variabels
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const selectBox = document.createElement("select")
selectBox.id = "selectBox"

//lijst gedaan todos
const voorafTodos = [
  {
    id: 1,
    naam: "studeren",
    afgewerkt: "nee"
  },
  {
    id: 2,
    naam: "lopen",
    afgewerkt: "nee"
  },
  {
    id: 3,
    naam: "fietsen naar school",
    afgewerkt: "nee"
  },
  {
    id: 4,
    naam: "huiswerk maken",
    afgewerkt: "nee"
  }
]
//lijst winkels
const winkels = [
  {
    id: 1,
    naamWinkel: "geen winkel"
  },
  {
    id: 2,
    naamWinkel: "carrefour"
  },
  {
    id: 3,
    naamWinkel: "colruyt"
  },
  {
    id: 4,
    naamWinkel: "aldi"
  }
]

//
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");

    //naam geven van de winkel bij tekst
    selectBox.addEventListener("change", (args)=>{
      const deWinkel = winkels.find(
        (winkel)=>winkel.id == args.target.value)
        const naamVanWinkel = deWinkel.naamWinkel
        console.log(naamVanWinkel);
        li.textContent = `${text} ${winkels.naamWinkel}`;
    })

    li.textContent = `${text} ${winkels.naamWinkel}`;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});

//takenlijst
voorafTodos.forEach((todo)=>{
  //vooraf taken in lijst
  const voorafTodo = document.createElement("li")
  voorafTodo.textContent = todo.naam
  voorafTodo.addEventListener("click", function () {
    voorafTodo.classList.toggle("completed");
  });
  list.appendChild(voorafTodo)
})
//dropdown box winkels
form.appendChild(selectBox)
winkels.forEach((winkel)=>{
  const winkelOptie = document.createElement("option")
  winkelOptie.textContent = winkel.naamWinkel
  winkelOptie.value = winkel.id
  selectBox.appendChild(winkelOptie)
})

//naam van de winkel geven

// selectBox.addEventListener("change", (args)=>{
//   const deWinkel = winkels.find(
//     (winkel)=>winkel.id == args.target.value)
//     const naamVanWinkel = deWinkel.naamWinkel
//     console.log(naamVanWinkel);
// })
