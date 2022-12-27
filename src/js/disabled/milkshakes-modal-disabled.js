// ingredients-modal
let phone = document.querySelector("[id='milkshakes-modal-tel']");
let name2 = document.querySelector("[id='milkshakes-modal-name']");
let button = document.querySelector("[id='milkshakes-modal-button']");
phone.addEventListener('input', function() {
  validate();
});

name2.addEventListener('input', function() {
 validate();
});

function validate(){
button.disabled = !phone.value || !name2.value;
}
