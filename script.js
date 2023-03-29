const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f24958b726mshbd86e2356e67392p1f563djsn263fd965904f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));