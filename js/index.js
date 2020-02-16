const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2020'
	}
};

// Navigation
// Change to Green Text

let navList = document.querySelectorAll('nav a');
let navItems = siteContent.nav;

navList.forEach((item, i) => {
	let itemName = `nav-item-${i + 1}`;
	// console.log(itemName);
	item.textContent = navItems[itemName];
	item.style.color = 'green';
});

// Add 2 New Nav Items
let loginNav = document.createElement('a');
document.querySelector('nav').prepend(loginNav);
loginNav.textContent = 'Login';
loginNav.setAttribute('href', '#');
loginNav.style.color = 'green';

let portfolioNav = document.createElement('a');
document.querySelector('nav').appendChild(portfolioNav);
portfolioNav.textContent = 'Portfolio';
portfolioNav.setAttribute('href', '#');
portfolioNav.style.color = 'green';

//Logo

let logoImg = document.getElementById('logo-img');
let image = siteContent.nav['img-src'];
logoImg.setAttribute('src', image);

//  Intro Section
let ctaDom = document.querySelector('.cta-text');
let ctaValues = siteContent.cta;

// Accessing DOM
let ctaHeading = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('.cta-text button');
let ctaHeroImg = document.querySelector('.cta img');

// CTA Intro Heading
ctaHeading.textContent = siteContent.cta['h1'];

// CTA Intro Button
ctaButton.textContent = siteContent.cta['button'];

// CTA Image
let ctaImg = siteContent.cta['img-src'];
ctaHeroImg.setAttribute('src', ctaImg);

// Main Content Variables from Data

// Headings

let feaHeading = siteContent['main-content']['features-h4'];
let aboutHeading = siteContent['main-content']['about-h4'];
let servicesHeading = siteContent['main-content']['services-h4'];
let productHeading = siteContent['main-content']['product-h4'];
let visionHeading = siteContent['main-content']['vision-h4'];

// Content

let feaContent = siteContent['main-content']['features-content'];
let aboutContent = siteContent['main-content']['about-content'];
let servicesContent = siteContent['main-content']['services-content'];
let productContent = siteContent['main-content']['product-content'];
let visionContent = siteContent['main-content']['vision-content'];

// Middle Image

let middleImgSrc = siteContent['main-content']['middle-img-src'];

// Contact

let contactHeading = siteContent.contact['contact-h4'];
let contactAddress = siteContent.contact.address;
let contactPhone = siteContent.contact.phone;
let contactEmail = siteContent.contact.email;

// Footer

let footerCopy = siteContent.footer.copyright;

// Attach Content to HTML

// Headings
document.querySelectorAll('h4').item(0).textContent = feaHeading;
document.querySelectorAll('h4').item(1).textContent = aboutHeading;
document.querySelectorAll('h4').item(2).textContent = servicesHeading;
document.querySelectorAll('h4').item(3).textContent = productHeading;
document.querySelectorAll('h4').item(4).textContent = visionHeading;

// Content

document.querySelectorAll('p').item(0).textContent = feaContent;
document.querySelectorAll('p').item(1).textContent = aboutContent;
document.querySelectorAll('p').item(2).textContent = servicesContent;
document.querySelectorAll('p').item(3).textContent = productContent;
document.querySelectorAll('p').item(4).textContent = visionContent;

// Middle Image

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', middleImgSrc);

// Contact

let contactHd = document.querySelector('.contact h4');
contactHd.textContent = contactHeading;

document.querySelectorAll('.contact p').item(0).textContent = contactAddress;
document.querySelectorAll('.contact p').item(1).textContent = contactPhone;
document.querySelectorAll('.contact p').item(2).textContent = contactEmail;

// Footer

document.querySelector('footer p').textContent = footerCopy;
