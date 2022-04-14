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