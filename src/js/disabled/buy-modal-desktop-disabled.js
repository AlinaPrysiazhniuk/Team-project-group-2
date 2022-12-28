// buy-now-modal
let phone = document.querySelector("[id='buy-modal-desktop-tel']");
let name3 = document.querySelector("[id='buy-modal-desktop-name']");
let button = document.querySelector("[id='buy-modal-desktop-button']");
phone.addEventListener('input', function() {
  validate();
});

name3.addEventListener('input', function() {
 validate();
});

function validate(){
button.disabled = !phone.value || !name3.value;
}
