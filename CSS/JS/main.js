document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
        e.preventDefault();

        const element = document.querySelector(e.target.getAttribute('href'));
        const offset = 68;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        });
    });
});






let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if(count>10){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

    //  CARDS 

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "קראי עוד..";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "פחות..";
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "קראי עוד..";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "פחות..";
      moreText.style.display = "inline";
    }
  }

  function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "קראי עוד..";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "פחות..";
      moreText.style.display = "inline";
    }
  }

  function myFunction4() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "קראי עוד..";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "פחות..";
      moreText.style.display = "inline";
    }
  }

  function myFunction5() {
    var dots = document.getElementById("dots5");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "קראי עוד..";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "פחות..";
      moreText.style.display = "inline";
    }
  }

  function myFunction6() {
    var dots = document.getElementById("dots6");
    var moreText = document.getElementById("more6");
    var btnText = document.getElementById("myBtn6");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "קראי עוד..";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "פחות..";
      moreText.style.display = "inline";
    }
  }

  function myFunction7() {
    var dots = document.getElementById("dots7");
    var moreText = document.getElementById("more7");
    var btnText = document.getElementById("myBtn7");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "קראי עוד..";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "פחות..";
      moreText.style.display = "inline";
    }
  }