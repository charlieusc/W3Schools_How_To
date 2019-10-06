const toggleTopnavResponsiveClass = event => {
    const tapnav = document.getElementById('_topnav');
    if (tapnav.className === 'topnav') {
        tapnav.className += ' responsive';
    } else {
        tapnav.className = 'topnav';
    }
}
const tapnavIcon = document.getElementById('tapnavIcon');
tapnavIcon.addEventListener('click', toggleTopnavResponsiveClass);