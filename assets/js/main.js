
var owl = $(".hero");
owl.owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  rtl: true,
  nav: true,
  dots: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  center: true,
  margin: 50, // قيمة افتراضية يمكن تعديلها في الريسبونسيف
  stagePadding: 200,
  responsive: {
    0: {
      items: 1,
      stagePadding: 70,
      margin: 50,
    },
    576: {
      items: 1,
      stagePadding: 80,
      margin: 20,
    },
    768: {
      items: 1,
      stagePadding: 100,
      margin: 30,
    },
    992: {
      items: 1,
      stagePadding: 150,
      margin: 40,
    },
    1200: {
      items: 1,
      stagePadding: 250,
      margin: 60,
    },
    1400: {
      items: 1,
      stagePadding: 350,
      margin: 80,
    },
    1600: {
      items: 1,
      stagePadding: 500,
      margin: 100,
    }
  }
});

// $(".play").on("click", function () {
//   owl.trigger("play.owl.autoplay", [1000]);
// });
// $(".stop").on("click", function () {
//   owl.trigger("stop.owl.autoplay");
// });
let started = false; // لضمان العد مرة واحدة فقط

window.addEventListener("scroll", function () {
  const counters = document.querySelectorAll(".counter");
  const section = document.querySelector(".stats"); // القسم الذي يحتوي العدادات

  if (window.scrollY && !started) {
    started = true;

    counters.forEach(counter => {
      let count = 0;
      const target = +counter.dataset.target;

      const step = Math.ceil(target / 300); // خطوة العد
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.textContent = `+ ${count}`;
      }, 10);
    });
  }
});

