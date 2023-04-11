const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const btn = document.getElementById("add-btn");

//Load items from local storage on page load
window.addEventListener("load", function () {
  const items = this.localStorage.getItem("items");
  if (items) {
    toDoItems.innerHTML = items;

    //Restore check and trash icons statmen
    const itemList = toDoItems.querySelector(".item");
    itemsList.array.forEach(function (item) {
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
        toggleCheckicon(checkIcon, item);
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
  var CheckIcon = document.createElement("i");
  var trashIcon = document.createElement("i");

  divParent.className = "item";
}
