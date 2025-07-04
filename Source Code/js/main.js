overlay = document.querySelector(".overlay");
ul = document.querySelector(".ul");
diff = document.querySelector(".diff");
diffToggle = document.querySelector("#diff-toggle");
more = document.querySelector("#more");
diffToggle.addEventListener("click", () => {
  diff.classList.add("active");
  overlay.classList.add("active");
});
more.addEventListener("click", () => {
  ul.classList.add("active");
  overlay.classList.add("active");
});
overlay.addEventListener("click", () => {
  ul.classList.remove("active");
  diff.classList.remove("active");
  overlay.classList.remove("active");
});

search = document.querySelector("#ss");
searchIcon = document.querySelector("#search-icon");
searchbar = document.querySelector("#searchbar");
absolute = document.querySelector(".absolute");
search.addEventListener("focus", () => {
  searchIcon.style.color = "#1d9bf0";
  searchbar.style.border = "1px solid #1d9bf0";
  absolute.style.display = "block";
});

search.addEventListener("focusout", () => {
  searchIcon.style.color = "#71767b";
  searchbar.style.border = "1px solid transparent";
  absolute.style.display = "none";
});
document.querySelector("#log").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("next").click();
  }
});
document.querySelector("#pass-word").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("login-btn").click();
  }
});

document.querySelector(".login-input").addEventListener("click", function () {
  document.querySelector(".login-input").style.border = "2px solid #1d9bf0";
  document.querySelector("#log").style.height = "25px";
  document.querySelector("#login-small").style.position = "relative";
  document.querySelector("#login-small").style.color = "#1d9bf0";
  document.querySelector("#login-small").style.fontSize = "0.8rem";
  document.querySelector("#login-small").style.top = "0";
  document.querySelector("#login-small").style.left = "0";
  document.querySelector("#log").focus();
});
document.querySelector("#log").addEventListener("focusout", function () {
  if (
    document.querySelector("#log").value == "" ||
    document.querySelector("#log").value == " "
  ) {
    document.querySelector(".login-input").style.border = "1px solid #71767b";
    document.querySelector("#log").style.height = "0";
    document.querySelector("#login-small").style.position = "absolute";
    document.querySelector("#login-small").style.color = "#71767b";
    document.querySelector("#login-small").style.fontSize = "1rem";
    document.querySelector("#login-small").style.top = "33%";
    document.querySelector("#login-small").style.left = "3%";
  }
});

document.querySelector(".pass-put").addEventListener("click", function () {
  document.querySelector(".pass-put").style.border = "2px solid #1d9bf0";
  document.querySelector("#pass-word").style.height = "25px";
  document.querySelector("#pass-small").style.position = "relative";
  document.querySelector("#pass-small").style.color = "#1d9bf0";
  document.querySelector("#pass-small").style.fontSize = "0.8rem";
  document.querySelector("#pass-small").style.top = "0";
  document.querySelector("#pass-small").style.left = "0";
  document.querySelector("#pass-word").focus();
});
document.querySelector("#pass-word").addEventListener("focus", function () {
  document.querySelector("#eye-open").style.display = "block";
});
if (
  document.querySelector("#pass-word").value != "" ||
  document.querySelector("#pass-word").value != " "
) {
  document.querySelector(".pass-put").style.border = "2px solid #1d9bf0";
  document.querySelector("#pass-word").style.height = "25px";
  document.querySelector("#pass-small").style.position = "relative";
  document.querySelector("#pass-small").style.color = "#1d9bf0";
  document.querySelector("#pass-small").style.fontSize = "0.8rem";
  document.querySelector("#pass-small").style.top = "0";
  document.querySelector("#pass-small").style.left = "0";
  document.querySelector("#eye-open").style.display = "block";
}
document.querySelector("#pass-word").addEventListener("focusout", function () {
  if (
    document.querySelector("#pass-word").value == "" ||
    document.querySelector("#pass-word").value == " "
  ) {
    document.querySelector(".pass-put").style.border = "1px solid #71767b";
    document.querySelector("#pass-word").style.height = "0";
    document.querySelector("#pass-small").style.position = "absolute";
    document.querySelector("#pass-small").style.color = "#71767b";
    document.querySelector("#pass-small").style.fontSize = "1rem";
    document.querySelector("#pass-small").style.top = "33%";
    document.querySelector("#pass-small").style.left = "3%";
    document.querySelector("#eye-open").style.display = "none";
  }
});
function show_password() {
  document.querySelector("#pass-word").setAttribute("type", "text");
  document.querySelector("#pass-word").focus();
  document.querySelector("#eye-close").style.display = "block";
  document.querySelector("#eye-open").style.display = "none";
}
function hide_password() {
  document.querySelector("#pass-word").setAttribute("type", "password");
  document.querySelector("#pass-word").focus();
  document.querySelector("#eye-close").style.display = "none";
  document.querySelector("#eye-open").style.display = "block";
}

function hide_login() {
  document.querySelector("#l-cont").style.display = "none";
}
function show_login() {
  document.querySelector("#l-cont").style.display = "flex";
}
function email_pass() {
  if (document.querySelector("#log").value == "admin@example.com") {
    document.querySelector(".login-password").style.display = "block";
    document.querySelector(".login").style.display = "none";
  } else {
    document.querySelector("#login-alert").style.display = "block";
  }
}

function login() {
  // if (
  //   document.querySelector("#pass-email").value == "admin@gmail.com" &&
  //   document.querySelector("#pass-word").value == "admin"
  // ) {
  //   window.open("main.html", "_self");
  // }

  if (document.querySelector("#pass-word").value != "admin") {
    document.querySelector("#pass-alert").style.display = "block";
    document.querySelector("#pass-alert-p").innerHTML = "Wrong password!";
  } else {
    window.open("main.html", "_self");
  }
}
function hide_signup() {
  document.querySelector("#sign").style.display = "none";
}
function show_s() {
  document.querySelector("#sign").style.display = "flex";
}
