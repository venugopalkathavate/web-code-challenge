function renderFav() {
    const html = `
        <div class="content fav-page hide">
            <div class="search-field">Fav Page</div>
            <div class="fav-items"></div>
        </div>
    `;

    $('body').append(html);
    renderFavItems();
}

function renderFavItems() {
    const favItemsHtml = favItems.map(function(item) {
        return `<div>${item}</div>`
    });
    
    $('.fav-items').append(favItemsHtml);
}