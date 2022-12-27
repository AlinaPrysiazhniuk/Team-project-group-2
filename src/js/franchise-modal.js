  // скрипт для franchise
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[id='franchise-modal-open']"),
      closeModalBtn: document.querySelector("[id='franchise-modal-close']"),
      modal: document.querySelector("[id='franchise-modal']"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();