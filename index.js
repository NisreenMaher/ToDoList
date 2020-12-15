var plus = document.querySelector("#toggle-form");
var input = document.querySelector("input");
var li = document.querySelectorAll("li");
var remove = document.querySelectorAll("li span");
var list = document.querySelectorAll("ul")[0];
clickLi();
plus.addEventListener("click", (event) => {
  input.classList.toggle("display");
});
function clickLi() {
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (event) => {
      li[i].classList.toggle("choose");
    });
    remove[i].addEventListener("click", (event) => {
      console.log(event);
      list.removeChild(li[i]);
    });
  }
}
input.addEventListener("keyup", (event) => {
  console.log(event.key);
  if (event.key == "Enter") {
    var newli = document.createElement("li");
    var icon = document.createElement("span");
    var i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-trash");
    icon.appendChild(i);
    var value = input.value;
    newli.appendChild(icon);
    newli.appendChild(document.createTextNode(value));
    list.appendChild(newli);
    icon.addEventListener("click", (event) => {
      console.log(event);
      list.removeChild(newli);
    });
    newli.addEventListener("click", (event) => {
      newli.classList.toggle("choose");
    });
    input.value = "";
  }
});
