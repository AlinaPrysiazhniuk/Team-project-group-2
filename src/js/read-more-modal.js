// скрипт для read-more
(() => {
    const refs = {
      openModalBtn: document.querySelector("[id='read-modal-open']"),
      closeModalBtn: document.querySelector("[id='read-modal-close']"),
      modal: document.querySelector("[id='read-modal']"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

