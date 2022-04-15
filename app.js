document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdownButton]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

let currentDropdown
if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
}

document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
})
})
function toggle(){
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');
    let popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

const track = document.querySelector('.carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carouselR');
const preButton = document.querySelector('.carouselL');
const dotsNav = document.querySelector('.carouselNav')
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth)

//////////////////////////////////////////////////////////////////
// Arrange slides one next to another

// slides[0].style.left = slideWidth * 0 + 'px'
// slides[1].style.left = slideWidth * 1 + 'px'

const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition);

const move2Slide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_Slide');
    targetSlide.classList.add('current_Slide')
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current_Slide');
    targetDot.classList.add('current_Slide');
}

const hideShowArrows = (slides, preButton, nextButton, targetIndex) => {
    if(targetIndex === 0) {
        preButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length -1) {
        preButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden')
    } else {
        preButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

///////////////////////////////////////////////////////////////////
// Click left slides go left
preButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_Slide');
    const preSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current_Slide');
    const preDot = currentDot.previousElementSibling;
    const preIndex = slides.findIndex(slide => slide === preSlide);

    move2Slide(track, currentSlide, preSlide);
    updateDots(currentDot, preDot)
    hideShowArrows(slides, preButton, nextButton, preIndex);
})

///////////////////////////////////////////////////////////////////
// Click right slides go right

nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current_Slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current_Slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    move2Slide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot)
    hideShowArrows(slides, preButton, nextButton, nextIndex);
})

////////////////////////////////////////////////////////////////////
// Dot indicators change as you click

dotsNav.addEventListener('click', e => {
    // What indicator is clicked
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current_Slide');
    const currentDot = dotsNav.querySelector('.current_Slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    move2Slide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot)
    hideShowArrows(slides, preButton, nextButton, targetIndex);
})