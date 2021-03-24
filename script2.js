var request = new XMLHttpRequest();
var url = "https://restcountries.eu/rest/v2/all"
request.open('GET',url,true);
request.send();
request.onload=function() {
    var data = JSON.parse(this.response);
    for(var i=0; i<data.length;i++) {
        var lati=data[i].latlng[0];
	    var longi=data[i].latlng[1];
        //console.log(lati);
        if(lati !== undefined || longi !== undefined) {
            secondCall(lati,longi);
        }      
        
    }
}


function secondCall(lati,longi) {
var request = new XMLHttpRequest();
var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+longi+"&appid=690479aab055c3f51de0eefc2f998282"
//var url = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=40&appid=690479aab055c3f51de0eefc2f998282"
request.open('GET',url,true);
request.send();
request.onload=function() {
    var countries = JSON.parse(this.response);
    console.log(countries.name," ",countries.main.temp);
    
}
}