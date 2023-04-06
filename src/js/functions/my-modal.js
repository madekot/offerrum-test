(function(){
  const btnModalOpen = document?.querySelector('[data-modal-open]');
  const btnModalClose = document?.querySelector('[data-modal-close]');
  const modal = document?.querySelector('[data-modal]');

  // const close = document?.querySelector('[data-burger-close]');
  // const menu = document?.querySelector('[data-burger-menu]');
  //
  btnModalOpen?.addEventListener('click', () => {
    modal.classList.remove('is-not-active')
  })

  btnModalClose?.addEventListener('click', () => {
    modal.classList.add('is-not-active')
  })
})();
