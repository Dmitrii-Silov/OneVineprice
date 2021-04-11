
// const swiper = new Swiper('.swiper-container', {
//    // Optional parameters
//    direction: 'horizontal',
//    loop: true,
 
//    // If we need pagination
//    pagination: {
//      el: '.swiper-pagination',
//    },
 
//    // Navigation arrows
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
 
//    // And if we need scrollbar
//    // scrollbar: {
//    //   el: '.swiper-scrollbar',
//    // },
//  });

//  function ibg(){

//   $.each($('.ibg'), function(index, val) {
//   if($(this).find('img').length>0){
//   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
//   }
//   });
//   }
  
//   ibg();

//IBG///////////////////

  function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();

//IBG///////////////////

// Filter block card/////////////////
//     const filterBox = document.querySelectorAll('.filter__card');

// document.querySelector('nav').addEventListener('click', (event) => {

//     if (event.target.tagName !== 'LI') return false;
//     let filterClass = event.target.dataset['filt'];

//     filterBox.forEach(elem => {
//         elem.classList.remove('hide');
//         if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
//             elem.classList.add('hide');
//         }
//     });

// });

// Filter block card////////////////

// BURGER MENU//////////////////////

$(document).ready(function() {
  $('.header__burger').click(function(event) {
     $('.header__burger,.fullscreen__menu').toggleClass('active');
     $('body').toggleClass('lock');
  });
});

// BURGER MENU//////////////////////
