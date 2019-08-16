var favourites = [];
var movies = [];
function getFavourites() {
	movies = JSON.parse(localStorage.getItem('movies'));
	if(!localStorage.getItem('favourites')) {
		localStorage.setItem('favourites',JSON.stringify(favourites));
	}
	else {
		favourites = JSON.parse(localStorage.getItem('favourites'));
	}
}
window.addEventListener('load', getFavourites());
function removeFromFavourites($event) {
	movie_id = $event.target.id;
	favourites = favourites.filter(movie => favourites[movie_id] !== movie);
	localStorage.setItem('favourites', JSON.stringify(favourites));
	getFavourites();
	create();
	console.log(JSON.parse(localStorage.getItem('favourites')));	
}
function createRow(movie) {
	row = document.createElement('tr');
	Object.keys(movie).filter(key => key!=='active'&&key!=='date_of_launch'&& key!== 'has_teaser').forEach(key => {
		td = document.createElement('td');
		td.innerHTML = movie[key];
		row.appendChild(td);
	});
	edit = document.createElement('td');
	link = document.createElement('button');
	link.innerHTML = 'Delete';
	link.id = favourites.indexOf(movie);
	link.onclick = removeFromFavourites;
	edit.appendChild(link);
	row.appendChild(edit);
	return row;
}
function create() {
	getFavourites();
	if(favourites.length==0){
		window.location.href = "favourites-empty.html";
	}
	movies_list = document.getElementById('movies');
	console.log(favourites);
	var rows = movies_list.rows;
	var i = rows.length;
	while(--i){
		rows[i].parentNode.removeChild(rows[i]);
	}
	favourites.forEach(movie => {
		row = createRow(movie);
		console.log(row);
		movies_list.appendChild(row);
	});
}
create();
