//Redirection Script
function redirHP(){
	var x = Math.floor(Math.random()* 15)+1;
	if (x == 4) {
		forced404();
	} else {
		window.location.assign("index.html");
	}
}
function redirPI(){
	var x = Math.floor(Math.random()* 3)+1;
	if (x == 3) {
		forced404();
	} else {
		window.location.assign("Project-Ideas.html");
	}
}
function redirID(){
	var x = Math.floor(Math.random()* 3)+1;
	if (x == 3) {
		forced404();
	} else {
		window.location.assign("Industry-Data.html");
	}
}
function redirIW(){
	var x = Math.floor(Math.random()* 3)+1;
	if (x == 3) {
		forced404();
	} else {
		window.location.assign("IT-Work.html");
	}
}
function redirIT(){
	var x = Math.floor(Math.random()* 3)+1;
	if (x == 3) {
		forced404();
	} else {
		window.location.assign("IT-Technologies.html");
	}
}
function redirGR(){
	var x = Math.floor(Math.random()* 3)+1;
	if (x == 3) {
		forced404();
	} else {
		window.location.assign("Group-Reflection.html");
	}
}
function redirTP(){
	var x = Math.floor(Math.random()* 3)+1;
	if (x == 3) {
		forced404();
	} else {
		window.location.assign("Team-Profile.html");
	}
}
function forced404(){
	window.location.assign("404-error.html");
}

function idPG2(){
	window.location.assign("Industry-Data-2.html");
}
function idPG3(){
	window.location.assign("Industry-Data-3.html");
}
function idPG4(){
	window.location.assign("Industry-Data-4.html");
}
function idPG5(){
	window.location.assign("Industry-Data-5.html");
}

function piPG2(){
	window.location.assign("Project-Ideas-2.html");
}
function piPG3(){
	window.location.assign("Project-Ideas-3.html");
}

function itAV(){
	window.location.assign("ITT-AV-1.html");
}
function avPG2(){
	window.location.assign("ITT-AV-2.html");
}
function avPG3(){
	window.location.assign("ITT-AV-3.html");
}

function itCS(){
	window.location.assign("ITT-CS-1.html");
}
function itML(){
	window.location.assign("ITT-ML-1.html");
}
function itRB(){
	window.location.assign("ITT-RB-1.html");
}
