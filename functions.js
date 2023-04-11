//The following code have been adapted from https://www.youtube.com/watch?v=H5tuwAO-_Kg&t=1536s Accessed: 2023-04-10 & 2023-04-11

//Retrives elements from HTMl document, using ID and CLASS

const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const btn = document.getElementById("add-btn");

window.addEventListener("load", function () {
  const items = JSON.parse(localStorage.getItem("items"));
  if (items) {
    toDoItems.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const divParent = document.createElement("div");
      const divChild = document.createElement("div");
      const checkIcon = document.createElement("i");
      const trashIcon = document.createElement("i");

      divParent.className = "item";
      divParent.dataset.checked = item.checked;
      divParent.textContent = item.text;

      checkIcon.className = "fa-solid fa-check";
      if (item.checked === "true") {
        checkIcon.style.color = "limegreen";
        divParent.classList.add("completed");
      }

      checkIcon.addEventListener("click", function () {
        toggleCheckIcon(checkIcon, divParent);
        saveItems();
      });

      divChild.appendChild(checkIcon);

      trashIcon.className = "fa-solid fa-trash";
      trashIcon.addEventListener("click", function () {
        divParent.remove();
        saveItems();
      });

      divChild.appendChild(trashIcon);
      divParent.appendChild(divChild);
      toDoItems.appendChild(divParent);
    }
  }
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addItem();
});

btn.addEventListener("click", function () {
  addItem();
});

function addItem() {
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var checkIcon = document.createElement("i");
  var trashIcon = document.createElement("i");

  divParent.className = "item";
  divParent.dataset.checked = "false";
  divParent.textContent = input.value;

  checkIcon.className = "fa-solid fa-check";
  checkIcon.addEventListener("click", function () {
    toggleCheckIcon(checkIcon, divParent);
    saveItems();
  });

  divChild.appendChild(checkIcon);

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.addEventListener("click", function () {
    divParent.remove();
    saveItems();
  });

  divChild.appendChild(trashIcon);
  divParent.appendChild(divChild);

  toDoItems.appendChild(divParent);
  saveItems();

  input.value = "";
}

function saveItems() {
  const itemList = toDoItems.querySelectorAll(".item");
  const items = [];

  itemList.forEach(function (item) {
    const itemText = item.textContent;
    const isChecked = item.dataset.checked;
    items.push({
      text: itemText,
      checked: isChecked,
    });
  });
  localStorage.setItem("items", JSON.stringify(items));
}

function toggleCheckIcon(checkIcon, item) {
  if (item.dataset.checked === "false") {
    checkIcon.style.color = "limegreen";
    item.dataset.checked = "true";
    item.classList.add("completed");
  } else {
    item.dataset.checked = "false";
    item.classList.remove("completed");
  }
}
