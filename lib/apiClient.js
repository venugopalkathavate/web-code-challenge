const baseUrl = 'http://www.recipepuppy.com/api/';

// JSONP Callback
function logResults(json){
    // No code here.
}

function getRecipes(searchString, pageNumber) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `${baseUrl}?q=${searchString}&p=${pageNumber}`,
            dataType: 'jsonp',
            jsonpCallback: "logResults",  
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                console.log("Failed to get recipes....");
                reject(error);
            }
        });
    });
};
