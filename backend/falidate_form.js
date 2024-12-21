const reponse = await fetch("../backend/user.json");
const users = await reponse.json();

const user = users;

let formSignIn = document.getElementById('form-sign-in');
const signInSection = document.querySelector('.sign-in');
let submitSignIn = document.getElementById('btn-sign-in');
let sectionInformations = document.querySelector(".informations");
const fail = document.getElementById('fail');

sectionInformations.classList.add("disabled");

let spanName = document.getElementById('span-name');
let spanSurname = document.getElementById('span-surname');
let spanDate = document.getElementById('span-date');
let spanGender = document.getElementById('span-gender');
let spanRegion = document.getElementById('span-region');
let spanEmail = document.getElementById('span-email');
let spanUsername = document.getElementById('span-username');

let inputUsername = document.getElementById('username');
let inputPassword = document.getElementById('password');


submitSignIn.addEventListener("click" , () => {
    formSignIn.onsubmit();
})


 formSignIn.addEventListener("submit" , (e) => {
     e.preventDefault();
     for(let i = 0 ; i < user.length ; i++) {
    if (inputUsername.value === "" || inputPassword.value === "") {
        fail.innerHTML = "Veuillez remplir tous les champs";
        fail.style.color = "yellow";
    } else if (inputUsername.value === user[i].username & inputPassword.value === user[i].password) {
        signInSection.classList.add("disabled");
        sectionInformations.classList.remove("disabled");
        spanName.innerText = user[i].name;
        spanSurname.innerText = user[i].surname;
        spanDate.innerText = user[i].birthday;
        spanGender.innerText = user[i].gender;
        spanRegion.innerText = user[i].region;
        spanEmail.innerText = user[i].email;
        spanUsername.innerText = user[i].username;
    }else {
        fail.innerText = "Vérifiez votre nom d'utlisateur et votre mot de passe";
        fail.style.color = "red";
    }
    }}
 )






