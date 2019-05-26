let scrollInProgress = false;
let sections = [];
let activeSection = 0;

const links = [...document.getElementsByClassName('link-tag')];

links.forEach(function (link) {
  link.addEventListener('click', scrollToSection, false);
});

document.addEventListener('wheel', handleScroll, false);

let tabletAndLess = window.matchMedia("(max-width: 1050px)");
let isMobile = tabletAndLess.matches;
if (isMobile) {
  document.removeEventListener('wheel', handleScroll)
}

function scrollToSection(e) {
  e.preventDefault();
  sections = document.getElementsByClassName("screen");
  activeSection = e.target.dataset.id;
  moveSection(activeSection);
}

function handleScroll(e) {
  if (!scrollInProgress) {
    scrollInProgress = true;
    sections = document.getElementsByClassName("screen");

    if (e.deltaY > 0) {
      moveDown();
    } else {
      moveUp();
    }
    setTimeout(() => {
      scrollInProgress = false
    }, 1000);
  }
}

function moveDown() {
  if (activeSection < (sections.length - 1)) {
    activeSection++;
    moveSection(activeSection);
  }
}

function moveUp() {
  if (activeSection !== 0) {
    activeSection--;
    moveSection(activeSection);
  }
}

function moveSection(sectionsIndex) {
  let position = sections[sectionsIndex].offsetTop;
  document.getElementById("sections-holder").style["transform"] = "translate3d(0, -" + position + "px, 0)";
}
