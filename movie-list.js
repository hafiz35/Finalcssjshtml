var movies = [
	{
		title: 'Avatar',
		box_office: '$2,787,965,087',
		active: 'Yes',
		date_of_launch: '15/03/2017',
		genre: 'Science Fiction',
		has_teaser: 'Yes',
	},
	{
		title: 'The Avengers',
		box_office: '$1,518,812,988',
		active: 'Yes',
		date_of_launch: '23/12/2017',
		genre: 'Superhero',
		has_teaser: 'No',
	},
	{
		title: 'Titanic',
		box_office: '$2,187,463,944',
		active: 'Yes',
		date_of_launch: '21/08/2017',
		genre: 'Romance',
		has_teaser: 'No',
	},
	{
		title: 'Jurassic World',
		box_office: '$1,671,713,208',
		active: 'No',
		date_of_launch: '21/08/2017',
		genre: 'Science Fiction',
		has_teaser: 'Yes',
	},
	{
		title: 'Avengers: Endgame',
		box_office: '$2750,760,348',
		active: 'Yes',
		date_of_launch: '2/11/2022',
		genre: 'Superhero',
		has_teaser: 'Yes',
	}
];
window.addEventListener('load', initialize());
function initialize() {
	if(!localStorage.getItem('movies')){
		localStorage.setItem('movies', JSON.stringify(movies));				
	}
	else {
		movies = JSON.parse(localStorage.getItem('movies'));
	}
}
function clickLink($event) {
	localStorage.setItem('id',$event.target.id);
	window.location.href = "edit-movie.html"
}
function createRow(movie) {
	row = document.createElement('tr');
	Object.keys(movie).forEach(key => {
		td = document.createElement('td');
		td.innerHTML = movie[key];
		row.appendChild(td);
	});
	edit = document.createElement('td');
	link = document.createElement('button');
	link.innerHTML = 'Edit';
	link.id = movies.indexOf(movie);
	link.onclick = clickLink;
	link.setAttribute('class','edit-btn');
	edit.appendChild(link);
	row.appendChild(edit);
	return row;
}

movies_list = document.getElementById('movies');
console.log(movies);
movies.forEach(movie => {
	row = createRow(movie);
	console.log(row);
	movies_list.appendChild(row);
});
