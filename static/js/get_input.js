// define the mappings from categories to integers
var MSZoningMappings = {};
MSZoningMappings["Agriculture"] = "A";
MSZoningMappings["Commercial"] = "C";
MSZoningMappings["Floating Village Residential"] = "FV";
MSZoningMappings["Industrial"] = "I";
MSZoningMappings["Residential High Density"] = "RH";
MSZoningMappings["Residential Low Density"] = "RL";
MSZoningMappings["Residential Low Density Park"] = "RP";
MSZoningMappings["Residential Medium Density"] = "RM";

var StreetMappings = {};
StreetMappings["Gravel"] = "Grvl";
StreetMappings["Paved"] = "Pave";

var LandContourMappings = {};
LandContourMappings["Near Flat/Level"] = "Lvl";
LandContourMappings["Banked"] = "Bnk";
LandContourMappings["Hillside"] = "HLS";
LandContourMappings["Depression"] = "Low";

var NeighborhoodMappings = {};
NeighborhoodMappings["Bloomington Heights"] = "Blmngtn";
NeighborhoodMappings["Bluestem"] = "Blueste";
NeighborhoodMappings["Briardale"] = "BrDale";
NeighborhoodMappings["Brookside"] = "BrkSide";
NeighborhoodMappings["Clear Creek"] = "ClearCr";
NeighborhoodMappings["College Creek"] = "CollgCr";
NeighborhoodMappings["Crawford"] = "Crawfor";
NeighborhoodMappings["Edwards"] = "Edwards";
NeighborhoodMappings["Gilbert"] = "Gilbert";
NeighborhoodMappings["Iowa DOT and Rail Road"] = "IDOTRR";
NeighborhoodMappings["Meadow Village"] = "MeadowV";
NeighborhoodMappings["Mitchell"] = "Mitchel";
NeighborhoodMappings["North Ames"] = "Names";
NeighborhoodMappings["Northridge"] = "NoRidge";
NeighborhoodMappings["Northpark Villa"] = "NPkVill";
NeighborhoodMappings["Northridge Heights"] = "NridgHt";
NeighborhoodMappings["Northwest Ames"] = "NWAmes";
NeighborhoodMappings["Old Town"] = "OldTown";
NeighborhoodMappings["South & West of Iowa State University"] = "SWISU";
NeighborhoodMappings["Sawyer"] = "Sawyer";
NeighborhoodMappings["Sawyer West"] = "SawyerW";
NeighborhoodMappings["Somerset"] = "Somerst";
NeighborhoodMappings["Stone Brook"] = "StoneBr";
NeighborhoodMappings["Timberland"] = "Timber";
NeighborhoodMappings["Veenker"] = "Veenker";

var BldgTypeMappings = {};
BldgTypeMappings["Single-family Detached"] = "1Fam";
BldgTypeMappings["Two-family Conversion"] = "2FmCon";
BldgTypeMappings["Duplex"] = "Duplx";
BldgTypeMappings["Townhouse End Unit"] = "TwnhsE";
BldgTypeMappings["Townhouse Inside Unit"] = "TwnhsI";

var HouseStyleMappings = {};
HouseStyleMappings["One story"] = "1Story";
HouseStyleMappings["One and one-half story: 2nd level finished"] = "1.5Fin";
HouseStyleMappings["One and one-half story: 2nd level unfinished"] = "1.5Unf";
HouseStyleMappings["Two story"] = "2Story";
HouseStyleMappings["Two and one-half story: 2nd level finished"] = "2.5Fin";
HouseStyleMappings["Two and one-half story: 2nd level unfinished"] = "2.5Unf";
HouseStyleMappings["Split Foyer"] = "SFoyer";
HouseStyleMappings["Split Level"] = "SLvl";

var FoundationMappings = {};
FoundationMappings["Brick & Tile"] = "BrkTil";
FoundationMappings["Cinder Block"] = "CBlock";
FoundationMappings["Poured Contrete"] = "PConc";
FoundationMappings["Slab"] = "Slab";
FoundationMappings["Stone"] = "Stone";
FoundationMappings["Wood"] = "Wood";

var KitchenQualMappings = {};
KitchenQualMappings["Excellent"] = "Ex";
KitchenQualMappings["Good"] = "Gd";
KitchenQualMappings["Typical/Average"] = "TA";
KitchenQualMappings["Fair"] = "Fa";
KitchenQualMappings["Poor"] = "Po";



function getQuickInput(){
	// categorical attributes
	MSZoning = document.getElementById('mszoning').value;
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
		{ "MSZoning" : MSZoningMappings[MSZoning]},
		{ "Street" : StreetMappings[Street]},
		{ "LandContour" : LandContourMappings[LandContour]},
		{ "Neighborhood" : NeighborhoodMappings[Neighborhood]},
		{ "BldgType" : BldgTypeMappings[BldgType]},
		{ "HouseStyle" : HouseStyleMappings[HouseStyle]},
		{ "Foundation" : FoundationMappings[Foundation]},
		{ "KitchenQual" : KitchenQualMappings[KitchenQual]},
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