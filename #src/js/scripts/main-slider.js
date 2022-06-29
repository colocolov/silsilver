// слайдер на главной
const screenWidth = window.screen.width;
// console.log(screenWidth);
let quant;
let dimen;

if (screenWidth < 992) {
  quant = 1;
  dimen = 10;
  // console.log(quant);
} else {
  quant = 3.6;
  dimen = 30;
}
// console.log(quant);

const headerSlider = new Swiper(".first-slider", {
  loop: true,
  autoplay: {
    //пауза между прокруткой
    delay: 3000,
    //закончить на последнем слайде
    // stopOnLastSlide: false,
    //отключить после ручного переключения
    // disableOnInteraction: false,
  },
  //скорость переключения слайдов
  speed: 800,
  // навигация по стрелкам
  // navigation: {
  //   nextEl: ".first-slider__btn-next",
  //   prevEl: ".first-slider__btn-prev",
  //   // disabledClass: "stories-button__unactive",
  //   clickable: true,
  //   // для ппрвильного направления
  // },
  // буллеты
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  //   clickable: true,
  //   dynamicBullets: true,
  // },
  //эффект перехода слайда (только если показ по 1-му слайду)
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  // показ кол-ва слайдов (работает, когда откл effect: "fade")
  slidesPerView: quant,
  // расстояние между слайдами
  spaceBetween: dimen,
  //отложенная загрузка:
  //отключаем презагрузку картинок
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  // переключение при клике на слайд
  slideToClickedSlide: true,
  // отключение прокрутки при наведении мыши
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
  //
});
//----- END
