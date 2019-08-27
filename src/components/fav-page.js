function renderFav() {
    const html = `
        <div class="content fav-page hide">
            <div class="fav-search-field"></div>
            <div class="results fav-items"></div>
        </div>
    `;

    $('body').append(html);
    renderSearch('fav-search-field', onFavSearch);
    renderFavItems();
}

function onFavSearch(e) {
    console.log('Fav search', e.target.value);
}

function renderFavItems() {
    const favItemsHtml = favItems.length ? 
        (favItems.map(function(item, index) {
            return renderResultsTemplate(item, false, index);
        })) : (
            `<div>No favorites recipes</div>`
        );
    
    $('.fav-items').html(favItemsHtml);
}