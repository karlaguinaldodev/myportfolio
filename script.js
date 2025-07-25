document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px",
};

function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

const heroTitle = document.querySelector(".intro-text h1");
if (heroTitle) {
  window.addEventListener("load", () => {
    typeWriter(heroTitle, heroTitle.textContent);
  });
}

const skillElements = document.querySelectorAll(".skills li");
skillElements.forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    skill.style.transform = "scale(1.1) rotate(0deg)";
  });

  skill.addEventListener("mouseleave", () => {
    skill.style.transform = "scale(1) rotate(0deg)";
  });
});

const styles = document.createElement("style");
styles.textContent = `
    .fade-up {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }

    .fade-up-show {
        opacity: 1;
        transform: translateY(0);
    }

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }

    .profile-pic {
        animation: float 3s ease-in-out infinite;
    }

    .nav-links a:hover {
        animation: pulse 1s infinite;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(styles);

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    const img = card.querySelector("img");
    if (img) {
      img.style.transform = "scale(1.05) rotate(0deg)";
    }
  });

  card.addEventListener("mouseleave", (e) => {
    const img = card.querySelector("img");
    if (img) {
      img.style.transform = "scale(1) rotate(0deg)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function (event) {
    event.stopPropagation();
    navLinks.classList.toggle("show");
  });

  navLinks.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });

  window.addEventListener("scroll", function () {
    navLinks.classList.remove("show");
  });
});

let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.style.top = "-60px";
  });
});

function openModal(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = img.dataset.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
