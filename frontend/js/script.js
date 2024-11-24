const activePage = window.location.pathname;
const navLinks1 = document.querySelectorAll('header a');
const noMessageSent = document.querySelector('.no-message-sent') ;
const toEmail = document.querySelector('.to-email');
const toNumber = document.querySelector('.to-number');

if(document.body.id === "services") {
    // Disable the elements of the show section

    noMessageSent.classList.add("disabled");

    toEmail.classList.add("disabled");

    toNumber.classList.add("disabled");

}




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

