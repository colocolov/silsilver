// слайдер на главной
const screenWidth = window.screen.width;
let quant;
let dimen;
if (screenWidth < 992) {
  quant = 2;
  dimen = 15;
} else {
  quant = 3.6;
  dimen = 30;
}
const headerSlider = new Swiper(".first-slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  slidesPerView: quant,
  spaceBetween: dimen,
  preloadImages: false,
});
//----- END

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

// мобильное меню

// проверка, является ли уствройство мобильным
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
if (isMobile.any()) {
  document.body.classList.add("_touch");
}

// меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelectorAll(".menu__item");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
// закрытие при клике
menuLink.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  });
});

// // слайдер отзывов
let reviewsSlider = new Swiper(".reviews__sliders", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 1200,
  direction: "vertical",
});
//----- END
