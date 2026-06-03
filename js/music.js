
/* ======================================
   MUSIC.JS
   Mariana & Pablo Wedding Invitation
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const audio =
        document.getElementById("bg-music");

    const musicButton =
        document.getElementById("music-toggle");

    if(!audio || !musicButton) return;

    /* ==========================
       CONFIG
    ========================== */

    const DEFAULT_VOLUME = 0.45;

    audio.volume = DEFAULT_VOLUME;

    /* ==========================
       RESTORE STATE
    ========================== */

    const musicState =
        localStorage.getItem(
            "music_enabled"
        );

    if(musicState === "playing"){

        musicButton.classList.add(
            "playing"
        );

    }

    /* ==========================
       PLAY
    ========================== */

    async function playMusic(){

        try{

            await audio.play();

            musicButton.classList.add(
                "playing"
            );

            musicButton.innerHTML = "🎵";

            localStorage.setItem(
                "music_enabled",
                "playing"
            );

            fadeIn();

        }
        catch(error){

            console.log(
                "No fue posible iniciar audio:",
                error
            );

        }

    }

    /* ==========================
       PAUSE
    ========================== */

    function pauseMusic(){

        fadeOut(() => {

            audio.pause();

        });

        musicButton.classList.remove(
            "playing"
        );

        musicButton.innerHTML = "🔇";

        localStorage.setItem(
            "music_enabled",
            "paused"
        );

    }

    /* ==========================
       TOGGLE
    ========================== */

    function toggleMusic(){

        if(audio.paused){

            playMusic();

        }else{

            pauseMusic();

        }

    }

    /* ==========================
       BUTTON CLICK
    ========================== */

    musicButton.addEventListener(
        "click",
        toggleMusic
    );

    /* ==========================
       FADE IN
    ========================== */

    function fadeIn(){

        let volume = 0;

        audio.volume = volume;

        const fadeInterval =
            setInterval(()=>{

                if(volume < DEFAULT_VOLUME){

                    volume += 0.02;

                    audio.volume =
                        Math.min(
                            volume,
                            DEFAULT_VOLUME
                        );

                }else{

                    clearInterval(
                        fadeInterval
                    );

                }

            },100);

    }

    /* ==========================
       FADE OUT
    ========================== */

    function fadeOut(callback){

        let volume =
            audio.volume;

        const fadeInterval =
            setInterval(()=>{

                if(volume > 0.02){

                    volume -= 0.02;

                    audio.volume = volume;

                }else{

                    clearInterval(
                        fadeInterval
                    );

                    audio.volume =
                        DEFAULT_VOLUME;

                    if(callback){

                        callback();

                    }

                }

            },80);

    }

    /* ==========================
       AUTO RESUME
    ========================== */

    window.addEventListener(
        "focus",
        ()=>{

            const state =
                localStorage.getItem(
                    "music_enabled"
                );

            if(
                state === "playing" &&
                audio.paused
            ){

                playMusic();

            }

        }
    );

    /* ==========================
       PAGE VISIBILITY
    ========================== */

    document.addEventListener(
        "visibilitychange",
        ()=>{

            if(
                document.hidden
            ){

                return;

            }

            const state =
                localStorage.getItem(
                    "music_enabled"
                );

            if(
                state === "playing" &&
                audio.paused
            ){

                playMusic();

            }

        }
    );

    /* ==========================
       AUDIO EVENTS
    ========================== */

    audio.addEventListener(
        "play",
        ()=>{

            musicButton.classList.add(
                "playing"
            );

            musicButton.innerHTML = "🎵";

        }
    );

    audio.addEventListener(
        "pause",
        ()=>{

            musicButton.classList.remove(
                "playing"
            );

            musicButton.innerHTML = "🔇";

        }
    );

});

/* ======================================
   GLOBAL HELPERS
====================================== */

function startWeddingMusic(){

    const audio =
        document.getElementById(
            "bg-music"
        );

    if(audio){

        audio.play();

    }

}

function stopWeddingMusic(){

    const audio =
        document.getElementById(
            "bg-music"
        );

    if(audio){

        audio.pause();

    }

}

/* ======================================
   PRELOAD AUDIO
====================================== */

window.addEventListener(
    "load",
    ()=>{

        const audio =
            document.getElementById(
                "bg-music"
            );

        if(audio){

            audio.load();

        }

    }
);
```
