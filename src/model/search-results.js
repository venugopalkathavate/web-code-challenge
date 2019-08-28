let searchResults = [];

function updateSearchResults(results) {    
    searchResults = results;
    renderSearchResults();
    showOrHidePagination();
}