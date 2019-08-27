function renderNav() {
    const html = `
        <nav class="navigation">
            <div>Recipe Puppy</div>
            <div class="search selected">Search</div>
            <div class="fav">Favorites</div>
        </nav>
    `;

    $('body').append(html);

    $(".search").on('click', function() {
        $(this).toggleClass('selected');
        $('.fav').toggleClass('selected');

        $('.search-page').addClass('show').removeClass('hide'); 
        $('.fav-page').addClass('hide').removeClass('show');    
    });

    $(".fav").on('click', function() {
        $(this).toggleClass('selected');
        $('.search').toggleClass('selected');

        $('.fav-page').addClass('show').removeClass('hide');
        $('.search-page').addClass('hide').removeClass('show');     
    });
}