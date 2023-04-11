const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addItem();
});

function addItem() {
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var CheckIcon = document.createElement("i");
  var trashIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = "<div>" + input.value + "</div>";

  CheckIcon.className = "fa-solid fa-check";
  CheckIcon.style.color = "lightgrey";
  CheckIcon.addEventListener("click", function () {
    CheckIcon.style.color = "limegreen";
  });

  divChild.appendChild(CheckIcon);

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.style.color = "darkgrey";
  trashIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(trashIcon);
  divParent.appendChild(divChild);

  toDoItems.appendChild(divParent);

  input.value = "";
}
