// window.addEventListener("scroll", function(){
//   var menu = document.getElementById("navbar_one");
//   var sticky = menu.offsetTop;
//   if(window.screenY > sticky){
//     menu.classList.add("sticky");
//   }
//   else{
//     menu.classList.remove("sticky");
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-active");
    } else {
      navbar.classList.remove("navbar-active");
    }
  });
  // Mobile navigation toggle
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  const closeHam = document.getElementById("closeham");

  hamburger.addEventListener("click", function () {
    mobileNav.classList.toggle("show");
  });

  closeHam.addEventListener("click", function () {
    mobileNav.classList.remove("show");
  });
});






var responsiveSlider = function () {
    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
  
    window.addEventListener("resize", function () {
      sliderWidth = slider.offsetWidth;
    });
  
    var prevSlide = function () {
      if (count > 1) {
        count = count - 2;
        slideList.style.transform = "translateX(-" + count * 100 + "vw)";
        count++;
      } else if (count === 1) {
        count = items - 1;
        slideList.style.transform = "translateX(-" + count * 100 + "vw)";
        count++;
      }
    };
  
    var nextSlide = function () {
      if (count < items) {
        slideList.style.transform = "translateX(-" + count * 100 + "vw)";
        count++;
      } else if (count === items) {
        slideList.style.transform = "translateX(0)";
        count = 1;
      }
    };
  
    next.addEventListener("click", function () {
      nextSlide();
    });
  
    prev.addEventListener("click", function () {
      prevSlide();
    });
  
    setInterval(function () {
      nextSlide();
    }, 5000);
  };
  
  window.onload = function () {
    responsiveSlider();
  };

//   // hamgurbar
//   const hamburger = document.getElementById('hamburger');
// const mobileNav = document.getElementById('mobile-nav');
// const closeham = document.getElementById('closeham');

// hamburger.addEventListener('click', () => {
//   mobileNav.classList.toggle('show');
// });
// closeham.addEventListener('click', () => {
//   mobileNav.classList.remove('show');
//   });


  // products images slider
  let index = 0;
        const sliders = document.getElementById('sliders');
        const totalProducts = document.querySelectorAll('.product-card').length;
        const productsPerSlide = 4;
        const totalSlides = Math.ceil(totalProducts / productsPerSlide);

        function updateSlidersPosition() {
            sliders.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            if (index < totalSlides - 1) {
                index++;
                updateSlidersPosition();
            }
        }

        function prevSlide() {
            if (index > 0) {
                index--;
                updateSlidersPosition();
            }
        }

// second image products
        let index_two = 0;
        const sliders_two = document.getElementById('sliders-two');
        const totalProducts_two = document.querySelectorAll('.product-card').length;
        const productsPerSlide_two = 4;
        const totalSlides_two = Math.ceil(totalProducts_two / productsPerSlide_two);

        function updateSliders_twoPosition() {
            sliders_two.style.transform = `translateX(-${index_two * 100}%)`;
        }

        function nextSlide_two() {
            if (index_two < totalSlides_two - 1) {
                index_two++;
                updateSliders_twoPosition();
            }
        }

        function prevSlide_two() {
            if (index_two > 0) {
                index_two--;
                updateSliders_twoPosition();
            }
        }
//teda meda image products
const carousel = document.querySelector('.carousel-items');
        const items = document.querySelectorAll('.carousel-item');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
        let index_three = 0;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${index_three * 100}%)`;
        }

        leftArrow.addEventListener('click', () => {
            index_three = index_three > 0 ? index_three - 1 : items.length - 1;
            updateCarousel();
        });

        rightArrow.addEventListener('click', () => {
            index_three = index_three < items.length - 1 ? index_three + 1 : 0;
            updateCarousel();
        });        