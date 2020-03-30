var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>heigth: ' + window.screen.height + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
alert('Current page: ' + window.location);

var msg2 = '<p><b>page title: </b>' + document.title + '<br />';
msg2 += '<b>page address: </b>' + document.URL + '<br />';
msg2 += '<b>last modified: </b>' + document.lastModified + '</p>';

var el2 = document.getElementById('footer');
el2.innerHTML = msg2;

//Random num
var randomNum = Math.floor((Math.random() * 20) +1);

var el3 = document.getElementById('info');
el3.innerHTML += '<h2>random number</h2><p>' + randomNum + '</p>';

var today = new Date();
/*var year = today.getFullYear();*/
var el4 = document.getElementById('info');
el4.innerHTML += '<h2>today is</h2><p>' + today + '</p>';
