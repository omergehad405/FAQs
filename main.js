let img = document.querySelector("#img");

if (window.innerWidth >= 768 && window.innerWidth <= 1838) {
  img.src = "/images/background-pattern-desktop.svg";
} else {
  img.src = "/images/background-pattern-mobile.svg";
}

let showBtn = Array.from(document.querySelectorAll(".box .question img"));

showBtn.map((show) => {
  show.addEventListener("click", () => {
    show.classList.toggle("active");

    if (show.classList.contains("active")) {
      show.src = "/images/icon-minus.svg";
      show.parentElement.parentElement.getElementsByClassName(
        "answer"
      )[0].style.display = "block";
    } else {
      show.src = "/images/icon-plus.svg";
      show.parentElement.parentElement.getElementsByClassName(
        "answer"
      )[0].style.display = "none";
    }
  });
});
