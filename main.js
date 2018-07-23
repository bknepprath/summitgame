var siteLayout = 1;

//global JD variables
var choiceAhighlight = 0;
var choiceBhighlight = 0;
var choiceChighlight = 0;
var choiceDhighlight = 0;
var ghostsleft = 5;

var rhymeword1 = "placeholder1";
var rhymeword2 = "placeholder2";
var rhymeword3 = "placeholder3";
var rhymeword4 = "placeholder4";

var choiceArray = ["1", "2", "3", "4"];
var choiceArray2 = ["1", "2", "3", "4"];

var rhymegroupA = ["soup", "poop", "group", "boop", "foop", "hoop", "snoop", "gloop", "oop!", "loop", "coupe", "droop", "scoop", "whoop", "troop", "stoop"];
var rhymegroupB = ["couch", "slouch", "pouch", "ouch!", "house", "grouch", "faust", "vouch", "slouch"];
var rhymegroupC = ["diplomat", "I'm so fat", "alley cat", "cricket bat", "habitat", "acrobat", "autocrat", "babysat", "caveat", "bowler hat", "bureaucrat", "copycat", "vampire bat", "tit for tat"];
var rhymegroupD = ["hedge", "dredge", "wedge", "pledge", "edge", "sledge", "fledge", "allege"];

//start various games functions
function startJd(){
	//variables for JD land
	var iowaillinoisohio = ["Iowa", "Illinois", "Ohio"];
	var rapadjective = ["oily", "ragged", "dangerous", "swole", "swaggy", "jewish", "wooly", "fluid", "suave", "'dad-loves-'em'", "rank", "powerful", "moving", "meaty", "big", "coarse", "mean", "inconsistent", "quality", "'don't-care-bout-your-feelings'", "breakfast", "black-as-the-night", "MLC-level", "blonde", "ugly", "nasty", "feminine", "funky", "groovy", "pleasant", "gay", "breezy"];
	var rapnoun = ["bars", "threads", "raps", "lines", "verses", "bill makers", "juiceys", "artpieces", "punches", "koolers", "brews", "lyrical smoochies", "money makers", "corporate letters", "poems", "lyrics", "manuscripts", "scribbles"];
	
	siteLayout = 2;
	//conversational variables
	iowaillinoisohiochoice = Math.floor(Math.random()*iowaillinoisohio.length);
	rapadjectivechoice = Math.floor(Math.random()*rapadjective.length);
	rapnounchoice = Math.floor(Math.random()*rapnoun.length);
	document.getElementById("iowaillinoisohio").innerHTML = iowaillinoisohio[iowaillinoisohiochoice];
	document.getElementById("rapadjective").innerHTML = rapadjective[rapadjectivechoice];
	document.getElementById("rapnoun").innerHTML = rapnoun[rapnounchoice];
}
function goChurch(){
	jd1.style.display = "none";
	jd2.style.display = "block";
	jdlocation = "Church Entryway";
	document.getElementById("jdlocation").innerHTML = jdlocation;
	setGhostname();
	setGhosthealth();
	setChallenge();
	setGhostsleft();
	document.getElementById("choiceArray2").innerHTML = choiceArray2;
}
function setGhostname(){
	if(jdlocation == "Church Entryway"){
		if(ghostsleft>0){
			ghostname = "Greeter Ghost: Lvl 1";
		}
		if(ghostsleft === 0 && ghostname == "Greeter Ghost: Lvl 1"){
			ghostname = "Outreach Leader: Lvl 3";
			ghostsleft = 1;
		}
		if(ghostsleft === 0 && ghostname == "Outreach Leader: Lvl 3"){
			jd2.style.display = "none";
			jd3.style.display = "block";
		}
	}
	document.getElementById("ghostname").innerHTML = ghostname;
}
function setGhosthealth(){
	if(jdlocation == "Church Entryway"){
		
		ghosthealth = (Math.floor(Math.random()*5)+3);
	}
	document.getElementById("ghosthealth").innerHTML = ghosthealth;
}
function setGhostsleft(){
	var ghostsleft = 5;
	document.getElementById("ghostsleft").innerHTML = ghostsleft;
}
function unlockBoss(){
	if(jdlocation == "Church Entryway"){
		ghostname = "Outreach Crew Leader: Lvl 3";
	}
}
function setChallenge(){
	randomgroupAvariable = Math.floor(Math.random()*rhymegroupA.length);
	randomgroupBvariable = Math.floor(Math.random()*rhymegroupB.length);
	randomgroupCvariable = Math.floor(Math.random()*rhymegroupC.length);
	randomgroupDvariable = Math.floor(Math.random()*rhymegroupD.length);
	if(choiceArray2[0] == 1){
		rhymeword1 = rhymegroupA[randomgroupAvariable];
	}
	if(choiceArray2[0] == 2){
		rhymeword1 = rhymegroupB[randomgroupBvariable];
	}
	if(choiceArray2[0] == 3){
		rhymeword1 = rhymegroupC[randomgroupCvariable];
	}
	if(choiceArray2[0] == 4){
		rhymeword1 = rhymegroupD[randomgroupDvariable];
	}
	randomgroupAvariable = Math.floor(Math.random()*rhymegroupA.length);
	randomgroupBvariable = Math.floor(Math.random()*rhymegroupB.length);
	randomgroupCvariable = Math.floor(Math.random()*rhymegroupC.length);
	randomgroupDvariable = Math.floor(Math.random()*rhymegroupD.length);
	if(choiceArray2[1] == 1){
		rhymeword2 = rhymegroupA[randomgroupAvariable];
	}
	if(choiceArray2[1] == 2){
		rhymeword2 = rhymegroupB[randomgroupBvariable];
	}
	if(choiceArray2[1] == 3){
		rhymeword2 = rhymegroupC[randomgroupCvariable];
	}
	if(choiceArray2[1] == 4){
		rhymeword2 = rhymegroupD[randomgroupDvariable];
	}
	randomgroupAvariable = Math.floor(Math.random()*rhymegroupA.length);
	randomgroupBvariable = Math.floor(Math.random()*rhymegroupB.length);
	randomgroupCvariable = Math.floor(Math.random()*rhymegroupC.length);
	randomgroupDvariable = Math.floor(Math.random()*rhymegroupD.length);
	if(choiceArray2[2] == 1){
		rhymeword3 = rhymegroupA[randomgroupAvariable];
	}
	if(choiceArray2[2] == 2){
		rhymeword3 = rhymegroupB[randomgroupBvariable];
	}
	if(choiceArray2[2] == 3){
		rhymeword3 = rhymegroupC[randomgroupCvariable];
	}
	if(choiceArray2[2] == 4){
		rhymeword3 = rhymegroupD[randomgroupDvariable];
	}
	randomgroupAvariable = Math.floor(Math.random()*rhymegroupA.length);
	randomgroupBvariable = Math.floor(Math.random()*rhymegroupB.length);
	randomgroupCvariable = Math.floor(Math.random()*rhymegroupC.length);
	randomgroupDvariable = Math.floor(Math.random()*rhymegroupD.length);
	if(choiceArray2[3] == 1){
		rhymeword4 = rhymegroupA[randomgroupAvariable];
	}
	if(choiceArray2[3] == 2){
		rhymeword4 = rhymegroupB[randomgroupBvariable];
	}
	if(choiceArray2[3] == 3){
		rhymeword4 = rhymegroupC[randomgroupCvariable];
	}
	if(choiceArray2[3] == 4){
		rhymeword4 = rhymegroupD[randomgroupDvariable];
	}
	
	document.getElementById("rhymeword1").innerHTML = rhymeword1;
	document.getElementById("rhymeword2").innerHTML = rhymeword2;
	document.getElementById("rhymeword3").innerHTML = rhymeword3;
	document.getElementById("rhymeword4").innerHTML = rhymeword4;
	document.getElementById("choiceArray").innerHTML = choiceArray;
}
function makeChoiceAhighlight1(){
	choiceAhighlight = 1;
	makeChoiceYellow();
	checkChoices();
}
function makeChoiceBhighlight1(){
	choiceBhighlight = 1;
	makeChoiceYellow();
	checkChoices();
}
function makeChoiceChighlight1(){
	choiceChighlight = 1;
	makeChoiceYellow();
	checkChoices();
}
function makeChoiceDhighlight1(){
	choiceDhighlight = 1;
	makeChoiceYellow();
}
function makeChoiceYellow(){
	if(choiceAhighlight == 1){
		choiceA.style.background = "yellow";
	}
	if(choiceBhighlight == 1){
		choiceB.style.background = "yellow";
	}
	if(choiceChighlight == 1){
		choiceC.style.background = "yellow";
	}
	if(choiceDhighlight == 1){
		choiceD.style.background = "yellow";
	}
}
function makeChoiceWhite(){
	if(choiceAhighlight === 0){
		choiceA.style.background = "white";
	}
	if(choiceBhighlight === 0){
		choiceB.style.background = "white";
	}
	if(choiceChighlight === 0){
		choiceC.style.background = "white";
	}
	if(choiceDhighlight === 0){
		choiceD.style.background = "white";
	}
}

