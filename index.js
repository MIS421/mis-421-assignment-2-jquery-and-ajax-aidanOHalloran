$(document).ready(function () {
    // Create a dialog element
    $('#searchResults').dialog({
        autoOpen: false, // Don't open the dialog immediately
    });

    let results = '';

    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', apiSearch);

    function apiSearch() {
        var params = {
            "q": $("#query").val(),
            "count": "50",
            "offset": "0",
            "mkt": "en-us"
        };

        $.ajax({
            url: "https://api.bing.microsoft.com/v7.0/search?" + $.param(params),
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "75f75ee9f84448b1814b1fd9621aeb85");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Region", "global");
            },
            type: "GET",
        })
            .done(function (data) {
                const len = data.webPages.value.length;

                for (let i = 0; i < len; i++) {
                    results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
                }

                // Clear any previous content
                $('#searchResults').empty();

                // Set the content
                $('#searchResults').html(results);

                // Open the dialog after setting the content
                $('#searchResults').dialog('open');

                 //set search results to visible
                document.getElementById('searchResults').style.visibility = 'visible';
            })
            .fail(function () {
                alert("error");
            });
    }
});
