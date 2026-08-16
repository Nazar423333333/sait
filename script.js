// ======================================
// NEON SPACE — FULL SCRIPT.JS
// ======================================


// ======================================
// ELEMENTS
// ======================================

const loader =
    document.getElementById("loader");

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");

const themeBtn =
    document.getElementById("themeBtn");

const languageSelect =
    document.getElementById("languageSelect");

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

const launchTop =
    document.getElementById("launchTop");

const launchBtn =
    document.getElementById("launchBtn");

const launchMessage =
    document.getElementById("launchMessage");

const systemCard =
    document.getElementById("systemCard");

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorCircle =
    document.querySelector(".cursor-circle");

const header =
    document.querySelector(".header");


// ======================================
// TRANSLATIONS
// ======================================

const translations = {

    // ==================================
    // UKRAINIAN
    // ==================================

    uk: {

        loading:
            "ЗАПУСК СИСТЕМИ...",

        home:
            "Головна",

        features:
            "Можливості",

        projects:
            "Проєкти",

        profile:
            "Профіль",

        badge:
            "✦ NAZAR DIGITAL EXPERIENCE",

        welcome:
            "ЛАСКАВО",

        welcomeNeon:
            "В NEON SPACE",

        heroText:
            "Мій сучасний сайт із неоновим дизайном, зоряним фоном, 3D-анімаціями, музикою та моїми іграми й програмами.",

        myProjects:
            "🚀 МОЇ ПРОЄКТИ",

        launch:
            "⚡ ЗАПУСТИТИ",

        projectsCount:
            "МОЇ ПРОЄКТИ",

        status:
            "СТАТУС",

        online:
            "ОНЛАЙН",

        corePower:
            "ПОТУЖНІСТЬ ЯДРА",

        featuresLabel:
            "МОЖЛИВОСТІ",

        newSite:
            "Сайт нового",

        generation:
            "покоління",

        featuresDescription:
            "Неоновий дизайн, анімації, музика та мої проєкти в одному місці.",

        speedText:
            "Швидкий сайт із плавними переходами та ефектами.",

        spaceText:
            "Живий зоряний фон, неонові кольори та космічний дизайн.",

        responsiveText:
            "Сайт працює на комп'ютері, телефоні та планшеті.",

        musicText:
            "Фонова музика та зручне керування звуком.",

        mySites:
            "МОЇ САЙТИ",

        myWord:
            "Мої",

        projectsWord:
            "проєкти",

        projectsDescription:
            "Натискай кнопку та відкривай потрібний проєкт.",

        fnafTitle:
            "П'ЯТЬ НОЧЕЙ В АТБ",

        fnafDescription:
            "Моя FNAF-подібна гра, яку можна запускати прямо у браузері.",

        playNow:
            "🎮 ГРАТИ ЗАРАЗ",

        optimizerDescription:
            "Сторінка мого Windows Optimizer для Windows.",

        openProject:
            "🚀 ВІДКРИТИ",

        superGame:
            "SUPER GAME НАЗАРА",

        gameDescription:
            "Моя браузерна гра з ігровими функціями та системою прогресу.",

        startGame:
            "⚡ ЗАПУСТИТИ ГРУ",

        creatorProfile:
            "ПРОФІЛЬ АВТОРА",

        creatorDescription:
            "Веброзробник • Творець ігор • ПК ентузіаст",

        ready:
            "Готовий до запуску?",

        activate:
            "Активуй систему NEON SPACE.",

        launchButton:
            "🚀 ЗАПУСТИТИ",

        systemOnline:
            "✅ СИСТЕМА ОНЛАЙН",

        footer:
            "Створено Nazar • © 2026"

    },


    // ==================================
    // DUTCH
    // ==================================

    nl: {

        loading:
            "SYSTEEM STARTEN...",

        home:
            "Home",

        features:
            "Functies",

        projects:
            "Projecten",

        profile:
            "Profiel",

        badge:
            "✦ NAZAR DIGITAL EXPERIENCE",

        welcome:
            "WELKOM",

        welcomeNeon:
            "BIJ NEON SPACE",

        heroText:
            "Mijn moderne website met neondesign, sterrenachtergrond, 3D-animaties, muziek, games en programma's.",

        myProjects:
            "🚀 MIJN PROJECTEN",

        launch:
            "⚡ STARTEN",

        projectsCount:
            "MIJN PROJECTEN",

        status:
            "STATUS",

        online:
            "ONLINE",

        corePower:
            "KERNVERMOGEN",

        featuresLabel:
            "FUNCTIES",

        newSite:
            "Website van de",

        generation:
            "nieuwe generatie",

        featuresDescription:
            "Neondesign, animaties, muziek en mijn projecten op één plek.",

        speedText:
            "Een snelle website met vloeiende overgangen en effecten.",

        spaceText:
            "Levende sterrenachtergrond, neonkleuren en ruimtedesign.",

        responsiveText:
            "De website werkt op computer, telefoon en tablet.",

        musicText:
            "Achtergrondmuziek met eenvoudige volumebediening.",

        mySites:
            "MIJN WEBSITES",

        myWord:
            "Mijn",

        projectsWord:
            "projecten",

        projectsDescription:
            "Klik op een knop om het gewenste project te openen.",

        fnafTitle:
            "VIJF NACHTEN IN ATB",

        fnafDescription:
            "Mijn FNAF-achtige game die je rechtstreeks in je browser kunt spelen.",

        playNow:
            "🎮 NU SPELEN",

        optimizerDescription:
            "De website van mijn Windows Optimizer-project.",

        openProject:
            "🚀 OPENEN",

        superGame:
            "NAZAR SUPER GAME",

        gameDescription:
            "Mijn browsergame met verschillende functies en een voortgangssysteem.",

        startGame:
            "⚡ GAME STARTEN",

        creatorProfile:
            "MAKERSPROFIEL",

        creatorDescription:
            "Webontwikkelaar • Gamemaker • PC-liefhebber",

        ready:
            "Klaar om te starten?",

        activate:
            "Activeer het NEON SPACE-systeem.",

        launchButton:
            "🚀 STARTEN",

        systemOnline:
            "✅ SYSTEEM ONLINE",

        footer:
            "Gemaakt door Nazar • © 2026"

    },


    // ==================================
    // ENGLISH
    // ==================================

    en: {

        loading:
            "STARTING SYSTEM...",

        home:
            "Home",

        features:
            "Features",

        projects:
            "Projects",

        profile:
            "Profile",

        badge:
            "✦ NAZAR DIGITAL EXPERIENCE",

        welcome:
            "WELCOME",

        welcomeNeon:
            "TO NEON SPACE",

        heroText:
            "My modern website with neon design, a star background, 3D animations, music, games and software.",

        myProjects:
            "🚀 MY PROJECTS",

        launch:
            "⚡ LAUNCH",

        projectsCount:
            "MY PROJECTS",

        status:
            "STATUS",

        online:
            "ONLINE",

        corePower:
            "CORE POWER",

        featuresLabel:
            "FEATURES",

        newSite:
            "A website of the",

        generation:
            "new generation",

        featuresDescription:
            "Neon design, animations, music and my projects all in one place.",

        speedText:
            "A fast website with smooth transitions and effects.",

        spaceText:
            "Animated stars, neon colors and a futuristic space design.",

        responsiveText:
            "The website works on computers, phones and tablets.",

        musicText:
            "Background music with easy sound controls.",

        mySites:
            "MY WEBSITES",

        myWord:
            "My",

        projectsWord:
            "projects",

        projectsDescription:
            "Press a button to open the project you want.",

        fnafTitle:
            "FIVE NIGHTS AT ATB",

        fnafDescription:
            "My FNAF-style game that you can play directly in your browser.",

        playNow:
            "🎮 PLAY NOW",

        optimizerDescription:
            "The website for my Windows Optimizer project.",

        openProject:
            "🚀 OPEN",

        superGame:
            "NAZAR SUPER GAME",

        gameDescription:
            "My browser game with gameplay features and a progression system.",

        startGame:
            "⚡ START GAME",

        creatorProfile:
            "CREATOR PROFILE",

        creatorDescription:
            "Web Developer • Game Creator • PC Enthusiast",

        ready:
            "Ready to launch?",

        activate:
            "Activate the NEON SPACE system.",

        launchButton:
            "🚀 LAUNCH",

        systemOnline:
            "✅ SYSTEM ONLINE",

        footer:
            "Created by Nazar • © 2026"

    },


    // ==================================
    // POLISH
    // ==================================

    pl: {

        loading:
            "URUCHAMIANIE SYSTEMU...",

        home:
            "Główna",

        features:
            "Możliwości",

        projects:
            "Projekty",

        profile:
            "Profil",

        badge:
            "✦ NAZAR DIGITAL EXPERIENCE",

        welcome:
            "WITAJ",

        welcomeNeon:
            "W NEON SPACE",

        heroText:
            "Moja nowoczesna strona z neonowym designem, gwiaździstym tłem, animacjami 3D, muzyką, grami i programami.",

        myProjects:
            "🚀 MOJE PROJEKTY",

        launch:
            "⚡ URUCHOM",

        projectsCount:
            "MOJE PROJEKTY",

        status:
            "STATUS",

        online:
            "ONLINE",

        corePower:
            "MOC RDZENIA",

        featuresLabel:
            "MOŻLIWOŚCI",

        newSite:
            "Strona nowej",

        generation:
            "generacji",

        featuresDescription:
            "Neonowy design, animacje, muzyka i moje projekty w jednym miejscu.",

        speedText:
            "Szybka strona z płynnymi przejściami i efektami.",

        spaceText:
            "Żywe gwiaździste tło, neonowe kolory i kosmiczny design.",

        responsiveText:
            "Strona działa na komputerze, telefonie i tablecie.",

        musicText:
            "Muzyka w tle i wygodne sterowanie dźwiękiem.",

        mySites:
            "MOJE STRONY",

        myWord:
            "Moje",

        projectsWord:
            "projekty",

        projectsDescription:
            "Kliknij przycisk, aby otworzyć wybrany projekt.",

        fnafTitle:
            "PIĘĆ NOCY W ATB",

        fnafDescription:
            "Moja gra w stylu FNAF, w którą można grać bezpośrednio w przeglądarce.",

        playNow:
            "🎮 GRAJ TERAZ",

        optimizerDescription:
            "Strona mojego projektu Windows Optimizer.",

        openProject:
            "🚀 OTWÓRZ",

        superGame:
            "SUPER GRA NAZARA",

        gameDescription:
            "Moja gra przeglądarkowa z funkcjami gry i systemem postępu.",

        startGame:
            "⚡ URUCHOM GRĘ",

        creatorProfile:
            "PROFIL TWÓRCY",

        creatorDescription:
            "Web Developer • Twórca gier • Entuzjasta PC",

        ready:
            "Gotowy do uruchomienia?",

        activate:
            "Aktywuj system NEON SPACE.",

        launchButton:
            "🚀 URUCHOM",

        systemOnline:
            "✅ SYSTEM ONLINE",

        footer:
            "Stworzone przez Nazar • © 2026"

    },


    // ==================================
    // DANISH
    // ==================================

    da: {

        loading:
            "STARTER SYSTEM...",

        home:
            "Hjem",

        features:
            "Funktioner",

        projects:
            "Projekter",

        profile:
            "Profil",

        badge:
            "✦ NAZAR DIGITAL EXPERIENCE",

        welcome:
            "VELKOMMEN",

        welcomeNeon:
            "TIL NEON SPACE",

        heroText:
            "Min moderne hjemmeside med neondesign, stjernebaggrund, 3D-animationer, musik, spil og programmer.",

        myProjects:
            "🚀 MINE PROJEKTER",

        launch:
            "⚡ START",

        projectsCount:
            "MINE PROJEKTER",

        status:
            "STATUS",

        online:
            "ONLINE",

        corePower:
            "KERNEKRAFT",

        featuresLabel:
            "FUNKTIONER",

        newSite:
            "En hjemmeside fra den",

        generation:
            "nye generation",

        featuresDescription:
            "Neondesign, animationer, musik og mine projekter samlet ét sted.",

        speedText:
            "En hurtig hjemmeside med glidende overgange og effekter.",

        spaceText:
            "Levende stjernebaggrund, neonfarver og rumdesign.",

        responsiveText:
            "Hjemmesiden fungerer på computer, telefon og tablet.",

        musicText:
            "Baggrundsmusik med nem styring af lyden.",

        mySites:
            "MINE HJEMMESIDER",

        myWord:
            "Mine",

        projectsWord:
            "projekter",

        projectsDescription:
            "Tryk på en knap for at åbne det ønskede projekt.",

        fnafTitle:
            "FEM NÆTTER I ATB",

        fnafDescription:
            "Mit FNAF-lignende spil, som kan spilles direkte i browseren.",

        playNow:
            "🎮 SPIL NU",

        optimizerDescription:
            "Hjemmesiden til mit Windows Optimizer-projekt.",

        openProject:
            "🚀 ÅBN",

        superGame:
            "NAZAR SUPER GAME",

        gameDescription:
            "Mit browserspil med spilfunktioner og et progressionssystem.",

        startGame:
            "⚡ START SPIL",

        creatorProfile:
            "SKABERPROFIL",

        creatorDescription:
            "Webudvikler • Spilskaber • PC-entusiast",

        ready:
            "Klar til at starte?",

        activate:
            "Aktivér NEON SPACE-systemet.",

        launchButton:
            "🚀 START",

        systemOnline:
            "✅ SYSTEM ONLINE",

        footer:
            "Lavet af Nazar • © 2026"

    }

};


