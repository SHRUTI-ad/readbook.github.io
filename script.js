// JavaScript for Scroll Up Button
document.addEventListener('DOMContentLoaded', function() {
    var scrollUpBtn = document.getElementById('scrollUpBtn');

    // Show button when scrolled down 100px
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollUpBtn.style.display = 'block';
        } else {
            scrollUpBtn.style.display = 'none';
        }
    };

    // Smooth scroll to top
    scrollUpBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
