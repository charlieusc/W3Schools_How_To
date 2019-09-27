function menu_icon_click(e) {
	console.log(e.target, this, e.currentTarget);
	const icon_div = this; // or e.currentTarget
	icon_div.classList.toggle("change");
}

document.getElementById('menu_icon_animated').addEventListener('click', menu_icon_click) ;