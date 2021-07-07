// basic cookie
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
    document.cookie = `${firstname}=${email};`;
  }
  
  function showCookies(e) {
    const p = document.createElement('p');
    const decodeCookie = decodeURIComponent(document.cookie);
    const all = decodeCookie.split(';');
    let cookies = '<strong>Cookies:</strong>';
  
    for (let x = 0; x < (all.length - 1); ++x) {
      cookies += ` "${all[x]}"`;
    }
  
    p.innerHTML = cookies;
    document.querySelector('main').append(p);
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
    const formlog = document.getElementById('log');
    const showcookis = document.getElementById('btn-show-cook');
    formlog.addEventListener('submit', setCookies);
    showcookis.addEventListener('click', showCookies);
  })