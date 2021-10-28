document.addEventListener('DOMContentLoaded', function() {
	
    var checkPageButton = document.getElementById('submit');
	
    checkPageButton.addEventListener('click', function() { 
	
	if (document.getElementById('input').value != '') {
	
		var article = document.getElementById('input').value;
		chrome.tabs.create({url:"https://#" + article});
	}
		
    }, false);
}, false);

document.onkeyup = function (e) {
	e = e || window.event;
	if (e.keyCode === 13) {
		
		var article = document.getElementById('input').value;
		chrome.tabs.create({url:"https://#" + article});
	}
	return false;
};
