// buy-now-modal
let phone = document.querySelector("[id='buy-modal-mob-tel']");
let user = document.querySelector("[id='buy-modal-mob-name']");
let button = document.querySelector("[id='buy-modal-mob-button']");
phone.addEventListener('input', function() {
  validate();
});

user.addEventListener('input', function() {
 validate();
});

function validate(){
button.disabled = !phone.value || !user.value;
}
