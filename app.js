
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { 
  getAuth, 
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut ,
 } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyC16ZKkxK7W3O1mRfiHMCOJc0c7uMZj8K8",
  authDomain: "thekeydaar-7db56.firebaseapp.com",
  projectId: "thekeydaar-7db56",
  storageBucket: "thekeydaar-7db56.appspot.com",
  messagingSenderId: "860250720289",
  appId: "1:860250720289:web:9b13d846c6f0f9c7647b60",
  measurementId: "G-NXFW2WCSZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


// const Username = document.getElementById('Username');
const signup_Email = document.getElementById('signup_email');
const signup_Password = document.getElementById('signup_password');
const signup_btn = document.getElementById('signup_btn');


const email_user = document.getElementById('email_user');
const pasword_user = document.getElementById('password_user');
const signin_btn = document.getElementById('signin_btn');

const user_email = document.getElementById('user_email');
const logout_btn = document.getElementById('logout_btn');



const auth_container = document.getElementById('auth_container')
const user_container = document.getElementById('user_container')
const signin_container = document.getElementById('signin_container')


signup_btn.addEventListener('click', createUserAccount);
signin_btn.addEventListener('click', signIn );
logout_btn.addEventListener('click' , logout )

// console.log(auth);
// console.log(app);
// console.log(analytics);


onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log('user login hy')
    
    const uid = user.uid;
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email;
    // ...
  } else {
    console.log('user login nhi hy')

    auth_container.style.display = "block";
    user_container.style.display = "none";
    // User is signed out
    // ...
  }
});


function createUserAccount(){
  // console.log(Username.value)
  // console.log(signup_email.value);
  // console.log(signup_password.value)

  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

}


function signIn() {
  // console.log(email_user.value);
  // console.log(pasword_user.value);

  signInWithEmailAndPassword(auth, email_user.value, pasword_user.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

function logout () {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
