// ingredients-modal
let phone = document.querySelector("[id='icecoffe-modal-tel']");
let user = document.querySelector("[id='icecoffe-modal-name']");
let button = document.querySelector("[id='icecoffe-modal-button']");
phone.addEventListener('input', function() {
  validate();
});

user.addEventListener('input', function() {
 validate();
});

function validate(){
button.disabled = !phone.value || !user.value;
}
