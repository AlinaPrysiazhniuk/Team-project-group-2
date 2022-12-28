// buy-now-modal
let phone = document.querySelector("[id='buy-modal-desktop-tel']");
let user = document.querySelector("[id='buy-modal-desktop-name']");
let button = document.querySelector("[id='buy-modal-desktop-button']");
phone.addEventListener('input', function() {
  validate();
});

user.addEventListener('input', function() {
 validate();
});

function validate(){
button.disabled = !phone.value || !user.value;
}
