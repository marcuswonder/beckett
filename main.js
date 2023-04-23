const titleDescriptionEl = document.getElementById('title-description');
const portraitEl = document.getElementById('portrait');
const projectDescriptionEl = document.getElementById('project-description');

titleDescriptionEl.onmouseover = function() {
    portraitEl.classList.add('slide-left');
    projectDescriptionEl.classList.add('slide-right-and-show');
}

titleDescriptionEl.onmouseout = function() {
    portraitEl.classList.remove('slide-left');
    projectDescriptionEl.classList.remove('slide-right-and-show');
}
