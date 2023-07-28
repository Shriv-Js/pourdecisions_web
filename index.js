// Header footer script
$(function () {
    $("#header").load("Header.html");
    $("#footer").load("Footer.html");
});

// text animation script
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var animatedElements = document.querySelectorAll(".animated-text");
        for (var i = 0; i < animatedElements.length; i++) {
            var element = animatedElements[i];
            if (isElementInViewport(element)) {
                element.classList.add("fade-in");
            }
        }
    });

    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
