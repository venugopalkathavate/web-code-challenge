let pageNumber = 1;

function renderPagination(selector) {
    const html = `
        <div class='pagination-container hide'>
            <button class='prev'>Previous</button>
            <button class='next'>Next</button>
        </div>
    `;

    $(`.${selector}`).append(html);

    $('.prev').on('click', function() {
        loadMoreResults(false);
    });

    $('.next').on('click', function() {
        loadMoreResults(true);
    });
}

function showOrHidePagination() {
    if (searchResults.length > 0) {
        $('.pagination-container').addClass('show').removeClass('hide');
    }

    pageNumber === 1;
    changeButtonState();    
}

function changeButtonState() {
    const prevButton = $('.pagination-container .prev');

    if (pageNumber === 1) {        
        prevButton.attr('disabled', true);
        $('.pagination-container .next').attr('disabled', false);
    } else if (pageNumber > 1) {
        prevButton.attr('disabled', false);
         
        if (searchResults.length === 0) {
            $('.pagination-container .next').attr('disabled', true);
        }
    }
}

async function loadMoreResults(next) {
    const value = $('.search-input').val();

    next ? ++pageNumber : --pageNumber;
    updateSearchResults((await getRecipes(value, pageNumber)).results);
}