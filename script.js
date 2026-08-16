// ======================================
// LOADING SCREEN
// ======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }

    }, 2100);

});



// ======================================
// MOBILE MENU
// ======================================

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");


if (menuBtn && nav) {

    menuBtn.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "active"
            );


            if (
                nav.classList.contains(
                    "active"
                )
            ) {

                menuBtn.textContent =
                    "✕";

            } else {

                menuBtn.textContent =
                    "☰";

            }

        }
    );


    document
        .querySelectorAll("nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "active"
                    );

                    menuBtn.textContent =
                        "☰";

                }
            );

        });

}



// ======================================
// DARK / LIGHT THEME
// ======================================

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            document.body
                .classList
                .toggle("light");


            if (
                document.body
                    .classList
                    .contains("light")
            ) {

                themeBtn.textContent =
                    "☀️";

            } else {

                themeBtn.textContent =
                    "🌙";

            }

        }
    );

}



// ======================================
// MUSIC
// ======================================

const music =
    document.getElementById(
        "music"
    );

const musicBtn =
    document.getElementById(
        "musicBtn"
    );

let musicPlaying = false;


if (music && musicBtn) {

    musicBtn.addEventListener(
        "click",
        async () => {

            if (!musicPlaying) {

                try {

                    await music.play();

                    musicPlaying = true;

                    musicBtn.textContent =
                        "🔊";

                } catch (error) {

                    alert(
                        "Додай файл music.mp3 у ту саму папку, де index.html."
                    );

                }

            } else {

                music.pause();

                musicPlaying = false;

                musicBtn.textContent =
                    "🎵";

            }

        }
    );

}



// ======================================
// SCROLL REVEAL
// ======================================

const reveals =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("active");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


reveals.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



// ======================================
// COUNTERS
// ======================================

const counters =
    document.querySelectorAll(
        "[data-target]"
    );

const stats =
    document.querySelector(
        ".stats"
    );

let countersStarted =
    false;


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting ||
                        countersStarted
                    ) {
                        return;
                    }


                    countersStarted =
                        true;


                    counters.forEach(
                        counter => {

                            const target =
                                Number(
                                    counter
                                        .dataset
                                        .target
                                );


                            let current =
                                0;


                            const increment =
                                Math.max(
                                    target / 60,
                                    0.2
                                );


                            const timer =
                                setInterval(
                                    () => {

                                        current +=
                                            increment;


                                        if (
                                            current >=
                                            target
                                        ) {

                                            current =
                                                target;

                                            clearInterval(
                                                timer
                                            );

                                        }


                                        counter
                                            .textContent =
                                            Math.floor(
                                                current
                                            );

                                    },

                                    20
                                );

                        }
                    );

                }
            );

        },

        {
            threshold: 0.4
        }

    );


if (stats) {

    counterObserver.observe(
        stats
    );

}



// ======================================
// 3D SYSTEM CARD
// ======================================

const systemCard =
    document.getElementById(
        "systemCard"
    );


if (systemCard) {

    systemCard.addEventListener(
        "mousemove",
        event => {

            const rect =
                systemCard
                    .getBoundingClientRect();


            const mouseX =
                event.clientX -
                rect.left;


            const mouseY =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                (
                    (
                        mouseX -
                        centerX
                    ) /
                    centerX
                ) * 7;


            const rotateX =
                (
                    (
                        mouseY -
                        centerY
                    ) /
                    centerY
                ) * -5;


            systemCard
                .style
                .transform =
                `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.02)
                `;

        }
    );


    systemCard.addEventListener(
        "mouseleave",
        () => {

            systemCard
                .style
                .transform =
                `
                    perspective(900px)
                    rotateX(0deg)
                    rotateY(0deg)
                    scale(1)
                `;

        }
    );

}



// ======================================
// CUSTOM CURSOR
// ======================================

const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );

const cursorCircle =
    document.querySelector(
        ".cursor-circle"
    );


if (
    cursorDot &&
    cursorCircle
) {

    document.addEventListener(
        "mousemove",
        event => {

            cursorDot.style.left =
                event.clientX +
                "px";


            cursorDot.style.top =
                event.clientY +
                "px";


            cursorCircle.animate(

                {
                    left:
                        event.clientX +
                        "px",

                    top:
                        event.clientY +
                        "px"
                },

                {
                    duration: 350,

                    fill:
                        "forwards"
                }

            );

        }
    );

}



// ======================================
// STAR BACKGROUND
// ======================================

const canvas =
    document.getElementById(
        "stars"
    );


let ctx = null;

let stars = [];


if (canvas) {

    ctx =
        canvas.getContext(
            "2d"
        );

}


function resizeCanvas() {

    if (!canvas) {
        return;
    }


    canvas.width =
        window.innerWidth;


    canvas.height =
        window.innerHeight;


    createStars();

}



