window.addEventListener('DOMContentLoaded', function () {
  const menus = document.querySelectorAll('.navbar .menu');
  const cart = document.querySelector('.cart');
  const search = document.querySelector('.icon-search');
  const modalSearch = document.querySelector('.modal-search');
  const formSearch = document.querySelector('.form-search');
  const btnNavbarMobile = document.querySelector('.navbar-mobile-icon');
  const btnLoginMobile = document.querySelector('.login-mobile-icon');
  const modalLogin = document.querySelector('.modal-login');
  const btnAuths = document.querySelectorAll('.btn-auth');
  const navbarPc = document.querySelector('.navbar-pc');
  const slideScaleWrap = document.querySelector('.slide-scale-wrap');
  const backTop = document.querySelector('.back-top');
  const videoContent = document.querySelector('.video-content');
  const playVideo = document.querySelector('.play-video');
  const header = document.querySelector('header');
  const persons = document.querySelectorAll('.person');
  const counters = document.querySelectorAll('.counter');

  function handleMenubars() {
    menus.forEach((menu) => {
      const submenu = menu.querySelector('.submenu');
      menu.addEventListener('mouseenter', function () {
        if (submenu) {
          const ul = submenu.querySelector('ul');
          submenu.style.height = `${ul.offsetHeight}px`;
          setTimeout(() => {
            submenu.style.overflow = 'visible';
          }, 700);
        }
      });
      menu.addEventListener('mouseleave', function () {
        if (submenu) {
          submenu.style.height = '0px';
          const t = setInterval(() => {
            if (submenu.style.overflow === 'visible') {
              submenu.style.overflow = 'hidden';
              clearInterval(t);
            }
          }, 100);
        }
      });
    });
  }

  function handleCart() {
    cart.addEventListener('mouseenter', function () {
      const cartList = cart.querySelector('.cart-list');
      const ul = cartList.querySelector('ul');
      ul.style.opacity = '1';
      cartList.style.height = `${cartList.scrollHeight}px`;
      setTimeout(() => {
        cartList.style.overflow = 'visible';
      }, 200);
    });
    cart.addEventListener('mouseleave', function () {
      const cartList = cart.querySelector('.cart-list');
      const ul = cartList.querySelector('ul');
      ul.style.opacity = '0';
      cartList.style.height = '0px';
      const t = setInterval(() => {
        if (cartList.style.overflow === 'visible') {
          cartList.style.overflow = 'hidden';
          clearInterval(t);
        }
      }, 100);
    });
  }

  function handleModalSearch() {
    search.addEventListener('click', function () {
      modalSearch.classList.add('active');
      const input = modalSearch.querySelector('input');
      input.focus();
    });
    formSearch.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }

  function getParentNodeByClass(childrenNode, parentClass) {
    childrenNode = childrenNode.parentNode;
    while (1) {
      if (childrenNode === document.body) return null;
      if (childrenNode.hasAttribute('class') && childrenNode.className.includes(parentClass)) {
        let className = childrenNode.className.split(' ').filter((name) => name.includes(parentClass));
        let isTrue = className.some((name) => name === parentClass);
        if (isTrue) return childrenNode;
        else childrenNode = childrenNode.parentNode;
      } else childrenNode = childrenNode.parentNode;
    }
  }

  function handleClickSubmenuMobile() {
    const menuLevel = document.querySelectorAll('.menu-mobile-list div[data-level]');
    let levels = [];
    menuLevel.forEach((item) => {
      let level = item.dataset.level;
      if (!levels.includes(level)) {
        levels.push(level);
      }
    });
    for (let i = 0; i < levels.length; i++) {
      const btnLevels = document.querySelectorAll(`.menu-mobile-list div[data-level="${levels[i]}"]`);
      btnLevels.forEach((btn, j) => {
        btn.addEventListener('click', function () {
          if (+levels[i] === 1) {
            const icon = btn.querySelector(`i[data-level="${levels[i]}"]`);
            btnLevels.forEach((item, k) => {
              item.parentElement.classList.remove('active');
              const ic = item.querySelector(`i[data-level="${levels[i]}"]`);
              if (ic.classList.contains('fa-circle-minus') && k !== j) {
                ic.classList.remove('fa-circle-minus');
                ic.classList.add('fa-circle-plus');
                const submenuList = item.nextElementSibling;
                submenuList.style.height = `0px`;
              }
            });
            icon.classList.toggle('fa-circle-minus');
            icon.classList.toggle('fa-circle-plus');
            btn.querySelector('i').classList.contains('fa-circle-plus')
              ? btn.parentElement.classList.remove('active')
              : btn.parentElement.classList.add('active');
          }

          const submenuList = getParentNodeByClass(btn, 'menu-mobile-item').querySelector(
            '.sub-menu-mobile-list'
          );

          if (+levels[i] > 1) {
            let change = false;
            const icon = btn.querySelector(`i[data-level="${levels[i]}"]`);
            btnLevels.forEach((item, k) => {
              item.parentElement.classList.remove('active');
              const ic = item.querySelector(`i[data-level="${levels[i]}"]`);
              if (ic.classList.contains('fa-circle-minus') && k !== j) {
                change = true;
                ic.classList.remove('fa-circle-minus');
                ic.classList.add('fa-circle-plus');
                const submenuL = item.nextElementSibling;
                submenuL.style.height = `0px`;
              }
            });
            icon.classList.toggle('fa-circle-minus');
            icon.classList.toggle('fa-circle-plus');
            btn.querySelector('i').classList.contains('fa-circle-plus')
              ? btn.parentElement.classList.remove('active')
              : btn.parentElement.classList.add('active');

            const sub = btn.nextElementSibling;

            if (icon.classList.contains('fa-circle-minus')) {
              let submenuListHeight = submenuList.offsetHeight;
              if (change) {
                let tt = 0;
                const li = getParentNodeByClass(btn, 'sub-menu-mobile-list').children;
                [...li].forEach((el) => {
                  if (!el.querySelector('.sub-menu-mobile-list')?.offsetHeight) {
                    tt += +el.offsetHeight;
                  }
                  if (el.querySelector('.fa-circle-minus')) {
                    tt += Number(el.scrollHeight + el.querySelector('.sub-menu-mobile-list').scrollHeight);
                  }
                });
                submenuList.style.height = `${++tt}px`;
              } else submenuList.style.height = `${submenuListHeight + sub.scrollHeight}px`;
              sub.style.height = `${sub.scrollHeight}px`;
            } else {
              submenuList.style.height = `${submenuList.scrollHeight - sub.scrollHeight}px`;
              sub.style.height = '0px';
            }
          } else {
            const icon = btn.querySelector(`i[data-level="${levels[i]}"]`);
            if (icon.classList.contains('fa-circle-minus'))
              submenuList.style.height = `${++submenuList.scrollHeight}px`;
            else {
              submenuList.style.height = `0px`;
            }
          }
          const menuMobileWrap = document.querySelector('.menu-mobile-wrapper');
          const menuMobile = menuMobileWrap.querySelector('.menu-mobile');
          setTimeout(() => {
            const height = menuMobile.scrollHeight;
            if (height > 350) {
              menuMobileWrap.style.height = '350px';
              menuMobile.style.height = '350px';
            } else {
              const heightMenu = document.querySelector('.menu-mobile-list').offsetHeight;
              menuMobileWrap.style.height = `${heightMenu}px`;
              menuMobile.style.height = `${heightMenu}px`;
            }
          }, 310);
        });
      });
    }
  }

  function handleToggleMenuMobile() {
    const menuMobileWrap = document.querySelector('.menu-mobile-wrapper');
    const menuMobile = menuMobileWrap.querySelector('.menu-mobile');
    btnNavbarMobile.addEventListener('click', function () {
      menuMobileWrap.classList.toggle('active');
      menuMobile.classList.toggle('active');
      if (menuMobileWrap.classList.contains('active')) {
        menuMobileWrap.style.height = `${menuMobileWrap.scrollHeight}px`;
        menuMobile.style.height = `${menuMobile.scrollHeight}px`;
      } else {
        menuMobileWrap.style.height = '0px';
        menuMobile.style.height = '0px';
      }
    });
  }

  function handleToggleLogin() {
    btnLoginMobile.addEventListener('click', function () {
      modalLogin.classList.add('active');
    });
  }

  function handleToggleAuth() {
    btnAuths.forEach((btn) => {
      btn.addEventListener('click', function () {
        btnAuths.forEach((item) => {
          item.classList.remove('active');
          const tab = item.dataset.tab;
          const auth = document.querySelector(`.auth-content [data-tab="${tab}"]`);
          auth.classList.remove('active');
        });
        const tab = btn.dataset.tab;
        const auth = document.querySelector(`.auth-content [data-tab="${tab}"]`);
        auth.classList.add('active');
        btn.classList.add('active');
      });
    });
  }

  function handleToogleNavbarPc() {
    navbarPc.addEventListener('click', function () {
      navbarPc.nextElementSibling.classList.add('active');
    });
  }

  function handleClickBody() {
    document.body.addEventListener('click', function (e) {
      const target = e.target;
      // console.log(target);
      if (target.classList.contains('close-modal-search')) {
        modalSearch.classList.remove('active');
        return;
      }
      if (!target.parentNode.classList.contains('form-search') && !target.classList.contains('icon-search')) {
        if (modalSearch.classList.contains('active')) {
          modalSearch.classList.remove('active');
          return;
        }
      }
      if (target.classList.contains('close-modal-login')) {
        modalLogin.classList.remove('active');
        return;
      }
      if (!getParentNodeByClass(target, 'auth-wrapper') && !target.classList.contains('login-mobile-icon')) {
        if (modalLogin.classList.contains('active')) {
          modalLogin.classList.remove('active');
          return;
        }
      }
      if (target.classList.contains('icon-close-navbar-pc')) {
        navbarPc.nextElementSibling.classList.remove('active');
        return;
      }
      if (
        !getParentNodeByClass(target, 'modal-navbar-pc') &&
        !target.classList.contains('navbar-pc') &&
        !target.classList.contains('modal-navbar-pc') &&
        !target.classList.contains('video-content')
      ) {
        navbarPc.nextElementSibling.classList.remove('active');
        return;
      }
      if (target.classList.contains('video-content')) {
        videoContent.classList.remove('active');
      }
    });
  }

  function handlePlayVideo() {
    playVideo.addEventListener('click', function () {
      videoContent.classList.add('active');
    });
  }

  function handleSlideScale() {
    const slideScaleItems = slideScaleWrap.querySelectorAll('.slide-scale-item');
    const btnNext = slideScaleWrap.querySelector('.btn-next-slide');
    const btnPrev = slideScaleWrap.querySelector('.btn-prev-slide');
    slideScaleItems[0].style.display = 'block';
    let index = 1,
      timerId;
    function slideScale() {
      slideScaleItems.forEach((item) => {
        item.style.display = 'none';
      });
      slideScaleItems[index].style.display = 'block';
      index++;
      if (index >= slideScaleItems.length) index = 0;
    }
    timerId = setInterval(() => {
      slideScale();
    }, 4000);

    function handleBtnChangeSlide() {
      clearInterval(timerId);
      slideScale();
      timerId = setInterval(() => {
        slideScale();
      }, 4000);
    }

    btnNext.addEventListener('click', handleBtnChangeSlide);
    btnPrev.addEventListener('click', handleBtnChangeSlide);
  }
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function handleBackToTop() {
    window.addEventListener(
      'scroll',
      debounce(function () {
        if (window.scrollY >= 800) {
          backTop.classList.add('active');
          header.classList.add('active');
          document.body.style.marginTop = '80px';
        } else {
          backTop.classList.remove('active');
          if (window.scrollY === 0) {
            header.classList.remove('active');
            document.body.style.marginTop = '0px';
          }
        }
      }, 100)
    );

    backTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  function handleHoverCartPerson() {
    persons.forEach((person) => {
      person.addEventListener('mouseenter', function () {
        const cart = person.querySelector('div');
        cart.style.opacity = '1';
        cart.style.visibility = 'visible';
        cart.style.height = `${cart.scrollHeight}px`;
      });
      person.addEventListener('mouseleave', function () {
        const cart = person.querySelector('div');
        cart.style.height = '0px';
        cart.style.opacity = '0';
        cart.style.visibility = 'hidden';
      });
    });
  }

  function handleCounter() {
    let interval = 2000;
    if ('IntersectionObserver' in window) {
      let CounterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            let startValue = 0;
            let endValue = +entry.target.dataset.value;
            let duration = Math.floor(interval / endValue);
            let timer = setInterval(() => {
              startValue += 2;
              if (startValue >= endValue) {
                entry.target.textContent = endValue;
                clearTimeout(timer);
              } else entry.target.textContent = startValue;
            }, duration);
            observer.unobserve(entry.target);
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        }
      );
      counters.forEach((counter) => {
        CounterObserver.observe(counter);
      });
    } else {
      //
    }
  }

  handleMenubars();
  handleCart();
  handleModalSearch();
  handleClickBody();
  handleClickSubmenuMobile();
  handleToggleMenuMobile();
  handleToggleLogin();
  handleToggleAuth();
  handleToogleNavbarPc();
  handleSlideScale();
  handleBackToTop();
  handlePlayVideo();
  handleHoverCartPerson();
  handleCounter();
});
