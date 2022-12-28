// buy-now-modal
let phone = document.querySelector("[id='buy-modal-desktop-tel']");
let name4 = document.querySelector("[id='buy-modal-desktop-name']");
let button = document.querySelector("[id='buy-modal-desktop-button']");
phone.addEventListener('input', function() {
  validate();
});

name4.addEventListener('input', function() {
 validate();
});

function validate(){
button.disabled = !phone.value || !name4.value;
}
