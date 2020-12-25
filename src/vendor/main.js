let large = document.querySelectorAll("#heroImg");
let small = document.querySelectorAll("#heroImg--mobile");

large.forEach((a) => {
  let width = window.innerWidth;

  if (width > 800) {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
});

small.forEach((b) => {
  let width = window.innerWidth;

  if (width > 800) {
    b.style.display = "none";
  } else {
    b.style.display = "block";
  }
});
