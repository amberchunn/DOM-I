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

// let mainHd = document.querySelectorAll('.text-content');
// // let mainTxt = document.querySelectorAll('.text-content p');
// let contTxt = siteContent['main-content'];

// mainHd.forEach(item => {
// 	let itemName = Object.entries(contTxt);
// 	console.log(itemName);

// 	item.textContent = contTxt[itemName];
// });

let feaSectHd = document.querySelectorAll('h4');
let feaSectPg = document.querySelectorAll('p');

// let feaSectHdTxt = Object.values(feaSectHd);
// let feaSectPgTxt = Object.values(feaSectPg);

let feaTxt = siteContent['main-content'];

let feaTxtHd = Object.values(feaTxt);
let feaTxtIn = Object.keys(feaTxt);

let feaTxtEntries = Object.entries(feaTxt);
let feaTxtValues = Object.values(feaTxtEntries);

// console.log(feaTxtValues[0]);

// feaSectHd.forEach((item, i) => {
// 	let itemName = feaTxtValues[i];
// 	let itemObj = { ...itemName };

// 	item.textContent = feaTxtHd[itemObj];

// 	// console.log(itemObj);
// });

// feaSectPg.forEach((item, i) => {
// 	item.textContent = ;
// 	// console.log(feaTxtHd);
// });
