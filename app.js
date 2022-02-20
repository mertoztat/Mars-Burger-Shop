const menu = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");

menu.onclick = () => {
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
};

// Dark Mode
const darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 1000,
  reset: true,
});

sr.reveal(
  `.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`,
  {
    interval: 100,
  }
);
