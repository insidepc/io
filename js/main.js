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
        navText: [$('#owl-navigation .owl-nav-prev'), $('#owl-navigation .owl-nav-next')],
        responsive: responsive
    });

$('.move-up span').click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 0);
})
    AOS.init(0);

});

var mybutton = document.getElementById("scroll-up");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


$(".toggle-icons").click(function() {
  $(".toggle-icons").toggleClass("rot");
});

function myFunction() {
  setTimeout(function(){ alert("1-If you are using a laptop or a PC please make sure that the website zoom is between 70%-125%./ 2-Dark theme works automatically if you switch your device theme to dark."); }, 1);
}

$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "0") {

      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 550, function(){

        window.location.hash = hash;
      });
    }
  });
});