// ======================================
// CHANGE LANGUAGE
// ======================================

function changeLanguage(language) {

    const dictionary =
        translations[language];

    if (!dictionary) {
        return;
    }


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (
                Object.prototype.hasOwnProperty.call(
                    dictionary,
                    key
                )
            ) {

                element.textContent =
                    dictionary[key];

            }

        });


    document.documentElement.lang =
        language;


    localStorage.setItem(
        "neonLanguage",
        language
    );

}


// ======================================
// LOAD SAVED LANGUAGE
// ======================================

if (languageSelect) {

    let savedLanguage =
        localStorage.getItem(
            "neonLanguage"
        );


    if (
        !savedLanguage ||
        !translations[savedLanguage]
    ) {

        savedLanguage = "uk";

    }


    languageSelect.value =
        savedLanguage;


    changeLanguage(
        savedLanguage
    );


    languageSelect.addEventListener(
        "change",
        () => {

            changeLanguage(
                languageSelect.value
            );

        }
    );

}


// ======================================
// MUSIC
// ======================================

let musicPlaying = false;

let musicStartedOnce = false;


if (music) {

    music.volume = 0.55;

    music.loop = true;

}


// ======================================
// START MUSIC
// ======================================

async function startMusic() {

    if (!music) {
        return false;
    }


    try {

        await music.play();


        musicPlaying = true;

        musicStartedOnce = true;


        if (musicBtn) {

            musicBtn.textContent =
                "🔊";

        }


        return true;

    } catch (error) {

        console.log(
            "Autoplay blocked. Waiting for interaction."
        );

        return false;

    }

}


