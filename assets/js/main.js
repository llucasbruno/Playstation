'user strict'

let menuToggle = document.querySelector('#menu-toggle');
let menuHamburger = document.querySelector('.hamburger');
let psLogo = document.querySelector('.ps-logo');
let navMenu = document.querySelector('.navmenu');

let headerScroll = document.querySelector('.header-row');






let menuBar = gsap.timeline({paused:true});

//bars menu animations
//gsap start

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
	ease: Power2.easeInOut
}, 'start');

menuBar.to('.bar-2', 0.5,{
	autoAlpha: 0
}, 'start');

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
	ease: Power2.easeInOut
}, 'start');

menuBar.reverse()

//----

//animation menu gsap

let tl = gsap.timeline();



tl.to('.fullpage-menu', {
    duration: 0,
    display: 'block',
    ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span',{
    duration: .5,
    x: "100%",
    stagger: 0.1,
    ease: 'Expo.easeInOut',

});

tl.to('.navmenu', {
	duration: 0,
	display: "none",
	opacity: 1,
	ease: 'Expo.easeInOut'
},"-=0.6");

tl.to('.header-row.active-header', {
	duration: 0,
	backgroundColor:"transparent",
	ease: 'Expo.easeInOut'
},"-=0.6");





tl.from('.menu-ul li span', {
	duration: .5,
	y:"-100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.6");

tl.from('.logout', {
	duration: .5,
	y:"-100%",
	ease: 'Expo.easeInOut'
},"-=0.6");



//ps symbols 

tl.from('.menu-ul li span #polygon', {
	duration: 0.7,
	y:"-120%",
	opacity: 1,
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.6");

tl.from('.menu-ul li span #circle', {
	duration: 0.7,
	y:"-120%",
	opacity: 1,
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.6");

tl.from('.menu-ul li span #X', {
	duration: 0.7,
	y:"-120%",
	opacity: 1,
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.6");

tl.from('.menu-ul li span #square', {
	duration: 0.7,
	y:"-120%",
	opacity: 1,
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.6");

//----



tl.to('.profile-1', {
	duration: .5,
	display: "flex",
	opacity: 1,
	y:"40%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.from('.wave-bg',{
	duration: 1.15,
	opacity:0,
	stagger: 0.5,
	ease: 'Expo.easeInOut'
}, "-=0.5")



tl.reverse();


menuToggle.addEventListener('click', ()=> {
    menuHamburger.classList.toggle('active');
	headerScroll.classList.toggle('bg-transparent');
	
	
    psLogo.classList.toggle('active');
	//navMenu.classList.toggle('active-menu-ps')	
    menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});

//gsap ends


//date

const day = document.getElementById('day'); 
const month = document.getElementById('month'); 
const year = document.getElementById('year'); 

let dateTime = new Date()
let dayValue = dateTime.getDate();
let montValue = dateTime.getMonth();
let yearValue = dateTime.getFullYear();

day.innerHTML = `${dayValue}/`;
month.innerHTML = `${montValue+1}/`;
year.innerHTML = `${yearValue}`;

//header active

function scrollHeader() {
	const headerRow = document.querySelector('.header-row');

	if(this.scrollY >= 60) { 
		headerRow.classList.add('active-header');
	} else {
		headerRow.classList.remove('active-header');
	};
}

window.addEventListener('scroll', scrollHeader);


//Drop menu

const menuLinkDropDown1 = document.getElementById('menu-link1');
const menuLinkDropDown2 = document.getElementById('menu-link2');

const dropdownMenuBg1 = document.getElementById('dropdown-menu-bg1')
const dropdownMenuBg2 = document.getElementById('dropdown-menu-bg2')



const dropdownItem1 = document.getElementById('menu-item1')
const dropdownItem2 = document.getElementById('menu-item2')
const dropdownItem3 = document.getElementById('menu-item3')

const dropdownItem4 = document.getElementById('menu-item4')
const dropdownItem5 = document.getElementById('menu-item5')





function ShowDropDown1(e) {
	e.preventDefault()
	dropdownMenuBg2.classList.remove('active-dropdown-menu')
	dropdownMenuBg1.classList.toggle('active-dropdown-menu')
	
	menuLinkDropDown2.classList.remove('active-blue-color')
	menuLinkDropDown1.classList.toggle('active-blue-color')
	menuLinkDropDown2.classList.remove('active-arrow')
	menuLinkDropDown1.classList.toggle('active-arrow')

	dropdownItem4.classList.remove('active-dropdown-menu')
	dropdownItem5.classList.remove('active-dropdown-menu')
	

	dropdownItem1.classList.toggle('active-dropdown-menu')
	dropdownItem2.classList.toggle('active-dropdown-menu')
	dropdownItem3.classList.toggle('active-dropdown-menu')
	
}


function ShowDropDown2(e) {
	e.preventDefault()
	dropdownMenuBg1.classList.remove('active-dropdown-menu')

	dropdownMenuBg2.classList.toggle('active-dropdown-menu')
	menuLinkDropDown1.classList.remove('active-blue-color')
	menuLinkDropDown2.classList.toggle('active-blue-color')
	menuLinkDropDown2.classList.toggle('active-arrow')
	menuLinkDropDown1.classList.remove('active-arrow')

	dropdownItem1.classList.remove('active-dropdown-menu')
	dropdownItem2.classList.remove('active-dropdown-menu')
	dropdownItem3.classList.remove('active-dropdown-menu')

	dropdownItem4.classList.toggle('active-dropdown-menu')
	dropdownItem5.classList.toggle('active-dropdown-menu')	
}


menuLinkDropDown1.addEventListener('click', ShowDropDown1)
menuLinkDropDown2.addEventListener('click', ShowDropDown2)




//main sliders js

const activeClass = 'active';
const previewClass = 'preview';
const buttons = document.querySelectorAll('.preview-element');
let activeId = null;
let timer = startTimer()


buttons.forEach(button => {
	button.addEventListener('click', ($event) => {
		select($event.target.dataset.slide)
		
	});
});


function startTimer() {
	return setInterval(()=> {
		const nextButton = getActiveButton().nextElementSibling || buttons[0];

		if(nextButton) {
			select(nextButton.dataset.slide)
		}

	}, 5000)
}

function select(slideId) {

	if(activeId === slideId) {
		return;
	}
	
	removeActiveSlide()
	setNextSlidePreview(slideId)

	removeActiveButton()
	addActiveButton(slideId)
	activeId = slideId

	clearInterval(timer);
	timer = startTimer()
	
}


function setActiveSlide(id) {
	const slide = document.querySelector(`#slider-${id}`);
	slide.classList.add(activeClass)

}

function setNextSlidePreview(id) {
	const preview = document.querySelector(`#slider-${id}`)
	preview.classList.add(previewClass)
	setTimeout(() => {
		setActiveSlide(id)
		preview.classList.remove(previewClass)
	}, 250 )
}

function removeActiveSlide() {
	const slide = document.querySelector(`.slider-content.${activeClass}`);
	slide.classList.remove(activeClass)
}

function addActiveButton(id) {
	const buttonSlide = document.querySelector(`[data-slide="${id}"]`);
	buttonSlide.classList.add(activeClass)
}


function getActiveButton() {
	return document.querySelector(`.preview-element.${activeClass}`)
}


function removeActiveButton() { //remove aclaas of active button
	getActiveButton().classList.remove(activeClass)
}


