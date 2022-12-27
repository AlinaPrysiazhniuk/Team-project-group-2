// скрипт для ingredients - ice cream
(() => {
  const refs = {
    openModalBtn: document.querySelector("[id='ice-modal-open']"),
    closeModalBtn: document.querySelector("[id='ice-modal-close']"),
    modal: document.querySelector("[id='ice-modal']"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
