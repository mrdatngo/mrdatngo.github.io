const menus = document.querySelectorAll('[menu-name^=main-menu]');
menus.forEach((menu) => {
  console.log('menu', menu);
  menu.addEventListener('click', (event) => {
    event.preventDefault();
    const subMenu = document.querySelector(
      `[sub-menu-name=${menu.getAttribute('menu-name')}]`
    );
    if (subMenu.style.display === 'block') {
      subMenu.style.display = 'none';
    } else {
      subMenu.style.display = 'block';
    }
  });
});
