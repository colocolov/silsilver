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
