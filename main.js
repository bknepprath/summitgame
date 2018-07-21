var siteLayout = 1;

//start various games functions
function startJd(){
	siteLayout = 2;
}

function resetSite(){
	siteLayout = 1;
}
window.setInterval(function(){
	if(siteLayout == 1){
		mainmenu.style.display = "inline-block";
		jddiv.style.display = "none";
	}
	if(siteLayout == 2){
		mainmenu.style.display = "none";
		jddiv.style.display = "inline-block";
	}
	if(siteLayout != 1){
		backbutton.style.display = "block";
	}
	else{
		backbutton.style.display = "none";
	}
}, 1000);
