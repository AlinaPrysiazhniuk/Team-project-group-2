// скрипт для ingredients - ice cream
(() => {
  const refs = {
    openModalBtn: document.querySelector("[id='icecoffe-modal-open']"),
    closeModalBtn: document.querySelector("[id='icecoffe-modal-close']"),
    modal: document.querySelector("[id='icecoffe-modal']"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
