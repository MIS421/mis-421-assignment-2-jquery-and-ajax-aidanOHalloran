var len;
var results = '';

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
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "75f75ee9f84448b1814b1fd9621aeb85", "Ocp-Apim-Subscription-Region", "global");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      // console.log(data)
      
      for (i = 0; i < len; i++) {
        console.log(data.webPages.value[i])
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      // $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}