// var nav = document.querySelector("nav");

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 100) {
//     nav.classList.add("bg-dark", "navbar-dark");
//   } else {
//     nav.classList.remove("bg-dark", "navbar-light");
//   }
// });
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
