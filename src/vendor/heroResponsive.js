const large = document.querySelectorAll("#heroImg");
const small = document.querySelectorAll("#heroImg--mobile");

large.forEach((a) => {
  let width = window.innerWidth;
  width > 800 ? (a.style.display = "block") : (a.style.display = "none");
});

small.forEach((b) => {
  let width = window.innerWidth;
  width > 800 ? (b.style.display = "none") : (b.style.display = "block");
});
