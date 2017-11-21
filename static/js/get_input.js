// define the mappings from categories to integers

categories = ['', '1.5Fin', '1.5Unf', '1Fam', '1Story', '2.5Fin', '2.5Unf', '2Story', '2Types', '2fmCon', 'A', 'ALQ', 'Abnorml', 'AdjLand', 'AllPub', 'Alloca', 'Artery', 'AsbShng', 'AsphShn', 'Attchd', 'Av', 'BLQ', 'Basment', 'Blmngtn', 'Blueste', 'Bnk', 'BrDale', 'Brk Cmn', 'BrkCmn', 'BrkComm', 'BrkFace', 'BrkSide', 'BrkTil', 'BuiltIn', 'C', 'CBlock', 'COD', 'CWD', 'CarPort', 'CemntBd', 'ClearCr', 'ClyTile', 'CmentBd', 'CollgCr', 'CompShg', 'Con', 'ConLD', 'ConLI', 'ConLw', 'Corner', 'Crawfor', 'CulDSac', 'Detchd', 'Duplex', 'Edwards', 'Elev', 'Ex', 'FR2', 'FR3', 'FV', 'Fa', 'Family', 'Feedr', 'Fin', 'Flat', 'Floor', 'FuseA', 'FuseF', 'FuseP', 'GLQ', 'Gable', 'Gambrel', 'Gar2', 'GasA', 'GasW', 'Gd', 'GdPrv', 'GdWo', 'Gilbert', 'Grav', 'Greens', 'GrnHill', 'Grvl', 'Gtl', 'HLS', 'HdBoard', 'Hip', 'I', 'IDOTRR', 'IR1', 'IR2', 'IR3', 'ImStucc', 'Inside', 'Landmrk', 'Low', 'Lvl', 'LwQ', 'Maj1', 'Maj2', 'Mansard', 'MeadowV', 'Membran', 'Metal', 'MetalSd', 'Min1', 'Min2', 'Mitchel', 'Mix', 'Mn', 'MnPrv', 'MnWw', 'Mod', 'N', 'NA', 'NAmes', 'NPkVill', 'NWAmes', 'New', 'No', 'NoRidge', 'NoSeWa', 'NoSewr', 'None', 'Norm', 'Normal', 'NridgHt', 'OldTown', 'Oth', 'OthW', 'Other', 'Othr', 'P', 'PConc', 'Partial', 'Pave', 'Plywood', 'Po', 'PosA', 'PosN', 'PreCast', 'RFn', 'RH', 'RL', 'RM', 'RRAe', 'RRAn', 'RRNe', 'RRNn', 'Rec', 'Reg', 'Roll', 'SBrkr', 'SFoyer', 'SLvl', 'SWISU', 'Sal', 'Sawyer', 'SawyerW', 'Sev', 'Shed', 'Slab', 'Somerst', 'Stone', 'StoneBr', 'Stucco', 'TA', 'Tar&Grv', 'TenC', 'Timber', 'Twnhs', 'TwnhsE', 'Typ', 'Unf', 'VWD', 'Veenker', 'VinylSd', 'WD ', 'Wall', 'Wd Sdng', 'Wd Shng', 'WdShake', 'WdShing', 'WdShngl', 'Wood', 'Y']

console.log(categories.indexOf("2fmCon"))
var MSZoningMappings = {};
MSZoningMappings["Agriculture"] = categories.indexOf("A");
MSZoningMappings["Commercial"] = categories.indexOf("C");
MSZoningMappings["Floating Village Residential"] = categories.indexOf("FV");
MSZoningMappings["Industrial"] = categories.indexOf("I");
MSZoningMappings["Residential High Density"] = categories.indexOf("RH");
MSZoningMappings["Residential Low Density"] = categories.indexOf("RL");
MSZoningMappings["Residential Low Density Park"] = categories.indexOf("RP");
MSZoningMappings["Residential Medium Density"] = categories.indexOf("RM");

var StreetMappings = {};
StreetMappings["Gravel"] = categories.indexOf("Grvl");
StreetMappings["Paved"] = categories.indexOf("Pave");

var LandContourMappings = {};
LandContourMappings["Near Flat/Level"] = categories.indexOf("Lvl");
LandContourMappings["Banked"] = categories.indexOf("Bnk");
LandContourMappings["Hillside"] = categories.indexOf("HLS");
LandContourMappings["Depression"] = categories.indexOf("Low");

