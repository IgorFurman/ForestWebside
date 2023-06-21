const burgerIcon = document.querySelector('.nav__burger-icon');
const mobileNav = document.querySelector('.nav__mobile');
const mobileNavCloseBtn = document.querySelector('.nav__mobile-close');
const footerYear = document.querySelector('.footer__year');
let navHeight = document.querySelector('.nav').offsetHeight;
const navbar = document.querySelector('.nav');

const navDetoskopItemLinks = document.querySelectorAll('.nav__item');
const navMobileItemsLinks = document.querySelectorAll('.nav__mobile-item');

//nav funtctions

const blockScroll = () => {
	const scrollPosition =
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop ||
		0;

	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollPosition}px`;
	document.body.style.width = '100%';
};

const unblockScroll = () => {
	const scrollPosition = document.body.style.top;

	document.body.style.position = '';
	document.body.style.top = '';
	document.body.style.width = '';

	window.scrollTo(0, parseInt(scrollPosition || '0') * -1);
};

burgerIcon.addEventListener('click', () => {
	mobileNav.style.display = 'flex';
	burgerIcon.style.display = 'none';
	blockScroll();
});

mobileNavCloseBtn.addEventListener('click', () => {
	mobileNav.style.display = 'none';
	burgerIcon.style.display = 'block';
	unblockScroll();
});

mobileNav.addEventListener('click', () => {
	mobileNav.style.display = 'none';
	burgerIcon.style.display = 'block';
	unblockScroll();
});

// navigation links navbar height correcting

window.addEventListener('resize', () => {
	navHeight = document.querySelector('.nav').offsetHeight;
});
const scrollToSection = (targetId) => {
	const targetElement = document.querySelector(targetId);
	if (!targetElement) return;
	const targetOffsetTop = targetElement.offsetTop - navHeight;
	window.scrollTo({
		top: targetOffsetTop,
		behavior: 'smooth',
	});
};

navDetoskopItemLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const targetId = link.getAttribute('href');
		scrollToSection(targetId);
	});
});

//   mobile

navMobileItemsLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const targetId = link.getAttribute('href');
		const targetElement = document.querySelector(targetId);
		setTimeout(() => {
			window.scrollTo({
				top: targetElement.offsetTop - navHeight,
				behavior: 'smooth',
			});
		}, 0);
	});
});

// scrollspy changing nav colors;

const changeNavbarColor = () => {
	const sections = document.querySelectorAll('section');

	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY + navHeight;
		let currentSectionIndex = 0;

		sections.forEach((section, index) => {
			const sectionTop = section.offsetTop;
			const sectionBottom = sectionTop + section.clientHeight;
			if (scrollY >= sectionTop && scrollY < sectionBottom) {
				currentSectionIndex = index;
				return;
			}
		});

		switch (currentSectionIndex) {
			case 0:
				navbar.classList.remove('active');
				navDetoskopItemLinks.forEach((link) => link.classList.remove('hover'));
				break;

			case 1:
				navbar.classList.add('active');
				navDetoskopItemLinks.forEach((link, index) => {
					if (index === 0) {
						link.classList.add('hover');
					}
				});
				break;
			case 2:
				navbar.classList.remove('active');
				navDetoskopItemLinks.forEach((link) => link.classList.remove('hover'));
				break;
			case 3:
				navbar.classList.add('active');
				navDetoskopItemLinks.forEach((link, index) => {
					if (index === 1) {
						link.classList.add('hover');
					}
				});
				break;
			default:
				navbar.classList.remove('active');
				break;
		}
	});
};

changeNavbarColor();



// footer year ================================

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
