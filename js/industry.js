var industry_arr = new Array("Employed for wages", "Self-employed", "Out of work for less than 1 year", "Out of work for more than 1 year", "A homemaker", "A student", "Retired", "Unable to work");

function populateIndustry(industryElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var industryElement = document.getElementById( industryElementId );
	industryElement.length=0;
	industryElement.options[0] = new Option('Select employment status','-1');
	industryElement.selectedIndex = 0;
	for (var i=0; i<industry_arr.length; i++) {
		industryElement.options[industryElement.length] = new Option(industry_arr[i],industry_arr[i]);
	}
}