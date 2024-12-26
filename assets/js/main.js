//MainSlider
$("#mainslider").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
//Brands
$("#brandslider").owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 6,
    },
  },
});
let owl1 = $("#brandslider");
owl1.owlCarousel();
// Go to the next item
$(".am-next2").click(function () {
  owl1.trigger("next.owl.carousel");
});
// Go to the previous item
$(".am-prev2").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl1.trigger("prev.owl.carousel", [300]);
});
//Newarrical
$("#newarrivalslider").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 4,
    },
  },
});
let owl = $("#newarrivalslider");
owl.owlCarousel();
// Go to the next item
$(".am-next").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".am-prev").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});
//Hotdelas
$("#hotideals").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
let owl3 = $("#hotideals");
owl3.owlCarousel();
// Go to the next item
$(".am-next3").click(function () {
  owl3.trigger("next.owl.carousel");
});
// Go to the previous item
$(".am-prev3").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl3.trigger("prev.owl.carousel", [300]);
});
