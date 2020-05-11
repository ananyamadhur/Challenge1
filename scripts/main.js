function convertDistance(e) {
    console.log(e);
	var lightyears = parseFloat(e.target.value);
	var miles = 5879*1000000000*lightyears;
    document.getElementById('mi').value=miles;
}
function convertWeight(e) {
    console.log(e);
	var earth = parseFloat(document.getElementById('wc').value);
	var mars = .38*earth;
    document.getElementById('mw').value=mars;
    document.getElementById('wm').style.color='lightgreen';
}

var dist = 0;
function updateDist () {
    dist = dist + 36000;
    document.getElementById('dtv').innerHTML=dist+' miles';
   if (dist<139808518.253) setTimeout(updateDist,1000);
    else alert('You have reached your destination');  
}


alert('It takes 300 days to reach Mars');
document.getElementById('ly').addEventListener('keyup',convertDistance);

