const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
        
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

$('.move-up span').click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 8);
})
    AOS.init();

});
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'fast');
      return false;
    });
  });
var mybutton = document.getElementById("scroll-up");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$(".toggle-icons").click(function() {
  $(".toggle-icons").toggleClass("rot");
});

function myFunction() {
  setTimeout(function(){ alert("1-If you are using a laptop or a PC please make sure that the website zoom is between 70%-125%./ 2-Dark theme works automatically if you switch your device theme to dark./ 3-Sometimes the buttons dont work from the first click please try to click them one more time"); }, 1);
}

//scroll down buttoms
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 80, function(){
        window.location.hash = hash;
      });
    } 
  });
});