// ======================================
// STOP MUSIC
// ======================================

function stopMusic() {

    if (!music) {
        return;
    }


    music.pause();

    musicPlaying = false;


    if (musicBtn) {

        musicBtn.textContent =
            "🔇";

    }

}


// ======================================
// PAGE LOAD
// ======================================

window.addEventListener(
    "load",
    async () => {

        await startMusic();


        setTimeout(
            () => {

                if (loader) {

                    loader.classList.add(
                        "hide"
                    );

                }

            },

            2100
        );

    }
);


// ======================================
// FIRST CLICK STARTS MUSIC
// ======================================

async function firstInteraction() {

    if (
        music &&
        music.paused &&
        !musicStartedOnce
    ) {

        const success =
            await startMusic();


        if (success) {

            removeInteractionListeners();

        }

    }

}


function removeInteractionListeners() {

    document.removeEventListener(
        "pointerdown",
        firstInteraction
    );


    document.removeEventListener(
        "keydown",
        firstInteraction
    );


    document.removeEventListener(
        "touchstart",
        firstInteraction
    );

}


document.addEventListener(
    "pointerdown",
    firstInteraction
);


document.addEventListener(
    "keydown",
    firstInteraction
);


document.addEventListener(
    "touchstart",
    firstInteraction
);


// ======================================
// MUSIC BUTTON
// ======================================

