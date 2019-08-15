alert("Hello");
if(!localStorage.getItem("movies")){
    alert("World");
    var movies=[
    {   "Title" : "Avatar",
        "Box Office" : "$2,787,965,087",
        "Active" : "Yes",
        "Date of Launch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "Has Teaser" : "Yes",
        "Edit" : "Edit"
    },
    {   "Title" : "Avatar",
        "Box Office" : "$2,787,965,087",
        "Active" : "Yes",
        "Date of Launch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "Has Teaser" : "Yes",
        "Edit" : "Edit"
    },
    {   "Title" : "Avatar",
        "Box Office" : "$2,787,965,087",
        "Active" : "Yes",
        "Date of Launch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "Has Teaser" : "Yes",
        "Edit" : "Edit"
    },
    {   "Title" : "Avatar",
        "Box Office" : "$2,787,965,087",
        "Active" : "Yes",
        "Date of Launch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "Has Teaser" : "Yes",
        "Edit" : "Edit"
    }
    ];
    var myStorage = JSON.stringfy(movies);
    localStorage.setItem("movies",myStorage);
}

var myStorage=localStorage.getItem("movies");
 myStorage=JSON.parse(myStorage);

