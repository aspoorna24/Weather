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



var text = "<tr>";
const getWeathers = (city1) => {
		text += "<td>" + city1 + "</td>";
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			a = response.cloud_pct
			b = response.temp
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
		
	text += "</tr>";
	console.log(text)
}


const places = ["Boston", "Lucknow", "Kolkata", "Chennai"];
for (let i = 0; i < places.length; i++) {
	getWeathers(places[i])
	
	document.getElementById("demo").innerHTML = text;
	
}

 /*

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
}*/