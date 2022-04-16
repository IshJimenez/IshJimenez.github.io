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

// Carousel 2

const track2 = document.querySelector('.carouselTrack2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.carouselR2');
const preButton2 = document.querySelector('.carouselL2');
const dotsNav2 = document.querySelector('.carouselNav2')
const dots2 = Array.from(dotsNav2.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;

const setSlidePosition2 = (slide2, index) => {
    slide2.style.left = slideWidth2 * index + 'px';
}

slides2.forEach(setSlidePosition2);

const move2Slide2 = (track2, currentSlide2, targetSlide2) => {
    track2.style.transform = 'translateX(-' + targetSlide2.style.left + ')';
    currentSlide2.classList.remove('current_Slide2');
    targetSlide2.classList.add('current_Slide2')
}

const updateDots2 = (currentDot2, targetDot2) => {
    currentDot2.classList.remove('current_Slide2');
    targetDot2.classList.add('current_Slide2');
}

const hideShowArrows2 = (slides2, preButton2, nextButton2, targetIndex2) => {
    if (targetIndex2 === 0) {
        preButton2.classList.add('is-hidden2')
        nextButton2.classList.remove('is-hidden2')
    } else if (targetIndex2 === slides2.length -1) {
        preButton2.classList.remove('is-hidden2')
        nextButton2.classList.add('is-hidden2')
    } else {
        preButton2.classList.remove('is-hidden2');
        nextButton2.classList.remove('is-hidden2')
    }
}

///////////////////////////////////////////////////////////////////
// Click left slides go left
preButton2.addEventListener('click', e => {
    const currentSlide2 = track2.querySelector('.current_Slide2');
    const preSlide2 = currentSlide2.previousElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current_Slide2')
    const preDot2 = currentDot2.previousElementSibling;
    const preIndex2 = slides2.findIndex(slide2 => slide2 === preSlide2)

    move2Slide2(track2, currentSlide2, preSlide2);  
    updateDots2(currentDot2, preDot2)  
    hideShowArrows2(slides2, preButton2, nextButton2, preIndex2); 
})


///////////////////////////////////////////////////////////////////
// Click right slides go right
nextButton2.addEventListener('click', e => {
    const currentSlide2 = track2.querySelector('.current_Slide2');
    const nextSlide2 = currentSlide2.nextElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current_Slide2')
    const nextDot2 = currentDot2.nextElementSibling;
    const nextIndex2 = slides2.findIndex(slide2 => slide2 === nextSlide2)

    move2Slide2(track2, currentSlide2, nextSlide2);  
    updateDots2(currentDot2, nextDot2) 
    hideShowArrows2(slides2, preButton2, nextButton2, nextIndex2); 
})

////////////////////////////////////////////////////////////////////
// Dot indicators change as you click

dotsNav2.addEventListener('click', e => {
    // What indicator is clicked
    const targetDot2 = e.target.closest('button');

    if (!targetDot2) return;
   
    const currentSlide2 = track2.querySelector('.current_Slide2');
    const currentDot2 = dotsNav2.querySelector('.current_Slide2');
    const targetIndex2 = dots2.findIndex(dot2 => dot2 === targetDot2)
    const targetSlide2 = slides2[targetIndex2];

    move2Slide2(track2, currentSlide2, targetSlide2); 
    updateDots2(currentDot2, targetDot2);
    hideShowArrows2(slides2, preButton2, nextButton2, targetIndex2);

})