let favItems = [];
let tempItems = [];

function addFavorites(item) {
    let favNotAdded = true;
    
    for(let i = 0; i < favItems.length; i++) {
        if (favItems[i].title === item.title) {
            favNotAdded = false;
            break;
        }
    }

    if (favNotAdded) {
        favItems.push(item);
        tempItems.push(item);
        renderFavItems();
    }
}

function removeFavorites(item, index) {
    favItems.splice(index, 1);
    tempItems.splice(index, 1);
    renderFavItems();
}