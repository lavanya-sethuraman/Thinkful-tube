var youTube_Url='https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm,callback){
  var params={
    part: 'snippet',
    key: 'AIzaSyDh5Y_ujDw5C7aI6ZUC9ix1T-kwuM7AJI8',
    q: searchTerm
  };

  $.getJSON(youTube_Url,params,callback);

}

function callback(data){

  var resultElement='';
  if(data.items.length > 0){
    data.items.forEach(function(item){
    resultElement += '<img src="'+item.snippet.thumbnails.high.url+'">';
    });
  }
  else
    resultElement+='<p> No Results! </p>';

  $(".js-search-results").html(resultElement);
}


function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, callback);
  });
}

$(function(){watchSubmit();});
