function renderSearch(selector, searchCallback) {
    const className = `${selector}-search`;

    $(`.${selector}`).append(
        `<input type="text" class='${className}' placeholder='Enter recipe'>`
    );

    $(`.${className}`).on('keypress', function(e) {
        if (e.which === 13) {
            searchCallback(e);
        }
    });
}