const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

/*-----menu show-----*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*------remove menu mobile-----*/
const navLink = document.querySelectorAll(".nav__link");

const LinkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", LinkAction));

/*-----change bg header----*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.add("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*-------calculate--------*/
const calculateForm = document.getElementById("calculate-form"),
  calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();
  if (calculateCm.value === "" || calculateKg.value === "") {
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    calculateMessage.textContent = "Fill in the Height and Weight 😶‍🌫️";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm));

    if (bmi < 18.5) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😣`;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green"),
        (calculateMessage.textContent = `Your BMI is ${bmi} and you are Healthy 😍`);
    } else {
      calculateMessage.classList.add("color-green"),
        (calculateMessage.textContent = `Your BMI is ${bmi} and you are Overweight😥`);
    }
    calculateCm.value = "";
    calculateKg.value = "";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);

/*--------email js-------*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactUser.value === "") {
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");
    contactMessage.textContent = "You must enter your email 👆";

    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    console.log("Sending email...");
    emailjs
      .sendForm(
        "service_0d6sqd4",
        "template_jlvism3",
        "#contact-form",
        "bW9yuAU0hWs67pehA"
      )
      .then(() => {
        contactMessage.classList.add("color-green");
        contactMessage.textContent = "You registered successfully 💪";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      })
      .catch((error) => {
        console.error("Email.js error:", error);
        contactMessage.classList.remove("color-green");
        contactMessage.classList.add("color-red");
        contactMessage.textContent = "Failed to send email. Try again later.";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      });
    contactUser.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

/*----- scroll section active link-------*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const scrollup = () => {
  const scrollup = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollup);

// Get elements
const registerButton = document.querySelector(".nav__button");
const registerForm = document.getElementById("register-form");
const formCloseButton = document.getElementById("form-close");
const registrationForm = document.getElementById("registration-form");

// Show the form when "Register Now" is clicked
registerButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default behavior
  registerForm.style.display = "flex"; // Make the form visible
});

// Hide the form when the "Close" button is clicked
formCloseButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent any default behavior
  registerForm.style.display = "none"; // Hide the form
});

// Handle form submission
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get form data
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Perform your desired action here (e.g., save data, send to server, etc.)
  console.log("Email:", email);
  console.log("Password:", password);

  // Optionally show a success message
  alert("Registration successful!");

  // Hide the form after submission
  registerForm.style.display = "none";
});

registerButton.addEventListener("click", () => {
  registerForm.classList.add("show");
});

formCloseButton.addEventListener("click", () => {
  registerForm.classList.remove("show");
});
