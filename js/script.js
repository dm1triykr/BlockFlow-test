const burgerBtn = document.querySelector('.icon-menu');
if(burgerBtn) {
    const menuBody = document.querySelector('.side-bar');
    burgerBtn.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        burgerBtn.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}