if (
    musicBtn &&
    music
) {

    musicBtn.addEventListener(
        "click",
        async event => {

            event.stopPropagation();


            if (music.paused) {

                await startMusic();

            } else {

                stopMusic();

            }

        }
    );

}


// ======================================
// THEME
// ======================================

if (themeBtn) {

    const savedTheme =
        localStorage.getItem(
            "neonTheme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light"
        );

        themeBtn.textContent =
            "☀️";

    }


    themeBtn.addEventListener(
        "click",
        () => {

            document.body
                .classList
                .toggle("light");


            const lightMode =
                document.body
                    .classList
                    .contains("light");


            themeBtn.textContent =
                lightMode
                    ? "☀️"
                    : "🌙";


            localStorage.setItem(
                "neonTheme",
                lightMode
                    ? "light"
                    : "dark"
            );

        }
    );

}


// ======================================
// MOBILE MENU
// ======================================

if (
    menuBtn &&
    nav
) {

    menuBtn.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "active"
            );


            menuBtn.textContent =
                nav.classList.contains(
                    "active"
                )
                    ? "✕"
                    : "☰";

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
// REVEAL
// ======================================

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("active");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
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


if (stats) {

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
                                        counter.dataset.target
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


                                            counter.textContent =
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


    counterObserver.observe(
        stats
    );

}


