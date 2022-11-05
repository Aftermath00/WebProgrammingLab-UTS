// Link to connect contact form to spreadsheet
const scriptURL = "https://script.google.com/macros/s/AKfycbwueZ4ubziRCe5YFjzPcI1yj2DMUkmIsnIx-mSf2NEHPq1yJQnRkzm1llEz0agSciir/exec";
const form = document.forms["asilmoron-contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // submit clicked, button gone
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      //reset
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
// end

function _class(name) {
  return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function () {
    _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");

    _class("tab-line")[0].style.top = "calc(80px + ${i*50}px)";

    _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");

    _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
  });
}
