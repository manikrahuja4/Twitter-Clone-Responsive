document.querySelector(".user-info-hidden").style.display = "none";
function show() {
  if (document.querySelector(".user-info-hidden").style.display == "none") {
    document.querySelector(".user-info-hidden").style.display = "flex";
    // document.querySelector('#overlay').style.display='block';
  } else {
    document.querySelector(".user-info-hidden").style.display = "none";
  }
}
document
  .querySelector("#home-searchbar")
  .addEventListener("click", function () {
    document.querySelector("#home-search-icon").style.color = "#1d9bf0";
    document.querySelector("#home-searchbar").style.border =
      "1px solid #1d9bf0";
    document.querySelector(".absolute").style.display = "block";
  });

document.querySelector("#home-ss").addEventListener("focusout", function () {
  document.querySelector("#home-search-icon").style.color = "#71767b";
  document.querySelector("#home-searchbar").style.border = "1px solid transparent";
  document.querySelector(".absolute").style.display = "none";
});
function show_more() {
  if (document.querySelector(".more-div").style.display == "none") {
    document.querySelector(".more-div").style.display = "flex";
    document.querySelectorAll(".more-ul").style.display = "flex";
    // document.querySelector('#overlay').style.display='block';
  } else {
    document.querySelector(".more-div").style.display = "none";
    document.querySelectorAll(".more-ul").style.display = "none";
  }
}