// ======================================
// 3D CARD
// ======================================

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
                    )
                    /
                    centerX
                )
                * 7;


            const rotateX =
                (
                    (
                        mouseY -
                        centerY
                    )
                    /
                    centerY
                )
                * -5;


            systemCard.style.transform =
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

            systemCard.style.transform =
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
// STARS
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


// ======================================
// RESIZE CANVAS
// ======================================

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


// ======================================
// CREATE STARS
// ======================================

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
                Math.random()
                * canvas.width,

            y:
                Math.random()
                * canvas.height,

            size:
                Math.random()
                * 1.8
                + 0.2,

            speed:
                Math.random()
                * 0.25
                + 0.04,

            alpha:
                Math.random()
                * 0.7
                + 0.3,

            twinkle:
                Math.random()
                * 0.02

        });

    }

}


// ======================================
// ANIMATE STARS
// ======================================

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
                `rgba(255,255,255,${star.alpha})`;


            ctx.fill();


            star.y +=
                star.speed;


            if (
                star.y >
                canvas.height
            ) {

                star.y = 0;


                star.x =
                    Math.random()
                    * canvas.width;

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
// PARTICLES
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
            document.createElement(
                "div"
            );


        const size =
            Math.random() * 7 + 3;


        particle.style.position =
            "fixed";


        particle.style.left =
            "50%";


        particle.style.top =
            "50%";


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        particle.style.borderRadius =
            "50%";


        particle.style.pointerEvents =
            "none";


        particle.style.zIndex =
            "9999";


        particle.style.background =
            colors[
                Math.floor(
                    Math.random()
                    * colors.length
                )
            ];


        document.body.appendChild(
            particle
        );


        const x =
            (
                Math.random()
                - 0.5
            )
            * 700;


        const y =
            (
                Math.random()
                - 0.5
            )
            * 700;


        particle.animate(

            [

                {

                    transform:
                        "translate(0,0) scale(1)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(${x}px,${y}px) scale(0)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    Math.random()
                    * 900
                    + 900,

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
// PROJECT EFFECT
// ======================================

document
    .querySelectorAll(
        ".project-btn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                createParticles();

            }
        );

    });


// ======================================
// HEADER SCROLL
// ======================================

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

            header.style.boxShadow =
                "0 20px 60px rgba(0,0,0,0.45)";

        } else {

            header.style.boxShadow =
                "0 20px 50px rgba(0,0,0,0.25)";

        }

    }
);


// ======================================
// MUSIC EVENTS
// ======================================

if (music) {

    music.addEventListener(
        "playing",
        () => {

            musicPlaying =
                true;


            if (musicBtn) {

                musicBtn.textContent =
                    "🔊";

            }

        }
    );


    music.addEventListener(
        "pause",
        () => {

            musicPlaying =
                false;

        }
    );


    music.addEventListener(
        "error",
        () => {

            console.error(
                "music.mp3 not found!"
            );


            if (musicBtn) {

                musicBtn.textContent =
                    "❌";

            }

        }
    );

}


// ======================================
// CONSOLE
// ======================================

console.log(
    "%c NEON SPACE ONLINE ",
    "background:#7455ff;color:white;font-size:20px;padding:10px;border-radius:8px;"
);let musicStartedOnce = false;

if (music) {

    music.volume = 0.55;

    music.loop = true;

}


// ======================================
// MUSIC START FUNCTION
// ======================================

