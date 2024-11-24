var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
var time = 3000;
var s = 0;
var startX;
var isDown = false;

var SL1 = document.getElementById('testing');

var startScroll = (1/3)*document.getElementsByClassName("all-Slides")[0].clientWidth;


SL1.onscroll = function(){scrollSlide()}

function scrollSlide() {
    clearTimeout();
    time = 10000;
    var st = SL1.pageXOffset || SL1.scrollLeft; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    startScroll = (1/3)*document.getElementsByClassName("all-Slides")[0].clientWidth;
    var width = document.getElementsByClassName("slides")[s].clientWidth;
    var difference = SL1.scrollLeft - startScroll;
    
    if (difference > 0.3*width) {
        SL1.style.overflow = "hidden";
        SL1.style.scrollSnapType = "none";
        SL1.scrollTo(0, 0);
        if (s == slides.length - 1) {
            showSlide(1);
        } else {
            showSlide(s + 2);
        }
        SL1.style.scrollSnapType = "x mandatory";
        SL1.style.overflow = "auto";
        difference = 0;
        SL1.onscroll = function () {toggleScrollSlide()};
        

    } else if (difference < -0.3*width) {
        SL1.style.overflow = "hidden";
        SL1.style.scrollSnapType = "none";
        SL1.scrollTo(2*startScroll, 0);
        if (s == 0) {
            showSlide(3);
        } else {
            showSlide(s);
        }
        SL1.style.scrollSnapType = "x mandatory";
        SL1.style.overflow = "auto";
        difference = 0
        SL1.onscroll = function () {toggleScrollSlide()};
    }
};

function toggleScrollSlide() {
    isDown = false;
    SL1.classList.remove('drag');
    if (Math.abs(SL1.scrollLeft - startScroll) < 0.05*document.getElementsByClassName("slides")[s].clientWidth) {
        SL1.onscroll = function(){scrollSlide()};
        // setTimeout("changeSlide()", time);
    }
}

SL1.addEventListener('mousedown', function(event) {
    isDown = true;
    SL1.classList.add('drag');
    startX = event.pageX - SL1.offsetLeft;
    scrollLeft = SL1.scrollLeft;
    // console.log(startX, event.clientX);
    SL1.style.scrollSnapType = "none";
})

SL1.addEventListener('mouseleave', function(){
    isDown = false;
    SL1.classList.remove('drag');
    SL1.style.scrollSnapType = "x mandatory";
})

SL1.addEventListener('mouseup', function() {
    isDown = false;
    SL1.classList.remove('drag');
    SL1.style.scrollSnapType = "x mandatory";
})

SL1.addEventListener('mousemove', function(event) {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - SL1.offsetLeft;
    const walk = x - startX;
    SL1.scrollLeft = scrollLeft - walk;

})

// End of Attempt

// function beginSliding(e, startX) {
//     SL1.onpointermove = slide(e, startX);
//     SL1.setPointerCapture(e.pointerId);
// }

// function stopSliding(e) {
//     SL1.onpointermove = null;
//     SL1.releasePointerCapture(e.pointerId);
// }

// function slide(e, startX) {
//     console.log(e.clientX)
//     console.log(startX)
//     SL1.scrollBy(e.clientX- startX, 0)
// }

// function opentab(tabname){
//     for (tablink of tablinks){
//         tablink.classList.remove("active-link");
//     }
//     for (tabcontent of tabcontents){
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }

function showSlide(n) {
    // let i;
    // let slides = document.getElementsByClassName("slides");
    // let dots = document.getElementsByClassName("dot");
    // if (n > slides.length) {slideIndex = 1}
    // if (n < 1) {slideIndex = slides.length}
    // for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-tab");
        dots[i].classList.remove("active");
    }
    slides[n-1].classList.add("active-tab");
    dots[n-1].classList.add("active");
    s = n - 1;
}

function showSlide2(n) {
    // let i;
    // let slides = document.getElementsByClassName("slides");
    // let dots = document.getElementsByClassName("dot");
    // if (n > slides.length) {slideIndex = 1}
    // if (n < 1) {slideIndex = slides.length}
    // for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-tab");
        dots[i].classList.remove("active");
    }
    slides[n-1].classList.add("active-tab");
    dots[n-1].classList.add("active");
}

function changeSlide() {
    var i;
    // time = 3000;
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-tab");
        dots[i].classList.remove("active");
    }

    slides[s].classList.add("active-tab");
    dots[s].classList.add("active");

    if (s < slides.length - 1){
        s++;
    } else {
        s = 0;
    }

    setTimeout("changeSlide()", time);
}

// window.onload = changeSlide;