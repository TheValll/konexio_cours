// Const html content
const civility = document.getElementById("civility");
const name = document.getElementById("name");
const first_name = document.getElementById("first_name");
const email = document.getElementById("email");
const form = document.querySelector("form");
const submit_btn = document.getElementById("submit");

// Error span
const error_civility = document.querySelector(".error_civility");
const error_name = document.querySelector(".error_name");
const error_first_name = document.querySelector(".error_first_name");
const error_email = document.querySelector(".error_email");

// Submit btn function
submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (civility.checked == false) {
    error_civility.style.display = "block";
  } else {
    error_civility.style.display = "none";
  }
  if (name.value === "" || name.value.length < 2) {
    error_name.style.display = "block";
  } else {
    error_name.style.display = "none";
  }
  if (first_name.value === "" || first_name.value.length < 2) {
    error_first_name.style.display = "block";
  } else {
    error_first_name.style.display = "none";
  }
  if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    error_email.style.display = "block";
  } else {
    error_email.style.display = "none";
  }
});
