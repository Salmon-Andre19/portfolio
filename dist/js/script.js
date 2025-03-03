// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar Hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.cheked = false;
}

// Alert sukses close
const alertCLose = document.querySelector(".alert-del");

alertCLose.addEventListener("click", function () {
  alertCLose.parentElement.classList.add("hidden");
});

// contact from
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzmAJ3sVmXFC-rcIY7J3m2zTNdjRah8-C-VWeoDUHt3jUTkXbFXuxSJczCk94URLzhg/exec";
const form = document.forms["salmon-contact-form"];
const buttonKirim = document.querySelector(".button-kirim");
const buttonLoading = document.querySelector(".button-loading");
const alertSukses = document.querySelector(".alert-sukses");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // tampilkan tombol loading
  // hilangkan tombol kirim
  buttonLoading.classList.toggle("hidden");
  buttonKirim.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim hilangkan tombol loading
      buttonLoading.classList.toggle("hidden");
      buttonKirim.classList.toggle("hidden");
      alertSukses.classList.toggle("hidden");
      alertSukses.classList.add("flex");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
