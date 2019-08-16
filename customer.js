var movies = [];
var favourites = [];
function getFavourites() {
	if(!localStorage.getItem('favourites')) {
		localStorage.setItem('favourites',JSON.stringify(favourites));
	}
	else {
		favourites = JSON.parse(localStorage.getItem('favourites'));
	}
}
window.addEventListener('load', initialize());
function initialize() {
		movies = JSON.parse(localStorage.getItem('movies'));
		getFavourites();
}
function removeFromFavourites($event) {
	movie_id = $event.target.id;
	favourites = favourites.filter(movie => movies[movie_id] !== movie);
	localStorage.setItem('favourites', JSON.stringify(favourites));
	console.log(JSON.parse(localStorage.getItem('favourites')));
	$event.target.innerHTML = 'Add to Favourites';
	$event.target.onclick = addToFavourites;
	
}
function addToFavourites($event) {
	movie_id = $event.target.id;
	if(favourites.indexOf(movies[movie_id])<0){
		favourites.push(movies[movie_id]);
		localStorage.setItem('favourites', JSON.stringify(favourites));
		//console.log(JSON.parse(localStorage.getItem('favourites')));
		//$event.target.innerHTML = 'Remove from Favourites';
		//$event.target.onclick = removeFromFavourites;
	}

	window.location.href = "movie-list-customer-notification.html";
}
function createRow(movie) {
	row = document.createElement('tr');
	//console.log(movie);
	Object.keys(movie).filter(key => key!=='active'&&key!=='date_of_launch').forEach(key => {
		td = document.createElement('td');
		td.innerHTML = movie[key];
		//td.appendChild(text);
		row.appendChild(td);
	});
	edit = document.createElement('td');
	link = document.createElement('button');
		link.innerHTML = 'Add to Favourites';
		link.id = movies.indexOf(movie);
		link.onclick = addToFavourites;
		link.setAttribute('class','edit-btn');
	edit.appendChild(link);
	row.appendChild(edit);
	return row;
}
movies_list = document.getElementById('movies');
console.log(movies);
console.log(favourites);
movies.forEach(movie => {
	row = createRow(movie);
	//console.log(row);
	movies_list.appendChild(row);
});

