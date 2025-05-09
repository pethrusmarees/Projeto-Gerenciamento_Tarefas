import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyACVpQ0bW954cbNtBQdgc_qughpPEedP9Y",
    authDomain: "projetomontanari.firebaseapp.com",
    projectId: "projetomontanari",
    storageBucket: "projetomontanari.firebasestorage.app",
    messagingSenderId: "523298150837",
    appId: "1:523298150837:web:80fbbda3ab25f4d07721fc",
    measurementId: "G-WQV4VYR8F6"
  
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let botao = document.getElementById("botao");


  botao.addEventListener("click", () => {
        let emailValue = email.value;
        let senhaValue = senha.value;
        createUserWithEmailAndPassword(auth, emailValue, senhaValue)
        .then((userCredential) => {
            const user = userCredential.user
            alert("Usuário criado com sucesso! +" + user.email + user.senha);
            window.open("login.html", "_self")          
         })
         .catch((error) => {
         const errorMessage = error.message;
         alert("Erro ao criar usuário: " + errorMessage);
            console.error("Erro ao criar usuário:",errorMessage);
         });

})



