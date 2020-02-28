// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDKdkoTwVdvMhHmfGeRBgaU2myzVruJ5eQ",
  authDomain: "todoproject-4ae26.firebaseapp.com",
  databaseURL: "https://todoproject-4ae26.firebaseio.com",
  projectId: "todoproject-4ae26",
  storageBucket: "todoproject-4ae26.appspot.com",
  messagingSenderId: "1092289165926",
  appId: "1:1092289165926:web:89fc248fa10f3ee2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database()


$('#btn-sub').on('click', function(){
  event.preventDefault();
  var city = $('#weatherStats').val();

  $("form").trigger("reset");
  var queryURL = 'https://api.airvisual.com/v2/city?city=' + city + '&state=California&country=USA&key=f7634abb-5081-4c74-abc6-475fcfe3cc60'
  // var queryURL = 'api.airvisual.com/v2/city?city=' + city + '&state=California&country=USA&key=f7634abb-5081-4c74-abc6-475fcfe3cc60';
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // var p = $('<h5>').text('Title: ' + response.response.docs[i].headline.main);
    let farenheit = (response.data.current.weather.tp * 9/5) + 32;
    let city = $('<h3>').text('City: ' +response.data.city);
    let state = $('<h4>').text('State: ' + response.data.state);
    let time = $('<h5>').text('Date: ' + response.data.current.weather.ts);
    let temp = $('<p>').text('temperature in celcius: ' + response.data.current.weather.tp + '°');
    let fTemp = $('<p>').text('temperature in farenheit: ' + farenheit + '°');
    let pressure = $('<p>').text('pressure: ' + response.data.current.weather.pr);
    let humidity = $('<p>').text('humidity: ' + response.data.current.weather.hu);
    let windspeed = $('<p>').text('wind speed: ' + response.data.current.weather.ws);
    let windDirection = $('<p>').text('Direction of the wind: ' + response.data.current.weather.wd);
    //weathericon 
    let weatherIcon = response.data.current.weather.ic;
    //maybe a weathericon here?
    // console.log(city, state, time, temp, pressure, humidity, windspeed, windDirection, weatherIcon)

    let weatherDisplay = $('<div class="weatherStat">').append(city, state, time, temp, fTemp, pressure, humidity, windspeed, windDirection);
    $('#weatherInfo').prepend(weatherDisplay);
})
})
//button on click events for google books api

$('#btn-submit').on('click', function () {
  event.preventDefault();
  var userBook = $('#my-todo-list').val();
  firebase.database().ref().push({
    userBookSearch: userBook
  });
});



$('#btn-submit').on('click', function () {
  event.preventDefault();

  var b = $('#my-todo-list').val();

  $("form").trigger("reset");
  var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + b + "&printType=books&apikey=AIzaSyBFsAbl7Z9P4eT_OByho1CTTXI3CbxjOrs";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    for (var i = 0; i < 4; i++) {
      var bookObs = response.items[i].volumeInfo;
      var c = $('<h2>').text('Title: ' + bookObs.title);
      var au = $('<h4>').text('Author: ' + bookObs.authors);
      var summary = $('<p>').text('Summary: ' + bookObs.description);
      var l = $('<a>').text('Search Online:' + bookObs.previewLink).attr('href', bookObs.previewLink).attr('target', '_blank');
      var img = $('<img height="200px" width="140px">');
      img.attr('src', bookObs.imageLinks.thumbnail).attr('href', bookObs.previewLink);

      var dBtn = $(`<a class="btn-link" target="_blank"><button> Buy a Book </button></a>`).text("Buy a Book");
      dBtn.attr("href", bookObs.previewLink);

      var res = $('<div class="res-book">').append(c, au, summary, img, dBtn);
      $('#bookTitle').prepend(res);
    }
  })
})

//............................

// onclickevents for nytimes news
$('#btn-submitN').on('click', function () {
  event.preventDefault();

  var v = $('#search_term').val();

  $("form").trigger("reset");
  8
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + v + "&api-key=pqTAhnco7pVR9FUqC09qgrNtbfwV1CZH";

  $.ajax({

    url: queryURL,
    method: "GET"

  }).then(function (response) {
    console.log(response);


    for (var i = 0; i < 7; i++) {
      console.log(response);

      var p = $('<h5>').text('Title: ' + response.response.docs[i].headline.main);
      var img = $('<img height="200px" width="290px">');
      img.attr('src', 'https://static01.nyt.com/' + response.response.docs[i].multimedia[0].url);
      var c = $('<p class="des-item">').text(response.response.docs[i].snippet);

      var dBtn = $(`<a class="btn-link" target="_blank"><button> For more Go to link </button></a>`).text("For more Go to link");
      dBtn.attr("href", response.response.docs[i].web_url);

      var newsList = $('<div class="res-news">').append(p, img, c, dBtn);
      $('#searchNews').prepend(newsList);
    }

  })
});
//.....................................
//button on click for events on ticketmaster

$('#btn-submitE').on('click', function () {
  event.preventDefault();
  // $("form").trigger("reset");
  var e = $('#search_events').val();
  $("form").trigger("reset");
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?&keyword=" + e + "&apikey=BnIV3w1sOWnMwpB1TzcGSJK7FDnDvCF7&limit=3";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    for (var i = 0; i < 5; i++) {
      var t = $('<h2>').text(response._embedded.events[i].name);
      var img = $('<img height="200px" width="290px">');
      img.attr('src', response._embedded.events[i].images[i].url);
      var dBtn = $(`<a class="btn-link" target="_blank"><button> Buy a Ticket </button></a>`).text("Buy a Ticket");
      dBtn.attr("href", response._embedded.events[i].url);

      var evRes = $('<div class="res-event">').append(t, img, dBtn);
      $('#eventTitle').prepend(evRes);
    }
  })
})