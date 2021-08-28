// 手機板選單Js
function init() {
  // console.log('HelloWord');
  const showMenu = document.querySelector('.showMenu');
  showMenu.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('menu-show');
  });
}

init();

// Swiper
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.mySwiper', {
  // 設置slider容器能夠同時顯示的slides數量(carousel模式)
    // 可以設置為數字(可為小數，小數不可loop)，或者 'auto'則自動根據slides的寬度來設定數量
    slidesPerView: 'auto',
    // 在slide之間設置距離(單位px)
    spaceBetween: 30,
    // 在carousel mode下定義slides的數量多少為一組
    slidesPerGroup: 1,
    autoplay: {
      delay: 3000, // 5秒切换一次
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper(".mySwiper2", {
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        grid: {
          rows: 3,
        },
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
    },
    autoplay: {
      delay: 3000,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// eslint-disable-next-line no-unused-vars
const swiper3 = new Swiper('.mySwiper3', {
  // 設置slider容器能夠同時顯示的slides數量(carousel模式)
    // 可以設置為數字(可為小數，小數不可loop)，或者 'auto'則自動根據slides的寬度來設定數量
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 4.3,
        spaceBetween: 30,
      },
    },
    // 在slide之間設置距離(單位px)
    // spaceBetween: 30,
    // 在carousel mode下定義slides的數量多少為一組
    slidesPerGroup: 1,
    autoplay: {
      delay: 3000, // 5秒切换一次
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// jQuery日期套件
$(() => {
  $('#appointmentDate').datepicker();
});

const swiper4 = new Swiper(".mySwiper4", {
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 72,
        grid: {
          rows: 4,
        },
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 3000,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
