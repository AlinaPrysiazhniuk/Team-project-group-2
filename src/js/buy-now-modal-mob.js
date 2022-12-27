// скрипт для buy-now для версії десктоп та планшет
(() => {
    const refs = {
      openModalBtn: document.querySelector("[id='now-modal-open']"),
      closeModalBtn: document.querySelector("[id='now-modal-close']"),
      modal: document.querySelector("[id='now-modal']"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();


  
