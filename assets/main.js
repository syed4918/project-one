function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  $(document).ready(function() {
    $(".iframe1").click(function() {
      $("#frame1").toggle();
    });
  });
  $(document).ready(function() {
    $(".iframe2").click(function() {
      $("#frame2").toggle();
    });
  });
  $(document).ready(function() {
    $(".iframe3").click(function() {
      $("#frame3").toggle();
    });
  });
  $(document).ready(function() {
    $(".iframe4").click(function() {
      $("#frame4").toggle();
    });
  });

  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000)
};

fetch
