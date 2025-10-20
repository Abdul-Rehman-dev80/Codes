let form = document.querySelector("form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let submitBtn = document.querySelector(".submitBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
    if (nameInput.value === "") {
      alert("enter name");
    } else if (nameInput.value.length < 4) {
        alert('name cannot be less than 4 characters')
    }else if (emailInput.value === "") {
      alert("enter email");
    }
});