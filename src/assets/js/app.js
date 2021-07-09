//= ../../../node_modules/jquery-parallax.js/parallax.js

$(function () {
  //= components/parallax.js

  /* Parallax 
    ================*/
  $('#parallax').parallax({ imageSrc: 'assets/images/parallax.jpg' })
  $('#intro-parallax').parallax({ imageSrc: 'assets/images/intro.jpg' })

  /* Fixed Header 
    ================*/
  let header = $('#header')
  let intro = $('#intro')
  let introH = intro.innerHeight()
  let scrollPos = $(window).scrollTop()

  checkScroll(scrollPos, introH)

  $(window).on('scroll resize', function () {
    let introH = intro.innerHeight()
    scrollPos = $(this).scrollTop()

    checkScroll(scrollPos, introH)
  })

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH / 2) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }

  /* Smooth scroll 
    ==================*/
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault()

    let elementId = $(this).data('scroll')
    let elementOffset = $(elementId).offset().top

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      1000
    )

    // $(burger).toggleClass('burger--active')
    // $(nav).toggleClass('nav--active')
  })

  /* Burger menu 
    ========================*/
  // let nav = document.querySelector('#nav')
  // let burger = document.querySelector('#burger')

  // $(burger).on('click', function (event) {
  //     event.preventDefault()
  //     $(burger).toggleClass('burger--active')
  //     $(nav).toggleClass('nav--active')
  // })

  /* Filter
    ========================*/
  let filter = $('[data-filter]')
  filter.on('click', function (event) {
    event.preventDefault()

    let cat = $(this).data('filter')
    filter.each(function () {
      $(this).removeClass('category__item--active')
    })
    $(this).addClass('category__item--active')

    if (cat == 'all') {
      $('[data-cat]').removeClass('cards__item--hidden')
    } else {
      $('[data-cat]').each(function () {
        let itemCat = $(this).data('cat')

        if (itemCat != cat) {
          $(this).addClass('cards__item--hidden')
        } else {
          $(this).removeClass('cards__item--hidden')
        }
      })
    }
  })
})
