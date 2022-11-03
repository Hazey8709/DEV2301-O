import {KEY_FOOTBALL, KEY_GIPHY} from './API.js'

const storedData = JSON.parse(localStorage.getItem('football'));
	
const setFootballData = () => {
	if(storedData) {
		buildStandingsList(storedData);
		return;
	}
	console.log("Fetch new data")
	fetch("https://api.football-data.org/v2/competitions/2021/standings", {
		"method": "GET",
		"headers": {
			"X-Auth-Token": `${KEY_FOOTBALL}`,
		}
	})
	.then(response => {
		return response.json();
	})
	.then(json => {
		localStorage.setItem('football', JSON.stringify(json.standings[0].table));
		buildStandingsList(json.standings[0].table)
	})
	.catch(err => {
		console.error(err);
	});
}

const buildStandingsList = (data) => {
	const elMain = document.querySelector('main')
	const elUl = document.createElement('ul')

	elMain.appendChild(elUl);

	if(!data){
		setFootballData()
	}
	if(data){
		data.map((standing) => {
			console.log(standing)
			const elLI = document.createElement('li');
			const elHeading = document.createElement('h3');
			const elTableInfo = document.createElement('p');
			getGiphy(standing.team.name, elLI)
			elHeading.innerText = standing.team.name;
			elTableInfo.innerText = `${standing.position} - Points ${standing.points} - Won ${standing.won}  - L ${standing.lost} - D ${standing.draw}`
			elLI.appendChild(elHeading)
			elLI.appendChild(elTableInfo)
			elUl.appendChild(elLI)
			mousetracker(elLI)
		})	
	}	
}

const getGiphy = (query, el) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY_GIPHY}&q=${query}&limit=1&offset=${Math.floor(Math.random() * (10 - 1 + 1) + 1)}&rating=g&lang=en`

	fetch(url)
	.then(response => {
		return response.json();
	})
	.then(json => {
		attachGif(json, el)
	})
	.catch(err => {
		console.error(err);
	});

}

const attachGif = (res, el) => {
	// const gif = res.data[0].images.looping.mp4
	const gif = res.data[0].images.original.url
	const img = document.createElement('img')
	img.src = gif;
	el.appendChild(img)
}

const mousetracker = (el) => {
	el.addEventListener('mousemove', (event) => {
		// console.log(el)
		const imgEl = el.querySelector('img');
		imgEl.style.display = 'block';

		let left = event.offsetX;
		let top = event.offsetY;

		imgEl.style.top = `${top - (imgEl.height / 2)}px`;
		imgEl.style.left = `${left - 150}px`;

		imgEl.style.opacity = 1;
	});

	el.addEventListener('mouseleave', (event) => {
		// console.log(el)
		const imgEl = el.querySelector('img');
		imgEl.style.display = 'none';
		imgEl.style.opacity = 9;
		

	})
}

const app = () => {
	setFootballData();
}

(() => {

	app();
    
})();