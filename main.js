let btn = document.getElementById("btn-icon");
let uln = document.getElementById("uln");
let home = document.getElementById("home");

btn.addEventListener("click", function () {
  btn.classList.toggle("toggle-i");
  uln.classList.toggle("toggle");
});
console.log(uln);
let btn2 = document.getElementById("btn2");

window.onscroll = function () {
  if (scrollY >= 400) {
    btn2.style.display = `block`;
  } else {
    btn2.style.display = `none`;
  }
};

btn2.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// start copy right date
const copyRight_date = document.querySelector(".copyRight_date");
const currentYear = new Date().getFullYear();
copyRight_date.innerHTML = `&copy; hom ${currentYear}. all right reserved`;
// end copy right date
