$(document).ready(function () {
});
    var long = "";
    var lat = "";
    var searchedCities = [""]
    var citys = [""]
    var APIkey = "7f1fdbe2d6d7ed535cba6b2007c08302";
  
    //Set Local storage functions for cities searached in weather application.
    retrieveSearchedCities();

    $("add-city").on("click", function (e) {
        e.preventDefault();

        storeSearchedCities();
        retrieveSearchedCities();
    });

    $(docuemnt).on("click", "btncheck1", chooseCity);

    function saveCityList() {
        citys = $("#city-input").val().trim();
        localStorage.setItem("previouslySearched", JSON.stringify(city));

        //push city storage into the searched Cities array to create buttons for later on.
        searchedCities.push(city);
        localStorage.setItem(cities.JSON.stringify("previouslySearched"));

        saveCityList();
    }
    function retrieveSearchedCities() {

        var getFromStorage = localStorage.getItem("cities")
        citys = JSON.parse(localStorage.getItem("previouslySearched"));

        if (getFromStorage !== null) {
            searchedCities = JSON.parse(getFromStorage);

            renderSearchedButtons();
            Longlat();
        }
    }
    //render buttons
    function renderSearchedButtons() {
        $("#btncheck1").empty();

        for (var i = 0; i < searchedCities.length; i++) {
            var savedButton = $("<button>");
            savedButton.addClass("btn-check btn btn-outline-primary");
            savedButton.attr("city-name", cityArray[i]);
            savedButton.text(cityArray[i]);

            $("#btn-group").prepend(savedButton);
        }
    }
    function chooseCity() {
        city = $(this).attr("city-name");
        localStorage.setItem("previouslySearched", JSON.stringify(city));
        latLong();
    }
    //Weather api functions.

 function Longlat(){
     var queryURL =  "https://api.openweathermap.org/data/2.5/weather?q=" +
     citys +
     apiKey;
     $.ajax({
         url:queryURL,
         method:"GET",
     }).then(function (response){
         long =response.coord.lon;
         lat= response.coord.lat;

        allWeatherI();
     });
 }
 function allWeatherI(){
     var queryURL = 
     "https://api.openweathermap.org/data/2.5/onecall?lat=" +
     lat +
     "&lon=" +
     lon +
     "&exclude={part}&appid=" +
     apiKey;
   $.ajax({
     url: queryURL,
     method: "GET",
   }).then(function (response) {
     renderPage(response);
   });
 }
 
 function retrieveDate(response){
     var date = new Date(response.dt*1000);

     var day =date.getDate();
     var month = date.getMonth() +1;
     var year = date.getFullYear();
     return day + ".'" + month + "." + year;
 }

 function WindSpeedInMPH(metresPerSec) {
    return (speedInMPH = Math.round(metresPerSec * 2.237 * 10) / 10);
}

 function Celsius(K) {
     return Math.round((K- 273.15)*10)/10;
}

function calcDayTitle (response) {


}

    //function displayWeather(event) {
    //    event.preventDefault();
      //  if (searchedCities.val().trim() !== "") {
       //     city = searchedCities.val().trim;
       //     currentWeather(city);
       // }
    //}
    function currentWeather() {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=" + city + "&APPID= " + APIkey;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response)

            var weathericon = response.weather[0].icon;
            var imgUrl = "https://openweathermap.org/img/wn/" + weathericon + "@2x.png";
            var date=new Date(response.dt*1000).toLocaleDateString();
            $(currentCity).html(response.name +"("+date+")" + "<img src="+iconurl+">");
        
       //5 day forecast     
    function fiveday(citys) {
                var dayover = false;
                var queryforcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + {city }+ "&appid=" + APIKey;
                $.ajax({
                    url: query5dayURL,
                    method: "GET"
                }).then(function (response) {

                    for (i = 0; i < 5; i++) {
                        var date = new Date((response.list[((i + 1) * 8) - 1].dt) * 1000).toLocaleDateString();
                        var img5day = response.list[((i + 1) * 8) - 1].weather[0].icon;
                        var imgUrl = "https://openweathermap.org/img/wn/" + iconcode + ".png";
                    }
                    function ToCelsius(kelvin) {
                        return Math.round((kelvin - 273.15) * 10) / 10;
                      }


                       // $("#futureDate" + i).html(date);
                       $("#futuredate" +i).html
                        $("#card-img-top" + i).html("<img src=" + iconurl + ">");
                        $("#futureTemp" + i).html(tempF + "&#8457");
                        $("#fHumidity" + i).html(humidity + "%");
                    });

                };
            }


        }