

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);
  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);


    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: '',
          body: '',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = '';
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert ('Error');
        form.classList.remove('_sending');
        }
      } else {
        alert ('Fill in the required fields');
      }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
  }

  function formAddError (input) {
    input.classList.add('_error');
  }

  function formRemoveError (input) {
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});





