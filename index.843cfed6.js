var phone=document.querySelector("[id='icecream-modal-tel']"),name1=document.querySelector("[id='icecream-modal-name']"),button=document.querySelector("[id='icecream-modal-button']");function validate(){button.disabled=!phone.value||!name1.value}phone.addEventListener("input",(function(){validate()})),name1.addEventListener("input",(function(){validate()}));
//# sourceMappingURL=index.843cfed6.js.map