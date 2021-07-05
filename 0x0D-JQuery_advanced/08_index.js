// Pagination for the  API
function createSearchForm() {
  searchform =  '<form>\n<input type="text">\n<input type="submit" value="Submit">\n</form>\n'
  searchform += '<ul class="articles"></ul>\n<ul class="pagnum" style="display:flex; flex-direction:row; list-style: none;"></ul>'
  $( 'body' ).prepend( searchform );
}

function addNewArticle(id, title, snippet) {
  rows = '<li><p><span>' + id + '- </span><b>' + title + '</b></p><p>' + snippet + '</p</li>';

  $( '.articles' ).append(rows);
}

function queryWikipedia(search, offset = 0) {
  let req = new XMLHttpRequest();

  let url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + search  + '&utf8=&format=json&origin=*&sroffset=' + offset;
  req.open('GET', url, true);

  // requests responses for the  API
  req.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
      res = JSON.parse(req.response);
      all_items = res.query.searchinfo.totalhits;

      // remove articles
      $( '.articles' ).html( '' );
      // add articles
      for (let x = 0; x < 10; ++x) {
        let id = res.query.search[x].pageid;
        let title = res.query.search[x].title;
        let htmltxt = res.query.search[x].snippet;
        addNewArticle(id, title, htmltxt);
      }

      buildPagination(all_items, 10, offset);
    }
  };
  req.send();
}


function buildPagination(numberOfItems, itemsPerPage, currentOffset) {
  $( '.pagnum' ).html( '' );

  // number of lists
  let total = numberOfItems / itemsPerPage;
  for (let x = 1; x < total; ++x) {
    let list = '<li class="page" style="cursor: pointer; font-size: 1rem; margin-left: .5rem; ';
    if (x != currentOffset) {
      list += '">' + x;
    } else {
      list += 'font-weight: bold; font-size: 2rem">' + currentOffset;
    }

    list += '</li>';
    $( '.pagnum' ).append(list);
  }
  press();
}

function submit() {
  $('form').submit( function(e){
    let str = $( 'form input' ).first().val();
    queryWikipedia(str, 0);
    localStorage.setItem("lastquery", str);
    e.preventDefault();
  });
}
function press() {
  $('.page').on('click', function (e) {
    let offset = $(this).text();
    console.log(offset);
    let q = localStorage.getItem("lastquery");
    queryWikipedia(q, offset);
    e.preventDefault();
  });
}
$( document ).ready(function() {
  createSearchForm();
  submit();
});
