window.addEventListener('load',initialize );

title = document.forms[0].title;
box_office = document.forms[0].box_office;
active = document.forms[0].active;
d_o_l = document.forms[0].d_o_l;
genre = document.forms[0].genre;
teaser = document.forms[0].teaser;
var movie='';
var movie_id='';
var all_movies= []; 
function initialize() {
	 movie_id = localStorage.getItem('id');
	 all_movies = JSON.parse(localStorage.getItem('movies'));
	 movie = all_movies[movie_id];
	console.log(movie);
	title.value = movie.title;
	box_office.value = movie.box_office;
	active.value = movie.active;
	d_o_l.value = movie.date_of_launch;
	genre.value = movie.genre;
	teaser.checked = movie.has_teaser==='Yes';
}
function save() {
	movie.title = title.value;
	movie.box_office = box_office.value;
	movie.active = active.value;
	movie.date_of_launch = d_o_l.value;
	movie.genre = genre.value;
	movie.has_teaser = teaser.checked? 'Yes' : 'No';
	all_movies[movie_id] = movie;
	localStorage.setItem('movies', JSON.stringify(all_movies));
	window.location.href = 'movie-list-admin.html';
}
