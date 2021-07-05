// dev environment
function createSearchForm() {
  $( 'body' ).prepend( '<form>\n<input type="text">\n<input type="submit" value="Submit">\n</form>\n<ul></ul>' );
}

function addNewArticle(id, title, snippet) {
  rows = '<li><p><span>' + id + '- </span><b>' + title + '</b></p><p>' + snippet + '</p</li>';

  $( 'ul' ).append(rows);
}

function queryWikipedia(search) {
  let request = new XMLHttpRequest();

  let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=' + search + '&origin=*';
  request.open('GET', url, true);

  request.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
      respns = JSON.parse(request.response);
      respns = (Object.values(respns.query.pages)[0]);
      addNewArticle(respns.pageid, respns.title, respns.extract);
    }
  };
  request.send();
}

function submit() {
  $('form').submit( function(e){
    let str = $( 'form input' ).first().val();
    queryWikipedia(str);
    e.preventDefault();
  });
}

$( document ).ready(function() {
  createSearchForm();
  submit();
});
