function getQuickInput(){
	// categorical attributes
	MSSubClass = document.getElementById('mszoning').value;
	Street = document.getElementById('street').value;
	LandContour = document.getElementById('landcontour').value;
	Neighborhood = document.getElementById('neighborhood').value;
	BldgType = document.getElementById('bldgtype').value;
	HouseStyle = document.getElementById('housestyle').value;
	Foundation = document.getElementById('foundation').value;
	KitchenQual = document.getElementById('kitchenqual').value;

	// numerical attributes
	OverallQual = document.getElementById('overallqual').value;
	YearBuilt = document.getElementById('yearbuilt').value;
	YearRemodAdd = document.getElementById('remodel').value;
	FirstFlrSF = document.getElementById('flooronesf').value; // 1stFlrSF
	GrLivArea = document.getElementById('grarea').value;
	GarageCars = document.getElementById('garagesize').value;


	var data = [
		{ "MSSubClass" : MSSubClass},
		{ "Street" : Street},
		{ "LandContour" : LandContour},
		{ "Neighborhood" : Neighborhood},
		{ "BldgType" : BldgType},
		{ "HouseStyle" : HouseStyle},
		{ "Foundation" : Foundation},
		{ "KitchenQual" : KitchenQual},
		{ "OverallQual" : OverallQual},
		{ "YearBuilt" : YearBuilt},
		{ "YearRemodAdd" : YearRemodAdd},
		{ "FirstFlrSF" : FirstFlrSF},
		{ "GrLivArea" : GrLivArea},
		{ "GarageCars" : GarageCars},
	];

	console.log(data);

	$.ajax({
		  type: "POST",
		  contentType: "application/json; charset=utf-8",
		  url: "receiver",
		  data: JSON.stringify(data),
		  success: function () {
		    console.log("Data Sent Sucessfully");
		  },
		  dataType: "json"
	});
}