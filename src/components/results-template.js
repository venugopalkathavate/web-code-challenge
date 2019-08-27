function addToFav(item, addFav, index) {
    if (addFav) {        
        addFavorites(item);
    } else {
        removeFavorites(item);
    }
};

function renderResultsTemplate(result, showAddToFav, index) {
    const imageName = showAddToFav ? 'bookmark-regular.svg' : 'minus-circle-solid.svg';
    const thumbnail = result.thumbnail 
        ? `<img src='${result.thumbnail}' alt='${result.title}'>`
        : `<img src='./../../images/no-image-available.png' alt='${result.title}'>`;

    return `
        <div>
            ${thumbnail}
            <div class='recipe-details'>
                <div><a href='${result.href}'>${result.title}</a></div>
                <span>Ingredients: ${result.ingredients.split(',').length}</span>
                <img src='./../../images/${imageName}' 
                    alt='favorites' class='fav-icon'
                    onclick='addToFav(
                        ${JSON.stringify(result)},
                        ${JSON.stringify(showAddToFav)},
                        ${JSON.stringify(index)}
                    )'
                >
            </div>
        </div>
    `;
};