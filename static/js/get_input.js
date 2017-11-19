function getQuickInput(){
	MSSubClass = document.getElementById('sample3').value;
	alert(MSSubClass);

	var cars = [
		{ "make":"Porsche", "model":"911S" },
		{ "make":"Mercedes-Benz", "model":"220SE" },
		{ "make":"Jaguar","model": "Mark VII" }
	];

	$.ajax({
		  type: "POST",
		  contentType: "application/json; charset=utf-8",
		  url: "receiver",
		  data: JSON.stringify(cars),
		  success: function () {
		    console.log("success");
		  },
		  dataType: "json"
	});
	console.log()
}