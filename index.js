let textTodo = document.querySelector("#textTodo");
let prioritySelect = document.querySelector("#prioritySelect");
let addBtn = document.querySelector("#addBtn");
let listCards = document.querySelector("#listCards");

textTodo.addEventListener("keyup", (e) => {
  console.log(e.target.value.length);
});

addBtn.addEventListener("click", (e) => {
  let selectedValue = prioritySelect.value;
  let toDo = textTodo.value;
  let priority = prioritySelect.value;
  let trimmedtoDo = toDo.trim();

  if (toDo.length == 0 || selectedValue === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    console.log(`${trimmedtoDo}`);
    console.log(`${priority}`);
    Swal.fire({
      title: "Good job!",
      text: "Your task has been added!",
      icon: "success",
    });

    if (priority == 1) {
      listCards.innerHTML += `<div class="col">
              <div class="card text-bg-secondary mb-3" style="max-width: 18rem">
                <div class="card-header">Low</div>
                <div class="card-body">
                  <h5 class="card-title">${toDo}</h5>
                </div>
              </div>
            </div> `;

      clearInputs();
    }

    if (priority == 2) {
      listCards.innerHTML += `<div class="col">
              <div class="card text-bg-light mb-3" style="max-width: 18rem">
                <div class="card-header">Medium</div>
                <div class="card-body">
                  <h5 class="card-title">${toDo}</h5>
                </div>
              </div>
            </div>`;

      clearInputs();
    }

    if (priority == 3) {
      listCards.innerHTML += `<div class="col">
              <div class="card text-bg-danger mb-3" style="max-width: 18rem">
                <div class="card-header">High priority</div>
                <div class="card-body">
                  <h5 class="card-title">${toDo}</h5>
                </div>
              </div>
            </div> `;

      clearInputs();
    }
  }
});

function clearInputs() {
  textTodo.value = "";
  prioritySelect.selectedIndex = 0;
}
