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
$( document ).ready(function() {
  listPosts();
});
