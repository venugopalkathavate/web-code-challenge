function renderSearchPage() {
    const html = `
        <div class="content search-page">
            <div class="search-input-container"></div>
            <div class="results search-results"></div>
        </div>
    `;    

    $('body').append(html);
    renderSearch('search-input-container', onSearch);
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
            `<div class='no-results'>No recipes found</div>`
        );
    
    $('.search-results').html(searchResultsHtml);
}