function createStars() {

    if (!canvas) {
        return;
    }


    stars = [];


    const amount =
        Math.floor(

            canvas.width *
            canvas.height /
            7500

        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        stars.push({

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height,

            size:
                Math.random() *
                1.8 +
                0.2,

            speed:
                Math.random() *
                0.25 +
                0.04,

            alpha:
                Math.random() *
                0.7 +
                0.3,

            twinkle:
                Math.random() *
                0.02

        });

    }

}



function animateStars() {

    if (
        !canvas ||
        !ctx
    ) {

        return;

    }


    ctx.clearRect(

        0,
        0,

        canvas.width,
        canvas.height

    );


    stars.forEach(
        star => {

            star.alpha +=
                star.twinkle;


            if (
                star.alpha >= 1 ||
                star.alpha <= 0.25
            ) {

                star.twinkle *=
                    -1;

            }


            ctx.beginPath();


            ctx.arc(

                star.x,
                star.y,

                star.size,

                0,

                Math.PI * 2

            );


            ctx.fillStyle =
                `rgba(
                    255,
                    255,
                    255,
                    ${star.alpha}
                )`;


            ctx.fill();


            star.y +=
                star.speed;


            if (
                star.y >
                canvas.height
            ) {

                star.y = 0;

                star.x =
                    Math.random() *
                    canvas.width;

            }

        }
    );


    requestAnimationFrame(
        animateStars
    );

}


window.addEventListener(
    "resize",
    resizeCanvas
);


resizeCanvas();

animateStars();



// ======================================
// LAUNCH SYSTEM
// ======================================

const launchTop =
    document.getElementById(
        "launchTop"
    );

const launchBtn =
    document.getElementById(
        "launchBtn"
    );

const launchMessage =
    document.getElementById(
        "launchMessage"
    );


if (launchTop) {

    launchTop.addEventListener(
        "click",
        launchSystem
    );

}


if (launchBtn) {

    launchBtn.addEventListener(
        "click",
        launchSystem
    );

}



function launchSystem() {

    if (launchMessage) {

        launchMessage
            .classList
            .add("show");

    }


    if (launchBtn) {

        launchBtn.textContent =
            "✓ SYSTEM ONLINE";

    }


    createParticles();


    const launchBox =
        document.querySelector(
            ".launch-box"
        );


    if (launchBox) {

        launchBox.scrollIntoView({

            behavior:
                "smooth",

            block:
                "center"

        });

    }

}



// ======================================
// PARTICLE EFFECT
// ======================================

function createParticles() {

    const colors = [

        "#795cff",

        "#00dcff",

        "#ff4fc8",

        "#ffffff"

    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const particle =
            document
                .createElement(
                    "div"
                );


        particle.style
            .position =
            "fixed";


        particle.style
            .left =
            "50%";


        particle.style
            .top =
            "50%";


        const size =
            Math.random() *
            7 +
            3;


        particle.style.width =
            size +
            "px";


        particle.style.height =
            size +
            "px";


        particle.style
            .borderRadius =
            "50%";


        particle.style
            .pointerEvents =
            "none";


        particle.style
            .zIndex =
            "9999";


        particle.style
            .boxShadow =
            "0 0 15px currentColor";


        particle.style
            .background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        document.body
            .appendChild(
                particle
            );


        const x =
            (
                Math.random() -
                0.5
            ) * 700;


        const y =
            (
                Math.random() -
                0.5
            ) * 700;


        particle.animate(

            [

                {

                    transform:
                        "translate(0, 0) scale(1)",

                    opacity:
                        1

                },

                {

                    transform:
                        `translate(${x}px, ${y}px) scale(0)`,

                    opacity:
                        0

                }

            ],

            {

                duration:
                    Math.random() *
                    900 +
                    900,

                easing:
                    "ease-out"

            }

        );


        setTimeout(

            () => {

                particle.remove();

            },

            2000

        );

    }

}



// ======================================
// HEADER SCROLL EFFECT
// ======================================

const header =
    document.querySelector(
        ".header"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!header) {
            return;
        }


        if (
            window.scrollY >
            50
        ) {

            header.style
                .boxShadow =
                `
                    0 20px 60px
                    rgba(0,0,0,0.45)
                `;

        } else {

            header.style
                .boxShadow =
                `
                    0 20px 50px
                    rgba(0,0,0,0.25)
                `;

        }

    }
);



// ======================================
// PROJECT CARD MOUSE EFFECT
// ======================================

document
    .querySelectorAll(
        ".project"
    )
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card
                        .getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                card.style
                    .background =
                    `
                        radial-gradient(
                            circle at
                            ${x}px
                            ${y}px,
                            rgba(120,90,255,0.14),
                            var(--panel)
                        )
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style
                    .background =
                    "var(--panel)";

            }
        );

    });