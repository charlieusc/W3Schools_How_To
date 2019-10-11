const sideNav = document.getElementById('mySidenav');
const mainDiv = document.getElementById('main');
document.getElementById('close-btn').addEventListener('click', () => {
    sideNav.style.width = "0px";
    mainDiv.style.marginLeft = "0px";
    document.body.style.backgroundColor = "white";
    sideNav.style.textAlign = "left";
});

document.getElementById('sidenav-overlay').addEventListener('click', () => {
    sideNav.style.width = "250px";
});

document.getElementById('sidenav-overlay-w-opacity').addEventListener('click', () => {
    sideNav.style.width = "250px";
    mainDiv.style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

document.getElementById('sidenav-full-width').addEventListener('click', () => {
    sideNav.style.width = "100%";
    sideNav.style.textAlign = "center";
});