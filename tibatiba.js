// animated tab
let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");

    tabIndicator.style.left = "calc(calc(100% / 3) * ${i})";
  });
}

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
