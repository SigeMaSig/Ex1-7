const searchInput = document.getElementById('search');
const menuList = document.getElementById('menu-list');

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const items = menuList.getElementsByTagName('li');
    for (let item of items) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
    }
});
