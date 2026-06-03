
/* ======================================
   GALLERY.JS
   Mariana & Pablo Wedding Invitation
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LIGHTBOX INIT
    ========================== */

    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        zoomable: true,
        autoplayVideos: false
    });

    /* ==========================
       MASONRY INIT
    ========================== */

    const grid = document.querySelector(".gallery-grid");

    if(!grid) return;

    let msnry;

    function initMasonry(){

        msnry = new Masonry(grid, {
            itemSelector: "a",
            columnWidth: "a",
            percentPosition: true,
            gutter: 20
        });

    }

    /* ==========================
       IMAGES LOAD CONTROL
    ========================== */

    const images = grid.querySelectorAll("img");

    let loadedCount = 0;

    images.forEach((img) => {

        /* Lazy loading fallback */
        img.loading = "lazy";

        /* On load -> layout fix */
        img.addEventListener("load", () => {

            loadedCount++;

            if(loadedCount === images.length){

                initMasonry();

            }else if(msnry){

                msnry.layout();

            }

        });

        /* If cached */
        if(img.complete){

            loadedCount++;

        }

    });

    /* fallback init */
    setTimeout(() => {

        if(!msnry){

            initMasonry();

        }

    }, 1200);

    /* ==========================
       RESPONSIVE RE-LAYOUT
    ========================== */

    window.addEventListener("resize", () => {

        if(msnry){

            msnry.layout();

        }

    });

    /* ==========================
       TOUCH OPTIMIZATION
    ========================== */

    grid.querySelectorAll("a").forEach((item) => {

        item.addEventListener("touchstart", () => {

            item.classList.add("touch-active");

        });

        item.addEventListener("touchend", () => {

            setTimeout(() => {

                item.classList.remove("touch-active");

            }, 300);

        });

    });

    /* ==========================
       PRELOAD FIRST IMAGES
    ========================== */

    function preloadImages(){

        const firstImages =
            Array.from(images).slice(0, 3);

        firstImages.forEach((img) => {

            const src = img.getAttribute("src");

            if(src){

                const pre = new Image();

                pre.src = src;

            }

        });

    }

    preloadImages();

});

/* ======================================
   OPTIONAL: MANUAL REFRESH
====================================== */

function refreshGallery(){

    const grid =
        document.querySelector(
            ".gallery-grid"
        );

    if(window.msnry && grid){

        window.msnry.layout();

    }

}
```
