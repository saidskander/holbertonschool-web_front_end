//  DOM elements with append
function createFamilyTree() {
  $("body").append("<table>\n<thead style=\"font-weight: bold; font-size: 50px;\">\n<tr>\n<th> Firstname </th>\n<th> Lastname</th>\n</tr>\n</thead>\
        \n<tbody style=\"font-weight: 510; font-size: 30px;\">\n<tr>\n<td>Guillaume</td>\n<td>Salva</td>\n</tr>\n<tr>\n<td>Paulette</td>\n\
        <td>Salva</td>\n</tr>\n<tr>\n<td>Antoine</td>\n<td>Salva</td>\n</tr>\n</tbody>\n</table>");
}

$(document).ready(function() {
  createFamilyTree();
});
