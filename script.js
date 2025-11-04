

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
 window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height){
            navLinks.forEach(link => {
               link.classList.remove("active");
               document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });
//    ======= sticky navbar =======
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// // ======= scroll reveal =======
const str = ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in',
    viewFactor: 0.2
})

str.reveal('.home-content, .heading', { origin: 'top' });
str.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
str.reveal('.home-content h1, .about-img, .left', { origin: 'left' });
str.reveal('.home-content p, .about-content, .right', { origin: 'right' });
// ======= scroll up button =======
let scrollUpBtn = document.querySelector('.scroll-up-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollUpBtn.classList.add('show');   
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

// ======= typing animation =======
const typed = new Typed('.typing', {
    strings: ['Frontend Developer', 'Shopify Developer', 'Web Designer'],
    typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true
})
sr.reveal('.skills-text', {delay: 150} )
sr.reveal('.skills-data', {interval: 200} )
sr.reveal('.skills-img', {delay: 400} )

 document.getElementById("readMoreBtn").onclick = function() {
    document.getElementById("aboutModal").style.display = "block";
  }

  // Close Modal
  document.querySelector(".close-btn").onclick = function() {
    document.getElementById("aboutModal").style.display = "none";
  }

  // Close when clicking outside modal
  window.onclick = function(event) {
    if (event.target == document.getElementById("aboutModal")) {
      document.getElementById("aboutModal").style.display = "none";
    }
  }
  document.querySelectorAll(".btn[data-modal]").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// Initialize EmailJS
(function () {
  emailjs.init("s26qJ2dKb65aYWRXu"); // ✅ Tumhara public key
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Optional: Disable button during sending
    const submitBtn = form.querySelector(".btn");
    submitBtn.value = "Sending...";
    submitBtn.disabled = true;

    emailjs
      .sendForm("service_grcf3u1", "template_9fu4yi4", this)
      .then(() => {
        alert("✅ Your message has been sent successfully!");
        form.reset();
        submitBtn.value = "Send Message";
        submitBtn.disabled = false;
      })
      .catch((error) => {
        console.error("❌ Failed to send message:", error);
        alert("Something went wrong. Please try again later.");
        submitBtn.value = "Send Message";
        submitBtn.disabled = false;
      });
  });
});


