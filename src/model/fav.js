const favItems = [];

function addFavorites(item) {
    favItems.push(item);
    renderFavItems();
}

function removeFavorites(item, index) {
    favItems.splice(index, 1);
    renderFavItems();
}