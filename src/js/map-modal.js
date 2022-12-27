 // скрипт для map-modal
 (() => {
    const refs = {
      openModalBtn: document.querySelector("[id='map-modal-open']"),
      closeModalBtn: document.querySelector("[id='map-modal-close']"),
      modal: document.querySelector("[id='map-modal']"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
