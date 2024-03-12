let slideIndex = 0;

showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let headings = document.getElementsByClassName("header-content");

    // Hide all slides and headings
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Display the heading of the current slide
    headings[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
