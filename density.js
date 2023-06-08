function handleScroll() {
    var slider = document.getElementById("text-slider");
    var heading = document.getElementById("sliding-text");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    if (slider.offsetTop <= scrollTop) {
        heading.classList.add("appear");
    }
}

window.addEventListener("scroll", handleScroll);


// Add an event listener for scroll events
window.addEventListener('scroll', function () {
    const subDashboards = document.getElementsByClassName('sub-dashboard');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // Find the next div with class sub-dashboard
    for (let i = 0; i < subDashboards.length; i++) {
        if (scrollTop < subDashboards[i].offsetTop + 20) {
            heading.classList.add("appear");
            window.scrollTo({ top: subDashboards[i].offsetTop - 80, behavior: 'smooth' });
            heading.classList.add("appear");
            break;
        }
    }
});