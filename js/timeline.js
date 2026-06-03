```javascript id="t7m4qp"
/* ======================================
   TIMELINE.JS
   Mariana & Pablo Wedding Invitation
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const items =
        document.querySelectorAll(".timeline-item");

    if(!items.length) return;

    /* ==========================
       INTERSECTION OBSERVER
    ========================== */

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if(entry.isIntersecting){

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    /* ==========================
       INIT ITEMS
    ========================== */

    items.forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform =
            "translateY(40px)";
        item.style.transition =
            "all .8s ease";

        item.style.transitionDelay =
            `${index * 0.15}s`;

        observer.observe(item);

    });

});

/* ======================================
   OPTIONAL: FORCE REVEAL
====================================== */

function revealTimeline(){

    document
        .querySelectorAll(".timeline-item")
        .forEach((item) => {

            item.classList.add("active");

            item.style.opacity = "1";
            item.style.transform =
                "translateY(0)";

        });

}
```
