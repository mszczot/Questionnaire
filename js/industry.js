var industry_arr = new Array("Forestry, fishing, hunting or agriculture support", "Mining", "Utilities", "Construction", "Manufacturing", "Wholesale trade", "Retail trade", "Transportation or warehousing", "Information", "Finance or insurance", "Real estate or rental and leasing", "Professional, scientific or technical services", "Management of companies or enterprises", "Admin, support, waste management or remediation services", "Educational services", "Health care or social assistance", "Arts, entertainment or recreation", "Accommodation or food services", "Other services (except public administration)","Unclassified establishments");

function populateIndustry(industryElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var industryElement = document.getElementById( industryElementId );
	industryElement.length=0;
	industryElement.options[0] = new Option('Select industry','-1');
	industryElement.selectedIndex = 0;
	for (var i=0; i<industry_arr.length; i++) {
		industryElement.options[industryElement.length] = new Option(industry_arr[i],industry_arr[i]);
	}
}