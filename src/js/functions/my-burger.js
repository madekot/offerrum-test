(function(){
  const burger = document?.querySelector('[data-burger-open]');
  const close = document?.querySelector('[data-burger-close]');
  const menu = document?.querySelector('[data-burger-menu]');

  burger?.addEventListener('click', () => {
    menu.classList.add('is-active')
  })

  close?.addEventListener('click', () => {
    menu.classList.remove('is-active')
  })
})();
