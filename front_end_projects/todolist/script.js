const taskInput = document.getElementById("create");
const container = document.querySelector(".tasks-container");

const addTask = () => {
  if (taskInput.value === "") {
    alert("Please write somethink");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value + " add the " + formatDay;
    container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    save();
  }
  taskInput.value = "";
};

container.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    save();
  }
});

const save = () => {
  localStorage.setItem("data", container.innerHTML);
};

const getSave = () => {
  container.innerHTML = localStorage.getItem("data");
};

getSave();

const date = new Date();
const day = date.getDate();
const years = date.getFullYear();
const mounth = date.getMonth() + 1;
if (mounth < 10) {
  mounth = "0" + mounth;
}
const formatDay = day + "/" + mounth + "/" + years;
