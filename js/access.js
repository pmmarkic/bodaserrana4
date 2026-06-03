
/* ======================================
   ACCESS.JS
   Mariana & Pablo Wedding Invitation
====================================== */

const PASSWORD = "fernetazo";

document.addEventListener("DOMContentLoaded", () => {

    const loginScreen =
        document.getElementById("login-screen");

    const passwordInput =
        document.getElementById("password");

    const enterButton =
        document.getElementById("enter-btn");

    const music =
        document.getElementById("bg-music");

    /* ==========================
       SESSION CHECK
    ========================== */

    const accessGranted =
        localStorage.getItem("wedding_access");

    if(accessGranted === "true"){

        unlockInvitation(false);

    }

    /* ==========================
       BUTTON CLICK
    ========================== */

    if(enterButton){

        enterButton.addEventListener(
            "click",
            validatePassword
        );

    }

    /* ==========================
       ENTER KEY
    ========================== */

    if(passwordInput){

        passwordInput.addEventListener(
            "keypress",
            (e)=>{

                if(e.key === "Enter"){

                    validatePassword();

                }

            }
        );

    }

    /* ==========================
       PASSWORD VALIDATION
    ========================== */

    function validatePassword(){

        const enteredPassword =
            passwordInput.value.trim();

        if(
            enteredPassword.toLowerCase()
            === PASSWORD
        ){

            localStorage.setItem(
                "wedding_access",
                "true"
            );

            unlockInvitation(true);

        }else{

            showError();

        }

    }

    /* ==========================
       UNLOCK
    ========================== */

    function unlockInvitation(playMusic = true){

        if(!loginScreen) return;

        loginScreen.style.transition =
            "all .8s ease";

        loginScreen.style.opacity = "0";

        setTimeout(()=>{

            loginScreen.style.display =
                "none";

        },800);

        document.body.style.overflowY =
            "auto";

        if(playMusic){

            startMusic();

        }

    }

    /* ==========================
       START MUSIC
    ========================== */

    function startMusic(){

        if(!music) return;

        const playPromise =
            music.play();

        if(playPromise !== undefined){

            playPromise
            .then(()=>{

                console.log(
                    "Música iniciada"
                );

                const musicBtn =
                    document.getElementById(
                        "music-toggle"
                    );

                if(musicBtn){

                    musicBtn.classList.add(
                        "playing"
                    );

                }

            })
            .catch(err=>{

                console.log(
                    "Autoplay bloqueado por navegador",
                    err
                );

            });

        }

    }

    /* ==========================
       ERROR
    ========================== */

    function showError(){

        const card =
            document.querySelector(
                ".login-card"
            );

        if(card){

            card.classList.remove(
                "shake"
            );

            void card.offsetWidth;

            card.classList.add(
                "shake"
            );

        }

        passwordInput.value = "";

        passwordInput.placeholder =
            "Contraseña incorrecta";

    }

});

/* ==========================
   GLOBAL FUNCTION
========================== */

function resetInvitationAccess(){

    localStorage.removeItem(
        "wedding_access"
    );

    location.reload();

}

/* ==========================
   DEV SHORTCUT
========================== */

/*
Abrir consola y ejecutar:

resetInvitationAccess();

para volver a mostrar login.
*/

/* ==========================
   PRELOAD EXPERIENCE
========================== */

window.addEventListener("load",()=>{

    document.body.classList.add(
        "loaded"
    );

});

/* ==========================
   EXTRA SECURITY
========================== */

document.addEventListener(
    "contextmenu",
    (e)=>{

        e.preventDefault();

    }
);

/* ==========================
   PREVENT INSPECT SHORTCUTS
   (solo estética, no seguridad real)
========================== */

document.addEventListener(
    "keydown",
    (e)=>{

        if(e.key === "F12"){

            e.preventDefault();

        }

        if(
            e.ctrlKey &&
            e.shiftKey &&
            (
                e.key === "I" ||
                e.key === "J" ||
                e.key === "C"
            )
        ){

            e.preventDefault();

        }

    }
);
