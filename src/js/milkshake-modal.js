// скрипт для ingredients - milkshake
(() => {
  const refs = {
    openModalBtn: document.querySelector("[id='milkshake-modal-open']"),
    closeModalBtn: document.querySelector("[id='milkshake-modal-close']"),
    modal: document.querySelector("[id='milkshake-modal']"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
