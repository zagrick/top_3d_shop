let down = document.querySelector('.down');
let cities = document.querySelector('.cities');
let arrow = document.querySelector('img[alt="arrow-down"]');
let mobile = document.querySelector('.mobile');
let btn = document.querySelector('.btn-burger');
let span = btn.querySelectorAll('span');
let d = true;
down.onclick = () => {
	d ? cities.style.display = 'block' :
	cities.style.display = 'none';
	d ? arrow.style.transform = 'rotate(180deg)' :
	arrow.style.transform = 'none';
	d = !d;
}
let flug = true;
btn.onclick = () => {
	for(s of span) {
		flug ? s.classList.add('active') : 
		s.classList.remove('active');
	}
	flug ? mobile.style.display = 'block' :
	mobile.style.display = 'none';
	flug = !flug;
}