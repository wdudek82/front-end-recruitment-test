const button = document.querySelector('button');
const baconSection = document.getElementById('bacon-container');

/**
  Pressing the button will trigger
  cloning DOM node containing
  bacon image.
. */
function addMoarBacon() {
  const clonedBacon = baconSection.children[0].cloneNode();
  baconSection.append(clonedBacon);
}

button.addEventListener('click', addMoarBacon);
