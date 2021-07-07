// basic cookie
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
  let setsplit = all[0].split(' ');
  for (let x = 0; x < setsplit.length; ++x) {
    if (setsplit[x].includes(name)) {
      duellen = equal(setsplit[x], '=');
      endform = setsplit[x].substring(duellen, setsplit[x].length);
      return (endform);
    }
  }
  return ("");
}

function showfunc() {
  const user = getCookie('Firstname');

  alert('Welcome: ' + user);
}

function setCookies(e) {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  // let is for 10 days only
  let d = new Date();
  const days = 10;
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const date_time = "expires=" + d.toUTCString();
  const cookie = `${firstname}=${email}; ${date_time};path=/`;
  document.cookie = cookie;
}


function showCookies(e) {
  const p = document.createElement('p');
  const decodeCookie = decodeURIComponent(document.cookie).split(';');
  let txt = decodeCookie[0].split(' ');
  txt = `${txt[0]} - ${txt[1]}`;
  const cookies = `<strong>Cookies:</strong> ${txt.replace(/=/g, ': ')}`;
  p.innerHTML = cookies;
  document.querySelector('main').append(p);
  showfunc();
}

document.addEventListener("DOMContentLoaded", function(event) {
  const formlog = document.getElementById('log');
  const showcookis = document.getElementById('btn-show-cook');
  formlog.addEventListener('submit', setCookies);
  showcookis.addEventListener('click', showCookies);
})