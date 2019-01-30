const btns = Array.from(document.getElementsByClassName("btn"));
const contents = Array.from(document.getElementsByClassName("city"));
//console.log(btns);

const handleClick = (e) => {
	contents.forEach(content => {
		content.className = content.className.replace(" active", "");
	});
	btns.forEach(btn => {
		btn.className = btn.className.replace(" select", "");
	});
	e.target.className += " select";
	let cityContent = document.getElementById(e.target.innerHTML);
	cityContent.className += " active";
	//console.log(e.target.innerHTML);
}

btns.forEach(btn => {
	btn.addEventListener("click", handleClick);
});

document.getElementById("defaultClick").click();