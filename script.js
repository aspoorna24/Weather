const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f24958b726mshbd86e2356e67392p1f563djsn263fd965904f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

 /*
const cp=[];

var text = "<tr>";
const getWeathers = (city1) => {
		text += "<td>" + city1 + "</td>";
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city1, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cp.push(response.cloud_pct);
			/*b = response.temp
			c = response.feels_like
			d = response.humidity
			e = response.min_temp
			f = response.max_temp
			g = response.wind_speed
			h = response.wind_degrees
			i = response.sunrise
			j = response.sunset
			
		   
		})
        
		.catch(err => console.error(err));
		
	
	console.log(text);
	

}


const places = ["Boston", "Lucknow", "Kolkata", "Chennai"];
for (let i = 0; i < places.length; i++) {
	getWeathers(places[i])
	
	console.log(cp[i]);
	text += "<td>"+cp[i]+"<td>";
	text += "</tr>";
	document.getElementById("demo").innerHTML = text;
	
}


const getWeathers = (city1) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1, options)
		.then(response => response.json())
		.then((response) => {
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			
		})
		
       
		.catch(err => console.error(err));
}

const places = ["Boston"];
for (let j = 0; j < places.length; j++) {
	getWeathers(places[j])
} */


//const places = ["Boston", "Lucknow", "Kolkata", "Chennai"];
//const cp=[];

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct1.innerHTML = response.cloud_pct
			temp1.innerHTML = response.temp
			feels_like1.innerHTML = response.feels_like
			humidity1.innerHTML = response.humidity
			min_temp1.innerHTML = response.min_temp
			max_temp1.innerHTML = response.max_temp
			wind_speed1.innerHTML = response.wind_speed
			wind_degrees1.innerHTML = response.wind_degrees
			sunrise1.innerHTML = response.sunrise
			sunset1.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
		

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct2.innerHTML = response.cloud_pct
			temp2.innerHTML = response.temp
			feels_like2.innerHTML = response.feels_like
			humidity2.innerHTML = response.humidity
			min_temp2.innerHTML = response.min_temp
			max_temp2.innerHTML = response.max_temp
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees2.innerHTML = response.wind_degrees
			sunrise2.innerHTML = response.sunrise
			sunset2.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
		

