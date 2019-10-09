const searchItemsContainer = document.getElementById('search-items-container');
const searchInputBox = document.getElementById('menu-search-input');
const renderItems = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'jQuery', 'SQL', 'Bootstrap', 'Node.js'];
const removeChild = (e) => {
    while (e.lastElementChild) { 
        e.removeChild(e.lastElementChild);
    } 
}
const reRenderItemList = event => {
    let items = [...renderItems];
    const inputStr = event ? event.currentTarget.value.toLowerCase() : '';
    console.log(inputStr);
    if (inputStr !== '') {
        items = items.filter(item => item.toLowerCase().includes(inputStr));
        removeChild(searchItemsContainer);
    }
    items.forEach(item => {
        const LI = document.createElement('li');
        const A = document.createElement('a');
        A.innerHTML = item;
        A.setAttribute('href', '#');
        LI.appendChild(A);
        searchItemsContainer.appendChild(LI);
    });
}

searchInputBox.addEventListener('input', reRenderItemList);
reRenderItemList();