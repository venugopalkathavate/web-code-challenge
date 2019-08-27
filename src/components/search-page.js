function renderSearchPage() {
    const html = `
        <div class="content search-page">
            <div class="search-field"></div>
            <div class="results search-results"></div>
        </div>
    `;    

    $('body').append(html);
    renderSearch('search-field', onSearch);
    renderSearchResults();
}

async function onSearch(e) {    
    updateSearchResults((await getRecipes(e.target.value, 1)).results);
}

function renderSearchResults() {
    const searchResultsHtml = searchResults.length ? (
        searchResults.map(function(result) {
            return renderResultsTemplate(result, true);
        })) : (
            `<div>Please enter a recipe</div>`
        );
    
    $('.search-results').html(searchResultsHtml);
}