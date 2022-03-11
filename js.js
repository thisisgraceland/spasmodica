<!--
if(document.images) {
	var imagesToLoad = new Array("nav_home","nav_shop","nav_creatures","nav_resellers","nav_sightings","nav_freebies","nav_about","nav_contact","nav_faqs");
	for (var i=0; i < imagesToLoad.length; i++) {
		eval("var img" + i + "= new Image();");
		eval("img" + i + ".src = \"images/" + imagesToLoad[i] + ".gif\";");
		eval("img" + i + ".src = \"images/" + imagesToLoad[i] + "_on.gif\";");
	}
}
	
function imgOver(whichImg) {
	if(document.images) {
		eval("document." + whichImg + ".src = \"images/" + whichImg + "_on.gif\";");
	}
}

//function imgOver(whichImg) {
	//if(document.images) {
		//eval("document." + whichImg + ".src = \"/images/" + whichImg + "_over.gif\";");
		//}
	//}
	
function imgOff(whichImg) {
	if(document.images) {
		eval("document." + whichImg + ".src = \"images/" + whichImg + ".gif\";");
	}
}
	
//function launch_window (name,page) {
	//whichWindow = window.open(page, name, "width=780,height=550,location=0,menubar=0,resizable=0,scrollbars=yes,status=0,toolbar=0,hotkeys=0,directories=0");
	//}
	
function clearText(searchField){ 
	searchField.value = ""; 
}	
	
// -->