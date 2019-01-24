const btns = Array.from(document.getElementsByClassName("tabBtn"));
const contents = Array.from(document.getElementsByClassName("tabcontent"));

const btnClick = (e) => {
	console.log(contents);
	const city = e.target.innerHTML;
	contents.forEach(c => {
		c.className = c.className.replace(" active", "");
	});
	btns.forEach(b => {
		b.className = b.className.replace(" select", "");
	});
	document.getElementById(city).className += " active";
	e.target.className += " select";

}
btns.forEach(btn => {
	btn.addEventListener("click", btnClick);
});

document.getElementById("defaultOpen").click();