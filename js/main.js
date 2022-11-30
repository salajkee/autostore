window.addEventListener('DOMContentLoaded', () => {

    try {
        // Меню Гамбургер

        let hamburger = document.querySelector('.hamburger');
        let headerMenu = document.querySelector('.header__menu');

        hamburger.addEventListener('click', (e) => {
            mobileMenu();
        });

        function mobileMenu() {
            hamburger.classList.toggle('active');
            headerMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        }
    } catch(e) {}

    try {
        const addToFav = document.querySelectorAll('.add-to-fav');

        addToFav.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            });
        });
    } catch(e) {}

    try {
        var swipe3 = new Swiper(".best-week__slider", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: ".best-week__slider-btn-next",
                prevEl: ".best-week__slider-btn-prev",
            },
        });

        var swiper4 = new Swiper(".tabs__catalog-slider", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: ".tabs__catalog-slider-btn-next",
                prevEl: ".tabs__catalog-slider-btn-prev",
            },
            breakpoints: {
                650: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1120: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                1350: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                }
            }
        });

        var swiper5 = new Swiper(".s3__slider", {
            slidesPerView: 1,
            fadeEffect: { crossFade: true },
            virtualTranslate: true,
            autoplay: 2500,
            speed: 1000,
            autoplayDisableOnInteraction: true,
            slidersPerView: 1,
            effect: "fade",
            speed: 800,
            autoHeight: true,
            navigation: {
                nextEl: ".s3__slider-btn-next",
                prevEl: ".s3__slider-btn-prev",
            }
        });

        var swiper6 = new Swiper(".recomendation__slider", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: ".recomendation__slider-btn-next",
                prevEl: ".recomendation__slider-btn-prev",
            },
            breakpoints: {
                670: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                888: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1170: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                1440: {
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                }
            }
        });

        var swiper7 = new Swiper(".new-products__slider", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: ".new-products__slider-btn-next",
                prevEl: ".new-products__slider-btn-prev",
            },
            breakpoints: {
                670: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                888: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1170: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    spaceBetween: 10,
                },
                1440: {
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                }
            }
        });

        var swiper8 = new Swiper(".top-products__slider", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: ".top-products__slider-btn-next",
                prevEl: ".top-products__slider-btn-prev",
            },
            breakpoints: {
                670: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                1300: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
            }
        });

        var swiper = new Swiper(".cp__mini-slider", {
            spaceBetween: 0,
            slidesPerView: 5,
            slidesPerGroup: 1,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                320: {
                    direction: "horizontal",
                    spaceBetween: 0,
                },
                500: {
                    direction: "vertical",
                },
                576: {
                   spaceBetween: 10,
                   direction: "vertical",
                },
            }
        });

        var swiper2 = new Swiper(".cp__slider", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            thumbs: {
                swiper: swiper,
            },
        });

        var swiper9 = new Swiper(".similar__slider", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: ".similar__slider-btn-next",
                prevEl: ".similar__slider-btn-prev",
            },
            breakpoints: {
                670: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                888: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1170: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                1440: {
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                }
            }
        });

        var swiper10 = new Swiper(".watched__slider", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: ".watched__slider-btn-next",
                prevEl: ".watched__slider-btn-prev",
            },
            breakpoints: {
                670: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                888: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1170: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                1440: {
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                }
            }
        });

        var swiper11 = new Swiper(".sales-hits__slider", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: ".sales-hits__slider-btn-next",
                prevEl: ".sales-hits__slider-btn-prev",
            },
            breakpoints: {
                670: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                888: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1170: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                1440: {
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                }
            }
        });
    } catch(e) {}

    try {
        const btnGrid = document.querySelector('.catalog__top-btngrid');
        const btnLine = document.querySelector('.catalog__top-btnline');
        const catalogItems = document.querySelector('.catalog__inner-items');
        const catalogItem = document.querySelectorAll('.catalog__inner-item');

        btnGrid.addEventListener('click', () => {
            openBtnGrid(btnGrid, btnLine, catalogItems, catalogItem);
        });

        btnLine.addEventListener('click', () => {
            openBtnLine(btnGrid, btnLine, catalogItems, catalogItem);
        });

        function openBtnGrid(btnLine, btnGrid, catalogItems, catalogItem) {
            btnLine.classList.add('active');
            btnGrid.classList.remove('active');
            catalogItems.classList.remove('line');
            catalogItem.forEach(item => {
                item.classList.remove('line');
            });
        }

        function openBtnLine(btnLine, btnGrid, catalogItems, catalogItem) {
            btnLine.classList.remove('active');
            btnGrid.classList.add('active');
            catalogItems.classList.add('line');
            catalogItem.forEach(item => {
                item.classList.add('line');
            });
        }
    } catch(e) {}

    try {
        const btnGrid = document.querySelector('.favorites__top-btngrid');
        const btnLine = document.querySelector('.favorites__top-btnline');
        const catalogItems = document.querySelector('.favorites__inner-items');
        const catalogItem = document.querySelectorAll('.favorites__inner-item');

        btnGrid.addEventListener('click', () => {
            openBtnGrid(btnGrid, btnLine, catalogItems, catalogItem);
        });

        btnLine.addEventListener('click', () => {
            openBtnLine(btnGrid, btnLine, catalogItems, catalogItem);
        });

        function openBtnGrid(btnLine, btnGrid, catalogItems, catalogItem) {
            btnLine.classList.add('active');
            btnGrid.classList.remove('active');
            catalogItems.classList.remove('line');
            catalogItem.forEach(item => {
                item.classList.remove('line');
            });
        }

        function openBtnLine(btnLine, btnGrid, catalogItems, catalogItem) {
            btnLine.classList.remove('active');
            btnGrid.classList.add('active');
            catalogItems.classList.add('line');
            catalogItem.forEach(item => {
                item.classList.add('line');
            });
        }
    } catch(e) {}

    try {
        const filterBtn = document.querySelector('.catalog__top-filter-btn');
        const filterCloseBtn = document.querySelector('.aside-filter__hamburger');
        const asideOverlay = document.querySelector('.aside-filter__overlay');
        const asideForm = document.querySelector('.aside-filter__form');
        const hamburger = document.querySelector('.hamburger');
        const allCategoriesBtn = document.querySelector('.header__all-categories');
        const filterDrop = document.querySelectorAll('.filter__item-drop');

        filterBtn.addEventListener('click', openFilter);
        filterCloseBtn.addEventListener('click', closeFilter);
        asideOverlay.addEventListener('click', closeFilter);

        function openFilter() {
            asideOverlay.classList.add('active');
            asideForm.classList.add('active');
            hamburger.classList.add('zindex');
            allCategoriesBtn.classList.add('zindex');
            document.body.classList.add('no-scroll');
            filterDrop.forEach(btn => {
                btn.classList.add('filter__item-drop-active');
                btn.nextElementSibling.classList.add('close');
            });
        }

        function closeFilter() {
            asideOverlay.classList.remove('active');
            asideForm.classList.remove('active');
            hamburger.classList.remove('zindex');
            allCategoriesBtn.classList.remove('zindex');
            document.body.classList.remove('no-scroll');
        }
    } catch(e) {}

    try {
        const filterDrop = document.querySelectorAll('.filter__item-drop');
        filterDrop.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('filter__item-drop-active');
                item.nextElementSibling.classList.toggle('close');
            });
        });
    } catch(e) {}

    try {
        //Tabs
    
        const tabs = document.querySelectorAll('.tabs__list'),
              tabsContent = document.querySelectorAll('.tabs__catalog'),
              tabsParent = document.querySelector('.tabs');
    
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('tabs__list-active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabs__list-active');
        }
    
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
    
            if (target && target.classList.contains('tabs__list')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    } catch(e) {}

    try {
        //Tabs
    
        const tabs = document.querySelectorAll('.new-products__tabs-list'),
              tabsContent = document.querySelectorAll('.new-products__tabs-catalog'),
              tabsParent = document.querySelector('.new-products__tabs');
    
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('new-products__tabs-list-active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('new-products__tabs-list-active');
        }
    
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
    
            if (target && target.classList.contains('new-products__tabs-list')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    } catch(e) {}

    try {
        const timer = (id, deadline) => {
            const addZero = (num) => {
                if(num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            };
            
            const getTimeRemaining = (endtime) => {
                const t = Date.parse(endtime) - Date.parse(new Date()),
                      seconds = Math.floor((t/1000) % 60),
                      minutes = Math.floor((t/1000/60) % 60),
                      hours =  Math.floor((t/(1000 * 60 * 60)) % 24),
                      days = Math.floor((t/(1000 * 60 * 60 * 24)));
        
                return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            };
        
            const setClock = (selector, endtime) => {
                const timer = document.querySelector(selector),
                      days = timer.querySelector("#days"),
                      hours = timer.querySelector("#hours"),
                      minutes = timer.querySelector("#minutes"),
                      seconds = timer.querySelector("#seconds"),
                      timeInterval = setInterval(updateClock, 1000);
        
                updateClock();
        
                function updateClock() {
                    const t = getTimeRemaining(endtime);
        
                    days.textContent = addZero(t.days);
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
        
                    if (t.total <= 0) {
                        days.textContent = "00";
                        hours.textContent = "00";
                        minutes.textContent = "00";
                        seconds.textContent = "00";
        
                        clearInterval(timeInterval);
                    }
                }
            };
            
            setClock(id, deadline);
        };
        
        let deadline = '2022-10-1, 12:00';
        timer('.timer', deadline);
    } catch(e) {}

    try {
        let categoriesBtn = document.querySelector('.header__all-categories'),
            navCategory = document.querySelector('.category'),
            categoryOverlay = document.querySelector('.category__overlay'),
            hamburgerr = document.querySelector('.hamburger');

        categoriesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            categoriesBtn.classList.toggle('active');
            navCategory.classList.toggle('active');
            categoryOverlay.classList.toggle('active');
            hamburgerr.classList.toggle('zindex');
        });
        
        categoryOverlay.addEventListener('click', () => {
            categoriesBtn.classList.remove('active');
            navCategory.classList.remove('active');
            categoryOverlay.classList.remove('active');
            hamburgerr.classList.remove('zindex');
        });
    } catch(e) {}

    try {
        let screenWidth = window.screen.width,
            categoryNavList = document.querySelectorAll('.category__nav-list'),
            categoryNavLink = document.querySelectorAll('.category__nav-link');

	
		if(screenWidth < 769) {
            categoryNavLink.forEach(NavLink => {
                NavLink.addEventListener('click', (e) => {
                    e.preventDefault();
                });
            });

            categoryNavList.forEach(navList => {
                navList.addEventListener('click', () => {
                    categoryNum = navList.getAttribute('data-attr');
                    let submenu = document.querySelector(`.sub-menu__wrapper-${categoryNum}`);
                    submenu.classList.toggle('active');
                    navList.classList.toggle('hover');
                });
            });
		} else {
            categoryNavList.forEach(navList => {
                navList.addEventListener('mouseover', () => {
                    categoryNum = navList.getAttribute('data-attr');
                    let submenu = document.querySelector(`.sub-menu__wrapper-${categoryNum}`);
                    submenu.style.display = 'block';
                    navList.classList.add('hover');
                });
                navList.addEventListener('mouseout', () => {
                    categoryNum = navList.getAttribute('data-attr');
                    let submenu = document.querySelector(`.sub-menu__wrapper-${categoryNum}`);
                    submenu.style.display = 'none';
                    navList.classList.remove('hover');;
                });
            });
		}
    } catch(e) {}

    try {
        //Tabs
    
        const tabs = document.querySelectorAll('.cp__tabs-list'),
              tabsContent = document.querySelectorAll('.cp__tabs-catalog'),
              tabsParent = document.querySelector('.cp__tabs');
    
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('cp__tabs-list-active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('cp__tabs-list-active');
        }
    
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
    
            if (target && target.classList.contains('cp__tabs-list')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    } catch(e) {}

    try {
        baguetteBox.run('.gallery');
    } catch(e) {}

    try {
        let mask = document.querySelector('.mask');

        window.addEventListener('load', function() {
            mask.classList.add('hide');
            setTimeout(() => {
                mask.remove();
            }, 600)
        });
    } catch(e) {}

    try {
        const buybackBtn = document.querySelector('.buyback__primary-left-btn');
        const buybackForms = document.querySelector('.buyback__forms');

        buybackBtn.addEventListener('click', () => {
            buybackForms.classList.remove('hidden');
        });
    } catch(e) {}

    try {
        const fileInput = document.querySelector('.buyback__form-upload-input');
        const imageContainer = document.querySelector('.buyback__form-upload-images');

        fileInput.addEventListener('change', preview);

        function preview() {
            imageContainer.innerHTML = "";
            
            for(i of fileInput.files) {
                let reader = new FileReader();
                let figure = document.createElement('figure');
                let figCap = document.createElement('figcaption');

                figCap.innerText = i.name;
                figure.appendChild(figCap);
                reader.onload = () => {
                    let img = document.createElement('img');
                    img.setAttribute('src', reader.result);
                    figure.insertBefore(img, figCap);
                }
                imageContainer.appendChild(figure);
                reader.readAsDataURL(i);
            }
        }
    } catch(e) {}

    try {
        const hintBtn = document.querySelector('.buyback__form-upload-hint-block'); 
        const hintPopup = document.querySelector('.buyback__form-upload-popup');
        const hintBtnPrimary = document.querySelector('.buyback__primary-hint-block');
        const hintPopupPrimary = document.querySelector('.buyback__primary-popup');

        hintBtn.addEventListener('click', () => {
            setTimeout(() => {
                hintPopup.classList.toggle('hidden');
            }, 300);
        });

        hintBtnPrimary.addEventListener('click', () => {
            setTimeout(() => {
                hintPopupPrimary.classList.toggle('hidden');
            }, 300);
        });
    } catch(e) {}

    try {
        let selectDropdowns = document.querySelectorAll('.buyback__dropdown');

        selectDropdowns.forEach(dropdown => {
            let select = dropdown.querySelector('.buyback__select');
            let selectArrow = dropdown.querySelector('.buyback__select-arrow');
            let selectMenu = dropdown.querySelector('.buyback__select-menu');
            let selectOptions = dropdown.querySelectorAll('.buyback__select-menu li');
            let selectSelected = dropdown.querySelector('.buyback__selected');

            select.addEventListener('click', () => {
                selectArrow.classList.toggle('rotate');
                selectMenu.classList.toggle('menu-open');
            });

            selectOptions.forEach(option => {
                option.addEventListener('click', () => {
                    selectSelected.innerText = option.innerText;
                    selectArrow.classList.remove('rotate');
                    selectMenu.classList.remove('menu-open');
                    selectOptions.forEach(option => {
                        option.classList.remove('active');
                    });
                    option.classList.add('active');
                });
            });
        });
    } catch(e) {}

    try {
        const profilePicWrap = document.querySelector('.profile__pic'),
              profilePicImg = document.querySelector('.profile__pic-img'),
              profilePicInput = document.querySelector('.profile__pic-input'),
              profilePicLabel = document.querySelector('.profile__pic-label');

        profilePicWrap.addEventListener('mouseenter', () => {
            profilePicLabel.classList.remove('hidden');
        });

        profilePicWrap.addEventListener('mouseleave', () => {
            profilePicLabel.classList.add('hidden');
        });

        profilePicInput.addEventListener('change', function() {
            const choosedFile = this.files[0];

            if(choosedFile) {
                const reader = new FileReader();

                reader.addEventListener('load', function() {
                    profilePicImg.setAttribute('src', reader.result);
                });

                reader.readAsDataURL(choosedFile);
            }
        });
    } catch(e) {}

    try {
        gsap.registerPlugin(ScrollTrigger);
	
		gsap.to('.buyback__forms-left-imgg', {
			scrollTrigger: {
				trigger: '.buyback__forms-left-imgg',
                start: 'top end',
				scrub: 1,
				toggleActions: 'restart pause reverse pause'
			},
			y: 500,
			duration: 1
		});
    } catch(e) {}

    try {
        new AirDatepicker('#orderh-form-date', {
            range: true,
            multipleDatesSeparator: ' - '
        });
    } catch(e) {}

    try {
        // Yandex map
    
        function init() {
            let map = new ymaps.Map('pickup-map', {
                center: [54.8257630698473,38.14511699999995],
                zoom: 16
            });
        
            let placemark = new ymaps.Placemark([54.8257630698473,38.14511699999995], {}, {
                
            });
        
            let placemark1 = new ymaps.Placemark([54.8257630698473,38.14511699999995], {
                balloonContentHeader: `
                
                    <div class="balloon">
                        <div class="balloon__name">Магазин автозапчастей</div>
                        <div class="balloon__info">инфоинфо</div>
                    </div>
                
                `
            }, {
                
            });
        
            map.behaviors.disable(['scrollZoom']);
            map.geoObjects.add(placemark);
            map.geoObjects.add(placemark1);
        
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                map.behaviors.disable(['drag']);
            }
        }
        
        ymaps.ready(init);
    } catch(e) {}

    try {
        let selectDropdowns = document.querySelector('.clientinfo__dropdown');
        let select = selectDropdowns.querySelector('.clientinfo__select');
            let selectArrow = selectDropdowns.querySelector('.clientinfo__select-arrow');
            let selectMenu = selectDropdowns.querySelector('.clientinfo__select-menu');
            let selectOptions = selectDropdowns.querySelectorAll('.clientinfo__select-menu li');
            let selectSelected = selectDropdowns.querySelector('.clientinfo__selected');

            select.addEventListener('click', () => {
                selectArrow.classList.toggle('rotate');
                selectMenu.classList.toggle('menu-open');
            });

            selectOptions.forEach(option => {
                option.addEventListener('click', () => {
                    selectSelected.innerText = option.innerText;
                    selectArrow.classList.remove('rotate');
                    selectMenu.classList.remove('menu-open');
                    selectOptions.forEach(option => {
                        option.classList.remove('active');
                    });
                    option.classList.add('active');
                });
            });
    } catch(e) {}

    try {
        let selectDropdowns = document.querySelector('.makeorder__bot-right-dropdown');
        let select = selectDropdowns.querySelector('.makeorder__bot-right-select');
        let selectArrow = selectDropdowns.querySelector('.makeorder__bot-right-select-arrow');
        let selectMenu = selectDropdowns.querySelector('.makeorder__bot-right-select-menu');
        let selectOptions = selectDropdowns.querySelectorAll('.makeorder__bot-right-select-menu li');
        let selectSelected = selectDropdowns.querySelector('.makeorder__bot-right-selected');

        select.addEventListener('click', () => {
            selectArrow.classList.toggle('rotate');
            selectMenu.classList.toggle('menu-open');
        });

        selectOptions.forEach(option => {
            option.addEventListener('click', () => {
                selectSelected.innerText = option.innerText;
                selectArrow.classList.remove('rotate');
                selectMenu.classList.remove('menu-open');
                selectOptions.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    } catch(e) {}

    try {
        const pickupSelect = document.querySelectorAll('.pickupSelect');
        const pickupAddress = document.querySelector('.pickupaddress');
        const deliverySelect = document.querySelectorAll('.deliverySelect');
        const delAddress =document.querySelector('.deladdress');
        const yandexDelSelect = document.querySelectorAll('.yandexDelSelect');
        const yandexDelAdress =document.querySelector('.yandexdel');
        const  select = document.querySelector('.clientinfo__selected');
        const  selectOptions = document.querySelectorAll('.clientinfo__select-menu li');

        pickupSelect.forEach(pickup => {
            pickup.addEventListener('click', () => {
                if(delAddress.classList.contains('hidden') && yandexDelAdress.classList.contains('hidden')) {
                    return pickupAddress;
                } else {
                    yandexDelAdress.classList.add('hidden');
                    delAddress.classList.add('hidden');
                    pickupAddress.classList.remove('hidden');
                    pickupSelect[0].checked = true;
                    pickupSelect[1].classList.add('active');
                    deliverySelect[1].classList.remove('active');
                    yandexDelSelect[1].classList.remove('active');
                    select.innerText = selectOptions[0].innerText;
                }
            });
        });

        deliverySelect.forEach(delivery => {
            delivery.addEventListener('click', () => {
                if(pickupAddress.classList.contains('hidden') && yandexDelAdress.classList.contains('hidden')) {
                    return delAddress;
                } else {
                    pickupAddress.classList.add('hidden');
                    yandexDelAdress.classList.add('hidden');
                    delAddress.classList.remove('hidden');
                    deliverySelect[0].checked = true;
                    pickupSelect[1].classList.remove('active');
                    deliverySelect[1].classList.add('active');
                    yandexDelSelect[1].classList.remove('active');
                    select.innerText = selectOptions[1].innerText;
                }
            });
        });
        
        yandexDelSelect.forEach(yandexDel => {
            yandexDel.addEventListener('click', () => {
                if(pickupAddress.classList.contains('hidden') && delAddress.classList.contains('hidden')) {
                    return yandexDelAdress;
                } else {
                    pickupAddress.classList.add('hidden');
                    delAddress.classList.add('hidden');
                    yandexDelAdress.classList.remove('hidden');
                    yandexDelSelect[0].checked = true;
                    pickupSelect[1].classList.remove('active');
                    deliverySelect[1].classList.remove('active');
                    yandexDelSelect[1].classList.add('active');
                    select.innerText = selectOptions[2].innerText;
                }
            });
        });
    } catch(e) {}

    try {
        const payCardSelect = document.querySelector('.makeorder__payment-1');
        const payCashSelect = document.querySelector('.makeorder__payment-2');
        const payCardBtn = document.querySelector('.makeorder__pay-card-btn');
        const payCashBtn = document.querySelector('.makeorder__pay-cash-btn');

        payCardSelect.addEventListener('click', () => {
            if(payCardSelect.classList.contains('active')) {
                payCardBtn.classList.remove('hidden');
                payCashBtn.classList.add('hidden');
            } else {
                return payCardSelect;
            }
        });

        payCashSelect.addEventListener('click', () => {
            if(payCashSelect.classList.contains('active')) {
                payCashBtn.classList.remove('hidden');
                payCardBtn.classList.add('hidden');
            } else {
                return payCashSelect;
            }
        });
    } catch(e) {}

    try {
        const screenWidth = window.screen.width

        if(screenWidth < 720) {
            const quantityPrice = document.querySelectorAll('.quantityPrice');
            const totalPrice = document.querySelectorAll('.totalPrice');
            const artProduct = document.querySelectorAll('.artProduct');

            quantityPrice.forEach(elem => {
                elem.insertAdjacentHTML('beforeend', `/шт`); 
            });

            artProduct.forEach(elem => {
                elem.insertAdjacentHTML('afterbegin', `Арт.`); 
            });

            totalPrice.forEach(elem => {
                elem.insertAdjacentHTML('afterbegin', `Итого: `); 
                elem.insertAdjacentHTML('beforeend', ` ₽`); 
            });
        }
    } catch(e) {}

    try {
        //Tabs
    
        const tabs = document.querySelectorAll('.yandexdel__tabs-btn'),
              tabsContent = document.querySelectorAll('.yandexdel__tabs-content'),
              tabsParent = document.querySelector('.yandexdel__tabs');
    
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('yandexdel__tabs-btn-active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('yandexdel__tabs-btn-active');
        }
    
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
    
            if (target && target.classList.contains('yandexdel__tabs-btn')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    } catch(e) {}
});