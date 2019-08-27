function renderSearch(selector, searchCallback) {
    const className = `${selector}-search`;

    $(`.${selector}`).append(
        `<input type="text" class='search-input ${className}' placeholder='Type in anything and hit enter'>`
    );

    $(`.${className}`).on('keypress', function(e) {
        if (e.which === 13) {
            searchCallback(e);
        }
    });
}