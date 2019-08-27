function renderSearch() {
    const html = `
        <div class="content search-page">
            <div class="search-field">Search Page</div>
            <div class="search-results"></div>
        </div>
    `;    

    $('body').append(html);
    renderSearchResults();
}

function renderSearchResults() {
    const searchResultsHtml = searchResults.map(function(result) {
        return `<div>${result}</div>`
    });
    
    $('.search-results').append(searchResultsHtml);
}