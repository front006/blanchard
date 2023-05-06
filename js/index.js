const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')

burger.addEventListener('click', function () {
	menu.classList.toggle('header__nav--active')
	burger.classList.toggle('burger--active')
})


const swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 4000,
        loop: true
    },
 
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    
   // area-label
    a11y: {
      paginationBulletMessage: 'Тут название слайда {{index}}',
    }
  });

let gallerySlider = new Swiper(".swiper-right--content", {
	slidesPerView: 3,
	slidesPerGroup: 3,
	  keyboard: {
	  enabled: true,
	  onlyInViewport: true,
	   pageUpDown: true,
		
	},
  
	grid: {
	  rows: 2
	},
	spaceBetween: 30,
	pagination: {
	  el: ".swiper-pagination--right",
	  type: "fraction"
	},
	navigation: {
	  nextEl: ".swiper-btn--next",
	  prevEl: ".swiper-btn--prev"
	},
  
	breakpoints: {
	  320: {
		slidesPerView: 1,
		grid: {
		  rows: 1
		},
		spaceBetween: 0
	  },
	  576: {
		slidesPerView: 2,
		grid: {
		  rows: 1
		},
		spaceBetween: 15
	  },
  
	  1200: {
		slidesPerView: 3,
		grid: {
		  rows: 1
		},
		spaceBetween: 50
	  }
	},
  
	a11y: {
	  prevSlideMessage: 'Предыдущий',
	  nextSlideMessage: 'Следующий',
	}
});

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   var modalButtons = document.querySelectorAll('.js-open-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');

   modalButtons.forEach(function(item){

      item.addEventListener('click', function(e) {

         e.preventDefault();


         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');



         modalElem.classList.add('active');
      });

   }); 


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
      });

   }); 


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
        };
    }, false);



});