function checkChoices(){
	if((choiceAhighlight + choiceBhighlight + choiceChighlight + choiceDhighlight)>1){
		resetChoices();
		ghosthealth -= 1;
		document.getElementById("ghosthealth").innerHTML = ghosthealth;
	}
}

function resetChoices(){
	choiceAhighlight = 0;
	choiceBhighlight = 0;
	choiceChighlight = 0;
	choiceDhighlight = 0;
	setChallenge();
	makeChoiceWhite();
	makeChoiceArrayPair();
	if(ghosthealth<1){
		setGhosthealth();
		ghostsleft -= 1;
		document.getElementById("ghostsleft").innerHTML = ghostsleft;
		setGhostname();
	}
}

function shuffle(array){
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

//
function makeChoiceArrayPair(){
	choiceArray = shuffle(choiceArray);
	choiceArray2 = choiceArray;
	
	randomnumberforchoices = (Math.floor(Math.random()*6)+1);
	if(randomnumberforchoices == 1){
		choiceArray2[0] = choiceArray2[1];
	}
	if(randomnumberforchoices == 2){
		choiceArray2[0] = choiceArray2[2];
	}
	if(randomnumberforchoices == 3){
		choiceArray2[0] = choiceArray2[3];
	}
	if(randomnumberforchoices == 4){
		choiceArray2[1] = choiceArray2[2];
	}
	if(randomnumberforchoices == 5){
		choiceArray2[1] = choiceArray2[3];
	}
	if(randomnumberforchoices == 6){
		choiceArray2[2] = choiceArray2[3];
	}
	document.getElementById("choiceArray2").innerHTML = choiceArray2;
	
	choiceArray = ["1", "2", "3", "4"];
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
