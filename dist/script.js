// Search popup
const toggleSubMenu = () => {
    const subMenu = document.querySelector('.sub-menu');
    if (subMenu.style.opacity === '' || subMenu.style.opacity === '0') {
        subMenu.style.opacity = '1';
        subMenu.style.height = 'auto';
    } else {
        subMenu.style.opacity = '0';
        subMenu.style.height = '0';
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const hamburgerArrow = document.querySelector('#hamburgerArrow');
const hamburgerShowMore = document.querySelector('#hamburgerShowMore');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const hamburgerMenuItem = document.querySelectorAll('.hamburgerMenuItem');
const closeHamburger = document.querySelector('#closeHamburger');
const smallMenu = document.querySelector('.smallMenu');
let hamburgerMenuItemDrop = document.querySelectorAll('.hamburgerMenuItemDrop');

hamburgerShowMore.addEventListener('click', () => {
    //console.log(hamburgerMenuItemDrop.length)
    for (let j = 0; j <= hamburgerMenuItemDrop.length - 1; j++) {
        hamburgerMenuItemDrop[j].classList.toggle("hidden");
        hamburgerMenuItemDrop[j].classList.toggle("flex");
    }
    smallMenu.classList.toggle("h-full");
    hamburgerArrow.classList.toggle("rotate-180");
});

for (let k = 0; k <= hamburgerMenuItem.length - 1; k++) {
    hamburgerMenuItem[k].addEventListener('click', () => {
        hamburgerMenu.style.right = '-100%';
    });
}

hamburger.addEventListener('click', () => {
    hamburgerMenu.style.right = '0';
});

closeHamburger.addEventListener('click', () => {
    hamburgerMenu.style.right = '-100%';
});

// Carousel
const carouselSlide = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const size = slides[0].clientWidth;
let counter = 0;


nextBtn.addEventListener('click', () => {
    if (counter <= slides.length - 2) {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-slides[0].clientWidth * counter) + 'px)';
    }

    if (counter !== 0) {
        prevBtn.style.opacity = '1';
    }

    if (counter == slides.length - 1) {
        nextBtn.style.opacity = '.2';
    }
});

prevBtn.addEventListener('click', () => {
    if (counter >= slides.length - 2) {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-slides[0].clientWidth * counter) + 'px)';
    }

    if (counter == 0) {
        prevBtn.style.opacity = '.2';
    }

    if (counter !== slides.length - 1) {
        nextBtn.style.opacity = '1';
    }
});

window.addEventListener('resize', (event) => {
    carouselSlide.style.transition = 'none';
    carouselSlide.style.transform = 'translateX(' + (-slides[0].clientWidth * counter) + 'px)';
});

// Masonry gallery
const loadBtn = document.querySelector('#load');
const gradient = document.querySelector('#gradient');
let items = document.querySelectorAll('.masonry-item');
let currentlyLoaded = 9;

var macyInstance = new Macy({
    container: '.masonry-grid',
    useContainerForBreakpoints: true,
    mobileFirst: true,
    columns: 2,
    breakAt: {
        880: {
            margin: {
                x: 28,
                y: 0,
            },
            columns: 3,
        },
        1536: {
            margin: {
                x: 40,
                y: 0,
            },
            columns: 4,
        },
    },
    margin: {
        x: 16,
        y: 0,
    }
});

loadBtn.addEventListener('click', () => {
    for (let i = currentlyLoaded; i < currentlyLoaded + 9; i++) {
        items[i].style.height = 'auto';
        items[i].style.opacity = '1';
        targetImg[i].style.height = 'auto';
    }

    currentlyLoaded += 9;

    if (currentlyLoaded >= items.length) {
        loadBtn.style.display = 'none';
        gradient.style.height = '300px';
    }

    macyInstance.reInit();
});

// Lightbox
const lightBox = document.querySelector('#lightbox');
const closeLb = document.querySelector('#closeLb');
const prevLb = document.querySelector('#prevLb');
const nextLb = document.querySelector('#nextLb');
let insertImg = document.querySelector('.insertImg');
let targetImg = document.querySelectorAll('.targetImg');

for (let i = 0; i <= (targetImg.length - 1); i++) {
    let newIndex = i;
    targetImg[i].addEventListener('click', e => {
        lightBox.style.display = 'block';
        newIndex = i;

        function preview() {
            insertImg.src = targetImg[newIndex].src;

            if (newIndex == 0) {
                prevLb.style.opacity = '.2';
            } else {
                prevLb.style.opacity = '1';
            }

            if (newIndex == targetImg.length - 1) {
                nextLb.style.opacity = '.2';
            } else {
                nextLb.style.opacity = '1';
            }
        }

        preview();

        nextLb.addEventListener('click', e => {
            if (newIndex <= targetImg.length - 2) {
                newIndex++;
                preview();
            }
        })

        prevLb.addEventListener('click', e => {
            if (newIndex != 0) {
                newIndex--;
                preview();
            }
        })
    })
}

lightBox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightBox.style.display = 'none';
})

closeLb.addEventListener('click', e => {
    lightBox.style.display = 'none';
})