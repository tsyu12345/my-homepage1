function showElement() {
    let element = document.getElementsByClassName('js-animation');
    if(!element) {
        return;
    }

    let timing = window.innerHeight > 768 ? 200 : 40;
    let scrollY = window.pageYOffset;
    let window_height = window.innerHeight;

    for(let i = 0; i < element.length; i++) {
        let el_client_rect = element[i].getBoundingClientRect();
        let elementY = scrollY + el_client_rect.top;
        if(scrollY + window_height - timing > elementY) {
            element[i].classList.add('is-show');
        }
    }
}

showElement();
window.addEventListener("scroll", showElement);