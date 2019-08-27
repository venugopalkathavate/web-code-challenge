const baseUrl = 'http://www.recipepuppy.com/api/';

// JSONP Callback
function logResults(json){
    // No code here.
}

function getRecipes(searchString, pageNumber) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `?q=${searchString}&p=${pageNumber}`,
            dataType: 'jsonp',
            jsonpCallback: "logResults",  
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                console.log(data);
                resolve(data);
            },
            error: function (error) {
                console.log("FAIL....");
                reject(error);
            }
        });
    });
};
