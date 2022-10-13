document.querySelector('.top_banner button').addEventListener('click', function () {
    document.querySelector('.top_banner').style.display = 'none'
})
document.querySelector('.mopen').addEventListener('click', function () {
    this.classList.toggle('on');
    document.querySelector('nav').classList.toggle('on');
});