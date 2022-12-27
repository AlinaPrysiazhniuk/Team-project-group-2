// ingredients-modal
let phone = document.querySelector("[id='icecream-modal-tel']");
let name1 = document.querySelector("[id='icecream-modal-name']");
let button = document.querySelector("[id='icecream-modal-button']");
phone.addEventListener('input', function() {
  validate();
});

name1.addEventListener('input', function() {
 validate();
});

function validate(){
button.disabled = !phone.value || !name1.value;
}
