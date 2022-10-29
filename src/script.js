const navigationMenu = document.querySelector('.navigation__menu');
const sidebarClose = document.querySelector('.sidebar__close');
const sidebarBackground = document.querySelector('.sidebar--background');
const sidebar = document.querySelector('.sidebar');

navigationMenu.addEventListener('click', function () {
  sidebarBackground.classList.add('active');
  sidebar.classList.add('active');
});

sidebarClose.addEventListener('click', function () {
  if (sidebar.classList.contains('active')) {
    sidebarBackground.classList.remove('active');
    sidebar.classList.remove('active');
  }
});

window.addEventListener('resize', function () {
  if (sidebarBackground.offsetWidth > '1023') {
    sidebarBackground.classList.remove('active');
    sidebar.classList.remove('active');
  }
});
