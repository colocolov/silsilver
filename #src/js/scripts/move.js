const benInfo = document.querySelectorAll(".benefits__info");
const scrWidth = window.screen.width;
const moveText = function () {
  benInfo.forEach((item) => {
    const benText = item.querySelector(".benefits__text");
    const benIcon = item.querySelector(".benefits__icon");
    benText.remove();
    const div = document.createElement("div");
    div.classList.add("benefits__text");
    div.innerHTML = benText.textContent;
    benIcon.append(div);
  });
};
if (scrWidth <= 768) {
  moveText();
}
