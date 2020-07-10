$(document).ready(function () {

    function getWeather(city) {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?APPID=2ad2cd4535c628977b46749cebbdc5fc&q="
        $.ajax({
            url: queryURL + city,
            method: "GET"
        }).then(function (response) {
            //console.log(response.main);
            showWeather(response)
        })
    
    }
    function getforecast(city) {
        
    }

    function showWeather(data){
        $("#currentWeather").empty();

        html = `<h4>${data.name}</h4>
        <p>$Cloudy</p>`

        $("#currentWeather").append(html);
    }

    showWeather({name: "", weather:""})

    $(".searchBtn").on("click", function () {
        var searchBtn = $("#searchforcity").val();
        console.log(searchBtn);
        getWeather(searchBtn)
    });
    // don't code under this line //
});


