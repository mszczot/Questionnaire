var race_arr = new Array("Forestry, fishing, hunting or agriculture support", "Mining", "Utilities", "Construction", "Manufacturing", "Wholesale trade", "Retail trade", "Transportation or warehousing", "Information", "Finance or insurance", "Real estate or rental and leasing", "Professional, scientific or technical services", "Management of companies or enterprises", "Admin, support, waste management or remediation services", "Educational services", "Health care or social assistance", "Arts, entertainment or recreation", "Accommodation or food services", "Currently in education","Other services (except public administration)","Unclassified establishments");

function populateRace(raceElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var raceElement = document.getElementById( raceElementId );
	raceElement.length=0;
	raceElement.options[0] = new Option('Select race','-1');
	raceElement.selectedIndex = 0;
	for (var i=0; i<race_arr.length; i++) {
		raceElement.options[raceElement.length] = new Option(race_arr[i],race_arr[i]);
	}
}