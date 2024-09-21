(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
      setTimeout(function () {
          if ($('#spinner').length > 0) {
              $('#spinner').removeClass('show');
          }
      }, 1);
  };
  spinner();
  
  
  // Initiate the wowjs
  new WOW().init();


  // Sticky Navbar
  $(window).scroll(function () {
      if ($(this).scrollTop() > 45) {
          $('.navbar').addClass('sticky-top shadow-sm');
      } else {
          $('.navbar').removeClass('sticky-top shadow-sm');
      }
  });
  
  
  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";
  
  $(window).on("load resize", function() {
      if (this.matchMedia("(min-width: 992px)").matches) {
          $dropdown.hover(
          function() {
              const $this = $(this);
              $this.addClass(showClass);
              $this.find($dropdownToggle).attr("aria-expanded", "true");
              $this.find($dropdownMenu).addClass(showClass);
          },
          function() {
              const $this = $(this);
              $this.removeClass(showClass);
              $this.find($dropdownToggle).attr("aria-expanded", "false");
              $this.find($dropdownMenu).removeClass(showClass);
          }
          );
      } else {
          $dropdown.off("mouseenter mouseleave");
      }
  });
  
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav : false,
      responsive: {
          0:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });
  
})(jQuery);

window.addEventListener("load", function () {
  // Hide the spinner once the page is fully loaded
  document.getElementById("spinner").style.display = "none";
  
  // Check if a user is logged in and display the username if so
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    const { username } = JSON.parse(currentUser);
    displayUsername(username);
  }
});

// Toggle between login and signup forms
function toggleForm() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const isLoginHidden = loginForm.style.display === "none";
  loginForm.style.display = isLoginHidden ? "block" : "none";
  signupForm.style.display = isLoginHidden ? "none" : "block";
}

// Sign Up Functionality with Unique Email and Username
function signUp(event) {
  event.preventDefault();

  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Check if email or username already exists
  const isUserExists = Object.keys(localStorage).some((key) => {
    if (key === "currentUser") return false;
    const storedData = JSON.parse(localStorage.getItem(key));
    return storedData.email === email || storedData.username === username;
  });

  if (isUserExists) {
    alert("Email or Username already exists. Please try different credentials.");
    return;
  }

  // Store user data
  localStorage.setItem(email, JSON.stringify({ email, username, password }));
  alert("Sign up successful. Please log in.");
  toggleForm();
}

// Login Functionality
function logIn(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const storedData = JSON.parse(localStorage.getItem(email));

  if (storedData && storedData.password === password) {
    alert("Login successful!");
    localStorage.setItem("currentUser", JSON.stringify(storedData));
    displayUsername(storedData.username);
    window.location.href = 'login.html'; // Redirect to login.html on successful login
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

// Display Username in Navbar
function displayUsername(username) {
  document.getElementById("displayedUsername").textContent = username;
  document.getElementById("usernameDisplay").style.display = "block";
  document.getElementById("loginSignupLink").style.display = "none";
}

// Logout Functionality
function logOut() {
  localStorage.removeItem("currentUser");
  document.getElementById("usernameDisplay").style.display = "none";
  document.getElementById("loginSignupLink").style.display = "block";
  alert("You have logged out successfully.");
  window.location.href = 'index.html'; // Redirect to home page or login page
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const elementsToToggle = [
    document.body,
    document.querySelector(".navbar"),
    document.querySelector(".footer"),
    document.querySelector(".hero-header"),
    ...document.querySelectorAll(".btn-outline-light"),
    ...document.querySelectorAll(".form-control"),
    ...document.querySelectorAll(".service-item")
  ];

  // Check if dark mode was previously enabled
  if (localStorage.getItem("visionDarkMode") === "enabled") {
    toggleDarkMode(true);
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", function () {
    toggleDarkMode(darkModeToggle.checked);
  });

  function toggleDarkMode(enable) {
    elementsToToggle.forEach(el => {
      el.classList.toggle("vision-dark-mode", enable);
    });

    localStorage.setItem("visionDarkMode", enable ? "enabled" : "disabled");
  }
});