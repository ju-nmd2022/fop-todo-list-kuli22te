//Retrives elements from HTMl document, using ID and CLASS

const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const btn = document.getElementById("add-btn");

//Adds eventlistner reload of web page
//When the load event is triggered
//function retrives stored data from LS
//Which shows To do list with stored items

window.addEventListener("load", function () {
  const items = this.localStorage.getItem("items");
  if (items) {
    toDoItems.innerHTML = items;
    const itemList = toDoItems.querySelectorAll(".item");
    itemList.forEach(function (item) {
      const checkIcon = item.querySelector(".fa-solid.fa-check");
      if (item.dataset.checked === "true") {
        checkIcon.style.color = "limegreen";
      }
      const trashIcon = item.querySelector(".fa-solid.fa-trash");
      trashIcon.addEventListener("click", function () {
        item.remove();
        saveItems();
      });
      checkIcon.addEventListener("click", function () {
        toggleCheckIcon(checkIcon, item);
        saveItems();
      });
    });
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
  divParent.innerHTML = "<div>" + input.value + "</div>";

  checkIcon.className = "fa-solid fa-check";
  checkIcon.style.color = "lightgrey";
  checkIcon.addEventListener("click", function () {
    toggleCheckIcon(checkIcon, divParent);
    saveItems();
  });

  divChild.appendChild(checkIcon);

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.style.color = "darkgrey";
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
    const itemHTML = item.innerHTML;
    const isChecked = item.dataset.checked;
    items.push(
      `<div class="item" data-checked="${isChecked}">${itemHTML}</div>`
    );
  });
  localStorage.setItem("items", items.join(""));
}

function toggleCheckIcon(checkIcon, item) {
  if (item.dataset.checked === "false") {
    checkIcon.style.color = "limegreen";
    item.dataset.checked = "true";
  } else {
    checkIcon.style.color = "lightgrey";
    item.dataset.checked = "false";
  }
}
