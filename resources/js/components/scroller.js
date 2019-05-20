let scrollinProgress = false;
let sections = [];
let sectionNumbers = [];
let activeSection = 0;
let currentY = 0;

document.addEventListener('wheel', handleScroll);

document.addEventListener("touchstart", function (e) {
  currentY = e.touches[0].clientY;
});

document.addEventListener("touchend", function (e) {
  if (currentY > (e.changedTouches[0].clientY + 50)) {
    moveDown();
  } else if (currentY < (e.changedTouches[0].clientY - 50)) {
    moveUp();
  }
});

function handleScroll(e) {
  console.log('test')
  if (!scrollinProgress) {
    // sections = document.getElementsByTagName("section");
    // sectionNumbers = document.getElementsByTagName("li");
    scrollinProgress = true;
    sections = document.getElementsByClassName("screen");
    sectionNumbers = document.getElementsByTagName("li");


    if (e.deltaY > 0) {
      moveDown();
    } else {
      moveUp();
    }
    setTimeout(() => {
      scrollinProgress = false
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


//   for (var i = 0; i < sectionNumbers.length; i++) {
//   sectionNumbers[i].addEventListener('click', function() {
//     activeSection = this.dataset.section;
//     moveSection(activeSection);
//   });
// }