// const router = new Navigo("/", { hash: true });
const router = new Navigo("/");

// router.hooks({
//   before(done, match) {
//   },
// leave(done, match) {
// }
// });

// Page-s routing-

router.navigate("/");



router
    .on("/", () => {

        console.log("HOME");

        home_icon.classList.add("active_nav_icon");
        projects_icon.classList.remove("active_nav_icon");
        // aboutme_icon.classList.remove("active_nav_icon");
        contact_icon.classList.remove("active_nav_icon");

        home_page.classList.add("active_page");
        projects_page.classList.remove("active_page");
        // aboutme_page.classList.remove("active_page");
        contact_page.classList.remove("active_page");

        header.style.background = 'linear-gradient(62deg, #8EC5FCE5 0%, #E0C3FCDB 100%)';


        // Scroll body to top-
        document.body.scrollTo(0, 0);

        // PAGE_SWIPER.slideTo(0, 0);

    })
    .on("/projects", () => {

        console.log("PROJECTS");

        home_icon.classList.remove("active_nav_icon");
        projects_icon.classList.add("active_nav_icon");
        // aboutme_icon.classList.remove("active_nav_icon");
        contact_icon.classList.remove("active_nav_icon");

        home_page.classList.remove("active_page");
        projects_page.classList.add("active_page");
        contact_page.classList.remove("active_page");

        header.style.background = 'linear-gradient(62deg, #8EC5FCE5 0%, #E0C3FCDB 100%)';


        // Scroll body to top-
        document.body.scrollTo(0, 0);

        // PAGE_SWIPER.slideTo(1, 0);

    })
    // .on("/about_me", () => {

    //     console.log("ABOUT ME");

    //     home_icon.classList.remove("active_nav_icon");
    //     projects_icon.classList.remove("active_nav_icon");
    //     // aboutme_icon.classList.add("active_nav_icon");
    //     contact_icon.classList.remove("active_nav_icon");

    //     home_page.classList.remove("active_page");
    //     projects_page.classList.remove("active_page");
    //     // aboutme_page.classList.add("active_page");
    //     contact_page.classList.remove("active_page");

    //     // Scroll body to top-
    //     document.body.scrollTo(0, 0);

    //     // PAGE_SWIPER.slideTo(3, 0);

    // })
    .on("/contact", () => {

        console.log("CONTACT");

        home_icon.classList.remove("active_nav_icon");
        projects_icon.classList.remove("active_nav_icon");
        // aboutme_icon.classList.remove("active_nav_icon");
        contact_icon.classList.add("active_nav_icon");

        home_page.classList.remove("active_page");
        projects_page.classList.remove("active_page");
        // aboutme_page.classList.remove("active_page");
        contact_page.classList.add("active_page");

        header.style.background = '#ecddc8c4';

        // Scroll body to top-
        document.body.scrollTo(0, 0);

        // PAGE_SWIPER.slideTo(4, 0);

    });

home_icon.addEventListener("click", () => {

    router.navigate("");

});

projects_icon.addEventListener("click", () => {

    router.navigate("projects");

});

// aboutme_icon.addEventListener("click", () => {

//     router.navigate("about_me");

// });

contact_icon.addEventListener("click", () => {

    router.navigate("contact");

});