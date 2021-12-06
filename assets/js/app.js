/* STicky */
const header = document.querySelector('header');
const menu = document.querySelector('#menu_icon');
const navbar = document.querySelector('.nav_menu');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

// Dark Mode
const darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

firebase.initializeApp({
    apiKey: "AIzaSyAiPAh4nWhpeb_YC6V4KXWAo1BLG_vh4po",
  authDomain: "personal-website-2f4a2.firebaseapp.com",
  projectId: "personal-website-2f4a2"
});

var db = firebase.firestore();
db.collection("Users").add({
first: "Ada",
last: "Lovelace",
born: 1815
})
.then((docRef) => {
console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
console.error("Error adding document: ", error);
});