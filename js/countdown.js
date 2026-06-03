```javascript id="qv6h5w"
/* ======================================
   COUNTDOWN.JS
   Mariana & Pablo Wedding Invitation
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       WEDDING DATE
    ========================== */

    const weddingDate = new Date(
        "2026-10-10T18:00:00"
    ).getTime();

    /* ==========================
       ELEMENTS
    ========================== */

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");

    /* ==========================
       FORMAT NUMBER
    ========================== */

    function format(number){

        return number
            .toString()
            .padStart(2, "0");

    }

    /* ==========================
       ANIMATION
    ========================== */

    function animateNumber(element){

        if(!element) return;

        element.style.transform =
            "scale(1.15)";

        element.style.transition =
            "transform .25s ease";

        setTimeout(()=>{

            element.style.transform =
                "scale(1)";

        },250);

    }

    /* ==========================
       UPDATE COUNTDOWN
    ========================== */

    function updateCountdown(){

        const now =
            new Date().getTime();

        const distance =
            weddingDate - now;

        /* ==========================
           EVENT DAY
        ========================== */

        if(distance <= 0){

            clearInterval(interval);

            if(daysElement)
                daysElement.textContent = "00";

            if(hoursElement)
                hoursElement.textContent = "00";

            if(minutesElement)
                minutesElement.textContent = "00";

            if(secondsElement)
                secondsElement.textContent = "00";

            const section =
                document.getElementById(
                    "countdown"
                );

            if(section){

                section.innerHTML = `
                    <h2>
                        ¡Llegó el gran día!
                    </h2>
                `;

            }

            return;

        }

        /* ==========================
           CALCULATIONS
        ========================== */

        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (
                    distance %
                    (1000 * 60)
                ) /
                1000
            );

        /* ==========================
           UPDATE DOM
        ========================== */

        if(daysElement){

            const newValue =
                format(days);

            if(
                daysElement.textContent
                !== newValue
            ){

                daysElement.textContent =
                    newValue;

                animateNumber(
                    daysElement
                );

            }

        }

        if(hoursElement){

            const newValue =
                format(hours);

            if(
                hoursElement.textContent
                !== newValue
            ){

                hoursElement.textContent =
                    newValue;

                animateNumber(
                    hoursElement
                );

            }

        }

        if(minutesElement){

            const newValue =
                format(minutes);

            if(
                minutesElement.textContent
                !== newValue
            ){

                minutesElement.textContent =
                    newValue;

                animateNumber(
                    minutesElement
                );

            }

        }

        if(secondsElement){

            const newValue =
                format(seconds);

            secondsElement.textContent =
                newValue;

            animateNumber(
                secondsElement
            );

        }

    }

    /* ==========================
       INITIAL LOAD
    ========================== */

    updateCountdown();

    /* ==========================
       INTERVAL
    ========================== */

    const interval =
        setInterval(
            updateCountdown,
            1000
        );

});

/* ======================================
   OPTIONAL HELPER
====================================== */

function getWeddingDate(){

    return "10/10/2026 18:00";

}
```
