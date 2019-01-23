const btns = document.getElementsByClassName("accordion");

btnClick = (e) => {
	e.target.classList.toggle("active");
	if (e.target.nextElementSibling.style.display === "block") {
		e.target.nextElementSibling.style.display = "none";
	} else {
		e.target.nextElementSibling.style.display = "block";
	}
}

for (let i=0; i<btns.length; i++) {
	const btn = btns[i];
	btn.addEventListener('click', btnClick);
}