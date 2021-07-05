// Another Get API -- json
function addPostRow(data) {
  pargrph = '<p><span>Post created with id ' + data.id + ', title: ' + data.title + ', author: ' + data.author + '</span></p>';
  $("body").append(pargrph);
}

function listPosts() {
  // using atom port 3000
  $.get('http://localhost:3000/posts', function(data) {
    // length of the data
    let len = data.length;
    for (let x = 0; x < len; ++x) {
       addPostRow(data[x]);
    }
  });
}

function buildForm() {
  searchform = '<form action="sendform()">\n<div class="box">\n<label for="by">Author</label>\n<input name="uno" type="text" id="by">\n</div>';
  searchform += '<div class="box">\n<label for="tit">Title</label>\n<textarea name="dos" id="tit" cols="12" rows="1"></textarea>\n</div>'
  searchform += '<input type="submit" value="Submit">\n</form>'
  $( 'body' ).prepend( searchform );
  sendForm();
}

function sendForm() {
  $( "form" ).submit(function( e ) {
    $( 'form' ).after( '<p class="info">About to send the query to the API</p>' );

    let values = $( this ).serializeArray();
    author = values[0].value;
    title = values[1].value;
    add_new_article = {
      title: "",
      author: "",
    }
    add_new_article.title = title;
    add_new_article.author = author;
    $.post( 'http://localhost:3000/posts', add_new_article)

    .done(function() {
      addPostRow(add_new_article);
    })

    .fail(function () {
      alert('Error sending the POST query');
    });

    $( '.info' ).remove();
    e.preventDefault();
  });
}

$( document ).ready(function() {
  listPosts();
});
