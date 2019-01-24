const btns = document.getElementsByClassName("accordion");

btnClick = (e) => {
	e.target.classList.toggle("active");
	const panel = e.target.nextElementSibling;
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
}

for (let i=0; i<btns.length; i++) {
	const btn = btns[i];
	btn.addEventListener('click', btnClick);
}