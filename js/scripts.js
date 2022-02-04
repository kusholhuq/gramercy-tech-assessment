// Write your JS below

$(document).ready(function() {
    console.log('Document ready')

    function setFonts(){
        const h1 = document.querySelector("h1");
        h1.classList.add("sharp-sans-black");

        const h2 = document.querySelector("h2");
        h2.classList.add("sharp-sans-black");
    }

    function pageAdjustments(){
        const body = document.querySelector("body");
        body.classList.add("center");
    }

    function injectBanner(){
        const h2 = document.querySelector("h2");
        const forms = document.querySelectorAll("form");
        const formSignUp = forms[0];
        const formSignIn = forms[1];

        const banner = document.createElement("img");
        banner.setAttribute("src", "../assets_from_client/assets/WSJ_Horizontal.png")
        banner.classList.add("banner");
        formSignUp.insertBefore(banner, formSignUp.firstChild);
        formSignIn.insertBefore(banner, formSignUp.firstChild);

        formSignUp.classList.add("grey-background");
    }

    function app(){
        setFonts();
        pageAdjustments();
        injectBanner();
    }

    app();

});