async function startMusic() {

    if (!music) {
        return false;
    }

    try {

        await music.play();

        musicPlaying = true;
        musicStartedOnce = true;

        if (musicBtn) {

            musicBtn.textContent = "🔊";

            musicBtn.title = "Вимкнути музику";

        }

        console.log("🎵 Music started");

        return true;

    } catch (error) {

        console.log(
            "Автоматичний запуск музики заблокований браузером."
        );

        return false;

    }

}


// ======================================
// STOP MUSIC
// ======================================

function stopMusic() {

    if (!music) {
        return;
    }

    music.pause();

    musicPlaying = false;

    if (musicBtn) {

        musicBtn.textContent = "🔇";

        musicBtn.title = "Увімкнути музику";

    }

}


// ======================================
// LOADING SCREEN
// ======================================

window.addEventListener("load", async () => {

    // Пробуємо запустити музику одразу
    await startMusic();


    // Loader
    setTimeout(() => {

        if (loader) {

            loader.classList.add("hide");

        }

    }, 2100);

});


// ======================================
// FIRST USER INTERACTION = MUSIC
// ======================================

async function firstUserInteraction() {

    if (
        music &&
        music.paused &&
        !musicStartedOnce
    ) {

        const started = await startMusic();

        if (started) {

            removeInteractionListeners();

        }

    } else {

        removeInteractionListeners();

    }

}


function removeInteractionListeners() {

    document.removeEventListener(
        "pointerdown",
        firstUserInteraction
    );

    document.removeEventListener(
        "keydown",
        firstUserInteraction
    );

    document.removeEventListener(
        "touchstart",
        firstUserInteraction
    );

}


document.addEventListener(
    "pointerdown",
    firstUserInteraction
);

document.addEventListener(
    "keydown",
    firstUserInteraction
);

document.addEventListener(
    "touchstart",
    firstUserInteraction
);


// ======================================
// MUSIC BUTTON
// ======================================

if (musicBtn && music) {

    musicBtn.addEventListener(
        "click",
        async event => {

            event.stopPropagation();


            if (music.paused) {

                await startMusic();

            } else {

                stopMusic();

            }

        }
    );

}


// ======================================
// MOBILE MENU
// ======================================

if (menuBtn && nav) {

    menuBtn.addEventListener(
        "click",
        () => {

            nav.classList.toggle("active");


            if (
                nav.classList.contains("active")
            ) {

                menuBtn.textContent = "✕";

            } else {

                menuBtn.textContent = "☰";

            }

        }
    );


    document
        .querySelectorAll("nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove("active");

                    menuBtn.textContent = "☰";

                }
            );

        });

}


// ======================================
// DARK / LIGHT THEME
// ======================================

if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle("light");


            if (
                document.body.classList.contains("light")
            ) {

                themeBtn.textContent = "☀️";

            } else {

                themeBtn.textContent = "🌙";

            }

        }
    );

}


// ======================================
// SCROLL REVEAL
// ======================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ======================================
// COUNTERS
// ======================================

const counters =
    document.querySelectorAll("[data-target]");

const stats =
    document.querySelector(".stats");

let countersStarted = false;


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting ||
                    countersStarted
                ) {

                    return;

                }


                countersStarted = true;


                counters.forEach(counter => {

                    const target =
                        Number(
                            counter.dataset.target
                        );


                    let current = 0;


                    const increment =
                        Math.max(
                            target / 60,
                            0.2
                        );


                    const timer =
                        setInterval(
                            () => {

                                current += increment;


                                if (
                                    current >= target
                                ) {

                                    current = target;

                                    clearInterval(timer);

                                }


                                counter.textContent =
                                    Math.floor(current);

                            },

                            20
                        );

                });

            });

        },

        {
            threshold: 0.4
        }

    );


if (stats) {

    counterObserver.observe(stats);

}


// ======================================
// 3D SYSTEM CARD
// ======================================

