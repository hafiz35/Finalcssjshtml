if(localStorage.getItem("movies")){
    var movies=[
    {   "Title" : "Avatar",
        "BoxOffice" : "$2,787,965,087",
        "Active" : "Yes",
        "DateofLaunch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "HasTeaser" : "Yes"
    },
    {   "Title" : "The Avengers",
        "BoxOffice" : "$2,787,965,087",
        "Active" : "Yes",
        "DateofLaunch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "HasTeaser" : "Yes"
    },
    {   "Title" : "Avatar",
        "BoxOffice" : "$2,787,965,087",
        "Active" : "Yes",
        "DateofLaunch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "HasTeaser" : "Yes"
    },
    {   "Title" : "Avatar",
        "BoxOffice" : "$2,787,965,087",
        "Active" : "Yes",
        "DateofLaunch" : "15/03/2017",
        "Genre" : "Science Fiction",
        "HasTeaser" : "Yes"
    }
    ];
    var myStorage = JSON.stringify(movies);
    localStorage.setItem("movies",myStorage);
}
//alert(1);
var myStorage=localStorage.getItem("movies");
//alert(myStorage);
var myStorage=JSON.parse(myStorage);

var moviedata=document.getElementById("moviedata");
rownumber=0;

for(var i in myStorage){
    c_row=document.createElement("TR");
    c_id="ij"+rownumber;
    c_row.setAttribute("id",c_id);
    moviedata.appendChild(c_row);
    console.log(myStorage[i].Title);

    var data = document.createElement("TD");
    var celldata=document.createTextNode(myStorage[i].Title);
    data.appendChild(celldata);
    document.getElementById(c_id).appendChild(data);
    var data = document.createElement("TD");
    var celldata=document.createTextNode(myStorage[i].BoxOffice);
    data.appendChild(celldata);
    document.getElementById(c_id).appendChild(data);
    var data = document.createElement("TD");
    var celldata=document.createTextNode(myStorage[i].Active);
    data.appendChild(celldata);
    document.getElementById(c_id).appendChild(data);
    var data = document.createElement("TD");
    var celldata=document.createTextNode(myStorage[i].DateofLaunch);
    data.appendChild(celldata);
    document.getElementById(c_id).appendChild(data);
    var data = document.createElement("TD");
    var celldata=document.createTextNode(myStorage[i].Genre);
    data.appendChild(celldata);
    document.getElementById(c_id).appendChild(data);
    var data = document.createElement("TD");
    var celldata=document.createTextNode(myStorage[i].HasTeaser);
    data.appendChild(celldata);
    document.getElementById(c_id).appendChild(data);


    data=document.createElement("TD");
    var a = JSON.stringify(myStorage[i]);
    var celldata="<p onclick = \"editdata("+a+")\">Edit<\p>";
    console.log(celldata,a);
    data.innerHTML=celldata;
    document.getElementById(c_id).appendChild(data);
    rownumber++;
}

function editdata(data){
    localStorage.setItem("movieToEdit",data);
    window.location.href="edit-movie.html";
}