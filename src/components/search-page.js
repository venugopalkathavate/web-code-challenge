function renderSearchPage() {
    const html = `
        <div class="content search-page">
            <div class="search-field"></div>
            <div class="search-results"></div>
        </div>
    `;    

    $('body').append(html);
    renderSearch('search-field', onSearch);
    renderSearchResults();
}

async function onSearch(e) {    
    updateSearchResults((await getRecipes(e.target.value, 1)).results);
}

function addToFav(item, add) {
    console.log(item, add);
}

function renderSearchResults() {
    const searchResultsHtml = searchResults.length ? (
        searchResults.map(function(result) {
            const thumbnail = result.thumbnail 
                ? `<img src='${result.thumbnail}' alt='${result.title}'>`
                : `<img src='./../../images/no-image-available.png' alt='${result.title}'>`;

            return `
                <div>
                    ${thumbnail}
                    <div><a href='${result.href}'>${result.title}</a></div>
                    <div>ings: ${result.ingredients.split(',').length}</div>
                    <img src='./../../images/bookmark-regular.svg' 
                        alt='favorites' class='fav-icon'
                        onclick='addToFav(${JSON.stringify(result)})'
                    >
                </div>
            `;
        })) : (
            `<div>Please enter a recipe</div>`
        );
    
    $('.search-results').html(searchResultsHtml);
}