var NeighborhoodMappings = {};
NeighborhoodMappings["Bloomington Heights"] = categories.indexOf("Blmngtn");
NeighborhoodMappings["Bluestem"] = categories.indexOf("Blueste");
NeighborhoodMappings["Briardale"] = categories.indexOf("BrDale");
NeighborhoodMappings["Brookside"] = categories.indexOf("BrkSide");
NeighborhoodMappings["Clear Creek"] = categories.indexOf("ClearCr");
NeighborhoodMappings["College Creek"] = categories.indexOf("CollgCr");
NeighborhoodMappings["Crawford"] = categories.indexOf("Crawfor");
NeighborhoodMappings["Edwards"] = categories.indexOf("Edwards");
NeighborhoodMappings["Gilbert"] = categories.indexOf("Gilbert");
NeighborhoodMappings["Iowa DOT and Rail Road"] = categories.indexOf("IDOTRR");
NeighborhoodMappings["Meadow Village"] = categories.indexOf("MeadowV");
NeighborhoodMappings["Mitchell"] = categories.indexOf("Mitchel");
NeighborhoodMappings["North Ames"] = categories.indexOf("Names");
NeighborhoodMappings["Northridge"] = categories.indexOf("NoRidge");
NeighborhoodMappings["Northpark Villa"] = categories.indexOf("NPkVill");
NeighborhoodMappings["Northridge Heights"] = categories.indexOf("NridgHt");
NeighborhoodMappings["Northwest Ames"] = categories.indexOf("NWAmes");
NeighborhoodMappings["Old Town"] = categories.indexOf("OldTown");
NeighborhoodMappings["South & West of Iowa State University"] = categories.indexOf("SWISU");
NeighborhoodMappings["Sawyer"] = categories.indexOf("Sawyer");
NeighborhoodMappings["Sawyer West"] = categories.indexOf("SawyerW");
NeighborhoodMappings["Somerset"] = categories.indexOf("Somerst");
NeighborhoodMappings["Stone Brook"] = categories.indexOf("StoneBr");
NeighborhoodMappings["Timberland"] = categories.indexOf("Timber");
NeighborhoodMappings["Veenker"] = categories.indexOf("Veenker");

var BldgTypeMappings = {};
BldgTypeMappings["Single-family Detached"] = categories.indexOf("1Fam");
BldgTypeMappings["Two-family Conversion"] = categories.indexOf("2FmCon");
BldgTypeMappings["Duplex"] = categories.indexOf("Duplx");
BldgTypeMappings["Townhouse End Unit"] = categories.indexOf("TwnhsE");
BldgTypeMappings["Townhouse Inside Unit"] = categories.indexOf("TwnhsI");

var HouseStyleMappings = {};
HouseStyleMappings["One story"] = categories.indexOf("1Story");
HouseStyleMappings["One and one-half story: 2nd level finished"] = categories.indexOf("1.5Fin");
HouseStyleMappings["One and one-half story: 2nd level unfinished"] = categories.indexOf("1.5Unf");
HouseStyleMappings["Two story"] = categories.indexOf("2Story");
HouseStyleMappings["Two and one-half story: 2nd level finished"] = categories.indexOf("2.5Fin");
HouseStyleMappings["Two and one-half story: 2nd level unfinished"] = categories.indexOf("2.5Unf");
HouseStyleMappings["Split Foyer"] = categories.indexOf("SFoyer");
HouseStyleMappings["Split Level"] = categories.indexOf("SLvl");

var FoundationMappings = {};
FoundationMappings["Brick & Tile"] = categories.indexOf("BrkTil");
FoundationMappings["Cinder Block"] = categories.indexOf("CBlock");
FoundationMappings["Poured Contrete"] = categories.indexOf("PConc");
FoundationMappings["Slab"] = categories.indexOf("Slab");
FoundationMappings["Stone"] = categories.indexOf("Stone");
FoundationMappings["Wood"] = categories.indexOf("Wood");

var KitchenQualMappings = {};
KitchenQualMappings["Excellent"] = categories.indexOf("Ex");
KitchenQualMappings["Good"] = categories.indexOf("Gd");
KitchenQualMappings["Typical/Average"] = categories.indexOf("TA");
KitchenQualMappings["Fair"] = categories.indexOf("Fa");
KitchenQualMappings["Poor"] = categories.indexOf("Po");



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