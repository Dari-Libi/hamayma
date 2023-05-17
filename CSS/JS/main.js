document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
        e.preventDefault();

        const element = document.querySelector(e.target.getAttribute('href'));
        const offset = 68;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        });
    });
});






let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}