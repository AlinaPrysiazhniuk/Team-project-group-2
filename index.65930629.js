var phone=document.querySelector("[id='buy-modal-tel']"),user=document.querySelector("[id='buy-modal-name']"),button=document.querySelector("[id='buy-modal-button']");function validate(){button.disabled=!phone.value||!user.value}phone.addEventListener("input",(function(){validate()})),user.addEventListener("input",(function(){validate()}));
//# sourceMappingURL=index.65930629.js.map
