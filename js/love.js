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
//sort alphabet
function sortProducts(criteria) {
  let container = document.querySelector(".products");
  let products = Array.from(container.children);

  if (criteria === "az") {
      products.sort((a, b) => a.textContent.localeCompare(b.textContent));
  } else if (criteria === "za") {
      products.sort((a, b) => b.textContent.localeCompare(a.textContent));
  } else if (criteria === "price") {
      products.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
  } else if (criteria == "lowprice") {
    products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
  }

  container.innerHTML = "";
  products.forEach(product => container.appendChild(product));
}