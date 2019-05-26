const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const menu = document.getElementById('mobile-menu');
const sections = document.getElementsByClassName("screen");
const linksMobile = [...document.getElementsByClassName('link-tag-mobile')];

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);

linksMobile.forEach(function (link) {
  link.addEventListener('click', scrollToSectionMobile, false);
});

function scrollToSectionMobile(e) {
  e.preventDefault();
  closeMenu();
  sections[e.target.dataset.id].scrollIntoView({block: "start", behavior: "smooth"});
}

function openMenu() {
  menu.classList.add('open');
  openMenuButton.classList.remove('open');
  closeMenuButton.classList.add('open');
}

function closeMenu() {
  menu.classList.remove('open');
  closeMenuButton.classList.remove('open');
  openMenuButton.classList.add('open');
}