// welcom = press logout
function showWelcomeMessageOrForm() {
  const name = getCookie("Firstname");
  const email = getCookie("Email");
  if (name !== "" && email !== "") {
    hideForm();
    let title = document.createElement('h1');
    title.id = "welcome";
    title.innerHTML = `<strong>Welcome: ${name}</strong><a id="logout" style="font-style: italic; margin-left: 12px;">(logout)</a>`;
    document.querySelector('main').append(title);
    document.getElementById('logout').addEventListener('click', deleteCookiesAndShowForm);
  } else {
    showForm();
  }
}

function showForm() {
  const exist = document.getElementById('welcome');
  if (exist !== null) {
    exist.remove();
  }

  let form = document.getElementById('login');

  if (form === null) {
    makeform();
  } else {
    form.style.visibility = 'visible';
  }
}


function hideForm() {
  let form = document.getElementById('login');

  if (form !== null) {
    form.style.visibility = 'hidden'
  }
}


function deleteCookiesAndShowForm() {
  document.cookie = "Firstname=; expires=Thu, 07 July 2021 00:00:00 UTC; path=/;";
  document.cookie = "Email=; expires=Thu, 07 July 2021 00:00:00 UTC; path=/;";

  showForm();
}


function makeform() {
  let form = document.createElement('div');
  form.id = "login";

  form.innerHTML = '<h2>Login to the website</h2>\
                    <form id="log">\
                      <input type="text" placeholder="Firstname" id="firstname" required>\
                      <input type="text" placeholder="Email" id="email" required>\
                      <input type="submit" value="Log me in">\
                    </form>';

  document.querySelector('main').append(form);
  const addforme = document.getElementById('log');
  addforme.addEventListener('submit', setCookies);
}


function equal(string, c) {
  for (let x = 0; x < string.length; ++x) {
    if (string[x] == c) {
      return (x + 1);
    }
  }

  return (0);
}


function getCookie(cname) {
  let name = cname + '=';
  const decodeCookie = decodeURIComponent(document.cookie);
  const all = decodeCookie.split(';');

  let space = all[0].split(' ');
  for (let x = 0; x < space.length; ++x) {
    if (space[x].includes(name)) {
      duellen = equal(space[x], '=');
      endform = space[x].substring(duellen, space[x].length);
      return (endform);
    }
  }

  return ("");
}



function setCookies(e) {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  // Date of expiration
  let d = new Date();
  const days = 10;
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const date_time = "expires=" + d.toUTCString();

  const cookie = `Email=${email} Firstname=${firstname}; ${date_time};path=/`;

  document.cookie = cookie;
}




document.addEventListener("DOMContentLoaded", function(event) {
  showWelcomeMessageOrForm();
});