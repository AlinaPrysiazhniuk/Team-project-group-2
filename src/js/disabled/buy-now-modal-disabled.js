// buy-now-modal
let phone = document.querySelector("[id='buy-modal-tel']");
let user = document.querySelector("[id='buy-modal-name']");
let button = document.querySelector("[id='buy-modal-button']");
phone.addEventListener('input', function() {
  validate();
});

user.addEventListener('input', function() {
 validate();
});

function validate(){
button.disabled = !phone.value || !user.value;
}