if (systemCard) {

    systemCard.addEventListener(
        "mousemove",
        event => {

            const rect =
                systemCard.getBoundingClientRect();


            const mouseX =
                event.clientX - rect.left;


            const mouseY =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                (
                    (mouseX - centerX)
                    / centerX
                ) * 7;


            const rotateX =
                (
                    (mouseY - centerY)
                    / centerY
                ) * -5;


            systemCard.style.transform =
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

            systemCard.style.transform =
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

if (
    cursorDot &&
    cursorCircle
) {

    document.addEventListener(
        "mousemove",
        event => {

            cursorDot.style.left =
                event.clientX + "px";


            cursorDot.style.top =
                event.clientY + "px";


            cursorCircle.animate(

                {

                    left:
                        event.clientX + "px",

                    top:
                        event.clientY + "px"

                },

                {

                    duration: 350,

                    fill: "forwards"

                }

            );

        }
    );

}


// ======================================
// STAR BACKGROUND
// ======================================

const canvas =
    document.getElementById("stars");


let ctx = null;

let stars = [];


if (canvas) {

    ctx = canvas.getContext("2d");

}


// ======================================
// RESIZE CANVAS
// ======================================

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


// ======================================
// CREATE STARS
// ======================================

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
                Math.random()
                * canvas.width,

            y:
                Math.random()
                * canvas.height,

            size:
                Math.random()
                * 1.8
                + 0.2,

            speed:
                Math.random()
                * 0.25
                + 0.04,

            alpha:
                Math.random()
                * 0.7
                + 0.3,

            twinkle:
                Math.random()
                * 0.02

        });

    }

}


// ======================================
// ANIMATE STARS
// ======================================

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


    stars.forEach(star => {

        star.alpha += star.twinkle;


        if (
            star.alpha >= 1 ||
            star.alpha <= 0.25
        ) {

            star.twinkle *= -1;

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


        star.y += star.speed;


        if (
            star.y >
            canvas.height
        ) {

            star.y = 0;


            star.x =
                Math.random()
                * canvas.width;

        }

    });


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

            behavior: "smooth",

            block: "center"

        });

    }

}


// ======================================
// PARTICLES
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
            document.createElement("div");


        particle.style.position =
            "fixed";


        particle.style.left =
            "50%";


        particle.style.top =
            "50%";


        const size =
            Math.random() * 7 + 3;


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        particle.style.borderRadius =
            "50%";


        particle.style.pointerEvents =
            "none";


        particle.style.zIndex =
            "9999";


        particle.style.background =
            colors[
                Math.floor(
                    Math.random()
                    * colors.length
                )
            ];


        particle.style.boxShadow =
            "0 0 15px currentColor";


        document.body.appendChild(
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

                    opacity: 1

                },

                {

                    transform:
                        `translate(${x}px, ${y}px) scale(0)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    Math.random()
                    * 900
                    + 900,

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

window.addEventListener(
    "scroll",
    () => {

        if (!header) {
            return;
        }


        if (
            window.scrollY > 50
        ) {

            header.style.boxShadow =
                `
                    0 20px 60px
                    rgba(0,0,0,0.45)
                `;

        } else {

            header.style.boxShadow =
                `
                    0 20px 50px
                    rgba(0,0,0,0.25)
                `;

        }

    }
);


// ======================================
// PROJECT CARD EFFECT
// ======================================

document
    .querySelectorAll(".project")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                card.style.background =
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

                card.style.background =
                    "var(--panel)";

            }
        );

    });


// ======================================
// PROJECT BUTTON EFFECT
// ======================================

document
    .querySelectorAll(".project-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                createParticles();

            }
        );

    });


// ======================================
// PAGE VISIBILITY
// ======================================

// Якщо перейти на іншу вкладку,
// музика не скидається.
//
// Коли повернешся,
// вона продовжить грати,
// якщо браузер її не призупинив.

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState === "visible" &&
            musicPlaying &&
            music &&
            music.paused
        ) {

            music.play().catch(() => {});

        }

    }
);


// ======================================
// ERROR CHECK
// ======================================

if (music) {

    music.addEventListener(
        "error",
        () => {

            console.error(
                "❌ Не вдалося завантажити music.mp3"
            );

            if (musicBtn) {

                musicBtn.textContent =
                    "❌";

            }

        }
    );


    music.addEventListener(
        "playing",
        () => {

            musicPlaying = true;

            if (musicBtn) {

                musicBtn.textContent =
                    "🔊";

            }

        }
    );


    music.addEventListener(
        "pause",
        () => {

            musicPlaying = false;

        }
    );

}


// ======================================
// CONSOLE
// ======================================

console.log(
    "%c NEON SPACE ONLINE ",
    "background:#7455ff;color:white;font-size:20px;padding:10px;border-radius:8px;"
);

console.log(
    "🚀 Created by Nazar"
);
