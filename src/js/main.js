const burgerIcon = document.querySelector('.nav__burger-icon');
const mobileNav = document.querySelector('.nav__mobile');
const mobileNavCloseBtn = document.querySelector('.nav__mobile-close');
const footerYear = document.querySelector('.footer__year');
let navHeight = document.querySelector('.nav').offsetHeight;
const navbar = document.querySelector('.nav');

const navDetoskopItemLinks = document.querySelectorAll('.nav__item');
const navMobileItemsLinks = document.querySelectorAll('.nav__mobile-item');

const sections = document.querySelectorAll('section');

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

const scrollToSectionOnLoad = () => {
	const currentUrl = window.location.href;
	const currentHash = currentUrl.substring(currentUrl.indexOf('#'));
	if (currentHash !== '') {
		scrollToSection(currentHash);
	}
};

window.addEventListener('load', scrollToSectionOnLoad);

navDetoskopItemLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const targetId = link.getAttribute('href');
		scrollToSection(targetId);
	});
});

//   mobile naprawić !!!!!!!!!!!!!!!!!!!!!!!!!!!

navMobileItemsLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const href = e.target.getAttribute('href');
		const section = document.querySelector(href);
		const sectionTop = section.offsetTop - navHeight;
		window.scrollTo({ top: sectionTop, behavior: 'smooth' });
	});
});

// scrollspy changing nav color;

const updateNavbarColor = () => {
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (
			window.pageYOffset >= sectionTop - navHeight &&
			window.pageYOffset < sectionTop + sectionHeight
		) {
			navbar.classList.add('active');
		} else {
			navbar.classList.remove('active');
		}
	});
};

window.addEventListener('scroll', updateNavbarColor);

// hiding nav while scrollinh down; --- DISABLED FOR NOW

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   const currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector('.nav').style.top = "0";
//   } else {
//     document.querySelector('.nav').style.top = "-25%";
//   }
//   prevScrollpos = currentScrollPos;
// };
// footer year

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
