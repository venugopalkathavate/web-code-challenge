function renderFav() {
    const html = `
        <div class="content fav-page hide">
            <div class="fav-input-container"></div>
            <div class="results fav-items"></div>
        </div>
    `;

    $('body').append(html);
    renderSearch('fav-input-container', onFavSearch);
    renderFavItems();
}

function onFavSearch(e) {
    const value = e.target.value;

    if (value === '') {
        favItems = [...tempItems];
    } else {
        favItems = favItems.filter(function(item) {
            return item.title.includes(value);
        });
    }

    renderFavItems();
}

function renderFavItems() {
    const favItemsHtml = favItems.length ? 
        (favItems.map(function(item, index) {
            return renderResultsTemplate(item, false, index);
        })) : (
            `<div class='no-results'>No favorite recipes</div>`
        );
    
    $('.fav-items').html(favItemsHtml);
}