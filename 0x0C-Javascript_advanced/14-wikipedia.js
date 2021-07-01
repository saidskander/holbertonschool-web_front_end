//  Simple callback check html file
function createElement(data) {
  pararaph = document.createElement('p');
  txt = document.createTextNode(data);
  pararaph.appendChild(txt);
  document.body.append(pararaph);
}
function queryWikipedia(callback) {
  var req = new XMLHttpRequest();
  req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  req.responseType = 'json';
  req.onreadystatechange = function () {
    if(this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      callback(req.response.query.pages["21721040"].extract);
    }
  };
  req.send();
}
document.addEventListener("DOMContentLoaded", function(event) {
  queryWikipedia(createElement);
})
