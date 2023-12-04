const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});
document.getElementById('downloadCvBtn').addEventListener('click', function() {
    window.open('media/brian.docx', '_blank');
});

