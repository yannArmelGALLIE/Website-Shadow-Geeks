const activePage = window.location.pathname;
const navLinks1 = document.querySelectorAll('header a');
const btn_shop = document.querySelector('.btn_shop')

navLinks1.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
});



// Custom Scroll bar 
window.onscroll = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector('#scroll-bar').style.width= scrolled + '%';
};

console.log(document.querySelector('#scroll-bar'))
