// Post query
function addPostRow(data) {
  prgph = '<p><span>Post created with id ' + ', id: ' + data.id + ', title: ' + data.title + ', author: ' + data.author + '</span></p>';
  $("body").append(prgph);
}

function listPosts() {
  $.get('http://localhost:3000/posts', function(data) {
    let len = data.length;
    for (let x = 1; x < length; ++x) {
      addPostRow(data[x]);
    }
  });
}

function buildForm() {
  html_zone = '<form action="POST">\n<div class="box">\n<label for="by">Author</label>\n<input name="uno" type="text" id="by">\n</div>';
  html_zone += '<div class="box">\n<label for="tit">Title</label>\n<textarea name="dos" id="tit" cols="12" rows="1"></textarea>\n</div>'
  html_zone += '<input type="submit" value="Submit">\n</form>'
  $('body').prepend(html_zone);
  sendForm();
}

function sendForm() {
  $("form").submit(function(e) {
    $('form').after('<p class="detail">About to send the query to the API</p>');

    let values = $(this).serializeArray();
    author = values[0].value;
    title = values[1].value;

    add_new_article = {
      title: "",
      author: "",
    }

    add_new_article.title = title;
    add_new_article.author = author;
    $.post('http://localhost:3000/posts', add_new_article)

      .done(function() {
        addPostRow(add_new_article);
      })

      .fail(function() {
        alert('Error sending the POST query');
      });

    $('.detail').remove();
    e.preventDefault();
  });
}

$(document).ready(function() {
  listPosts();
  buildForm();
});
