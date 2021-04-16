// 264653
// 2a9d8f
// e9c46a
// f4a261
// e76f51
 


// search function
document.getElementById("srch_fn").onclick = function() {
    alert("Search Function is not ready yet!");
};

// cities display
var other_places = document.getElementById("other_places");
var explr = document.getElementById("explr_ct"); //getting explr div
var explr_label = explr.getElementsByTagName("label")[0]; //getting label for clicking
var explr_checkBox = explr.getElementsByTagName("input")[0]; //getting checkbox

other_places.style.overflow = 'hidden';
other_places.style.height = 0;
other_places.style.opacity = 0;

explr_label.onclick = function () {
    if (explr_checkBox.checked) {
        other_places.style.opacity = 1;
        other_places.style.height = "auto";
        other_places.style.overflow = "";
    }else{
        other_places.style.opacity = 0;
        other_places.style.height = 0;
        other_places.style.overflow = "hidden";
    }
}

// navbar and toUp
function navBar_visibility() {
    let nav = document.querySelector("nav");
    let span = document.getElementsByClassName("site_tagline")[0];
    if(window.scrollY > 100){
        nav.classList.add("sticky");
        span.style.opacity = 0;
    }else{
        nav.classList.remove("sticky");
        span.style.opacity = 1;
    }
};
                    
function toUpVisible(){
    
    let arrow = document.querySelector(".toTop"); //for class use . and for id #
    
    // scrollY is equivalent to pageYOffset 
    if (window.scrollY > 100) {
        arrow.classList.add("active");
    } else {
        arrow.classList.remove("active");
    }
    
    arrow.onclick = () => window.scrollTo = (0,0);
    
}

// using functions relarted to scrollY
    window.onscroll = function(){ 
        navBar_visibility();
        toUpVisible();
    };

// validation
    const val = () => {
        basic_validation();
        validation();
    }

// modal pop up
    let signIn = document.getElementById("sign_in");

    signIn.onclick = function openModal() {
        let modal = document.querySelector(".modal");
        modal.classList.add("active_modal");
    }

    // let backdrop = document.getElementById("backdrop");
    // similar to seting up onclick to backdrop div
    function closeModal() {
        modal.classList.remove("active_modal");
    }

// 
function scrollTo() {
    window.scrollY = 1563;
}