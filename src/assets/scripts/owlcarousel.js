"use strict";

$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayTimePause: true,
  responsive: {
    0: { items: 2, nav: false },
    400: { items: 3, nav: false },
    720: { items: 4, nav: false },
    1000: { items: 5, nav: false },
  },
});
