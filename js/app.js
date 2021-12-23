

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const form = document.querySelector('form'); 
  let isValidate = false;
  const regExpName = /^[a-z0-9 -]{3,16}$/;
  const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;

  const submit = () => {
    alert('Successful sending');
  };
  const validateElem = (elem) => {
    if (elem.name === 'username') {
      if (!regExpName.test(elem.value) && elem !== "") {
        elem.nextElementSibling.textContent = "Please enter a valid username";
        isValidate = false;
      } else {
        elem.nextElementSibling.textContent = "";
        isValidate = true;
      }
    }
    if (elem.name === 'useremail') {
      if (!regExpEmail.test(elem.value) && elem !== "") {
        elem.nextElementSibling.textContent = "Please enter a valid Email";
        isValidate = false;
      } else {
        elem.nextElementSibling.textContent = "";
        isValidate = true;
      }
    }
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (let elem of form.elements) {
      if (!elem.classList.contains("form-check-input") && 
      elem.tagName !== "BUTTON"
    )  {
      elem.addEventListener('blur', () => {
        validateElem(elem);
      });
      }
    }

    for (let elem of form.elements) {
      if (!elem.classList.contains("form-check-input") && 
      elem.tagName !== "BUTTON"
    ) {
        if (elem.value === "") {
          elem.nextElementSibling.textContent = "Please fill required!";
          isValidate = false;
        } else {
          elem.nextElementSibling.textContent = "";
          isValidate = true;
        }
      }
    }

    if (isValidate) {
      submit();
      form.reset();
    } else {
      alert('Something is wrong');
    }
  });
});




