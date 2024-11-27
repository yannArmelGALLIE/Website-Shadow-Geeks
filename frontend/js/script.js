const activePage = window.location.pathname;
const navLinks1 = document.querySelectorAll('header a');



if(document.body.id === "services") {
const noMessageSent = document.querySelector('.no-message-sent') ;
const toEmail = document.querySelector('.to-email');
const toNumber = document.querySelector('.to-number');
    // Disable the elements of the show section

    noMessageSent.classList.add("disabled");

    toEmail.classList.add("disabled");

    toNumber.classList.add("disabled");

}

if(document.body.id === "user") {
    const signInSection = document.querySelector('.sign-in');
    const signUpSection = document.querySelector('.sign-up');
    const btn1 = document.querySelector(".btn-1");
    const btn2 = document.querySelector(".btn-2");

    signUpSection.classList.add("disabled");
    btn1.addEventListener("click" , (event) => {
        event.preventDefault();
        
        signInSection.classList.add("disabled");
        signUpSection.classList.remove("disabled");
    })
    btn2.addEventListener("click", (event) => {
        event.preventDefault();
        signInSection.classList.remove("disabled");
        signUpSection.classList.add("disabled");
    } )
    
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

