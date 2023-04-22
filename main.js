const sectionOne = document.getElementById('title');
const sectionTwo = document.getElementById('title-author');
const sectionThree = document.getElementById('description');

document.onscroll = function scroll() {
    // sectionOne.scrollIntoView({behavior: "smooth"});
    sectionTwo.scrollIntoView({behavior: "smooth"});
    sectionThree.scrollIntoView({behavior: "smooth"});
 }