
/* ======================================
   PARTICLES.JS CONFIG
   Mariana & Pablo Wedding Invitation
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const container =
        document.getElementById("particles-js");

    if(!container || typeof particlesJS === "undefined"){
        return;
    }

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 45,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: "#c8ab83" /* gold soft */
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.35,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.6,
                    opacity_min: 0.1,
                    sync: false
                }
            },

            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 1.5,
                    size_min: 0.3,
                    sync: false
                }
            },

            line_linked: {
                enable: false
            },

            move: {

                enable: true,

                speed: 0.6,

                direction: "none",

                random: true,

                straight: false,

                out_mode: "out",

                bounce: false,

                attract: {
                    enable: false
                }

            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "repulse"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true

            },

            modes: {

                repulse: {
                    distance: 90,
                    duration: 0.4
                },

                push: {
                    particles_nb: 2
                }

            }

        },

        retina_detect: true

    });

});

/* ======================================
   OPTIONAL: SOFT GOLD AMBIENT MODE
====================================== */

function enableSoftMode(){

    if(window.pJSDom && window.pJSDom.length){

        const pJS =
            window.pJSDom[0].pJS;

        pJS.particles.color.value =
            "#e7d7c0";

        pJS.particles.opacity.value =
            0.2;

        pJS.particles.move.speed =
            0.4;

    }

}

/* ======================================
   LOW PERFORMANCE MODE (MOBILE)
====================================== */

function enableLowPowerParticles(){

    if(window.innerWidth < 480 && window.pJSDom){

        const pJS =
            window.pJSDom[0].pJS;

        pJS.particles.number.value = 20;

        pJS.particles.move.speed = 0.3;

        pJS.particles.size.value = 2;

    }

}

/* Auto optimize on load */

window.addEventListener("load", () => {

    enableLowPowerParticles();

});
```
