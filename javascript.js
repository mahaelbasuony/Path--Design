function showManue() {

    document.getElementById("nav-primary_nav").style.display = 'block';

    document.getElementById("nav-primary_nav").classList.add('showMenu');
}
document.addEventListener(onmouseup = () => {
    document.getElementById("nav-primary_nav").style.display = 'none';

    document.getElementById("nav-primary_nav").classList.remove('showMenue');
})