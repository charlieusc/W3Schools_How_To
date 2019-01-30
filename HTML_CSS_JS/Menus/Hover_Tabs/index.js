const btns = Array.from(document.getElementsByClassName("tabBtn"));
const contents = Array.from(document.getElementsByClassName("tabcontent"));
const eventHandle = (ref) => {
	const city = ref.innerHTML;
	contents.forEach(c => {
		c.className = c.className.replace(" active", "");
	});
	btns.forEach(b => {
		b.className = b.className.replace(" select", "");
	});
	document.getElementById(city).className += " active";
	ref.className += " select";
}
const btnEnter = (e) => {
	eventHandle(e.target);
}
btns.forEach(btn => {
	btn.addEventListener("mouseenter", btnEnter);
});

eventHandle(document.getElementById("defaultOpen"));