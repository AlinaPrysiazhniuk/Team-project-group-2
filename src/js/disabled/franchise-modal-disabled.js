// franchise-modal
let phone = document.querySelector("[id='franchise-modal-tel']");
let user = document.querySelector("[id='franchise-modal-name']");
let button = document.querySelector("[id='franchise-modal-button']");
phone.addEventListener('input', function() {
  validate();
});

user.addEventListener('input', function() {
 validate();
});

function validate(){
button.disabled = !phone.value || !user.value;
}
