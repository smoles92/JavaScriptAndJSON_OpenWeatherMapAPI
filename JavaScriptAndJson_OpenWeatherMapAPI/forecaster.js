var xmlhttp = new XMLHttpRequest();
var url = "Daily.json";

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        
        //Parse the JSON data to a JavaScript variable. 
        var parsedObj = JSON.parse(xmlhttp.responseText);    
        // This function is defined below and deals with the JSON data read from the file. 
        toggleDaysSaturday(parsedObj); 
        toggleDaysSunday(parsedObj);
        toggleDaysMonday(parsedObj);
        toggleDaysTuesday(parsedObj);
        toggleDaysWednesday(parsedObj);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function setDisplay() {
    var selectValue = document.getElementById("5days").value; 

    if(selectValue == 1) {
        document.getElementById("Day1Weather").style.display = "block";
        document.getElementById("Day2Weather").style.display = "none";
        document.getElementById("Day3Weather").style.display = "none";
        document.getElementById("Day4Weather").style.display = "none";
        document.getElementById("Day5Weather").style.display = "none";
    }
    else if(selectValue == 2) {
        document.getElementById("Day1Weather").style.display = "block";
        document.getElementById("Day2Weather").style.display = "block";
        document.getElementById("Day3Weather").style.display = "none";
        document.getElementById("Day4Weather").style.display = "none";
        document.getElementById("Day5Weather").style.display = "none";
    }
    else if(selectValue == 3) {
        document.getElementById("Day1Weather").style.display = "block";
        document.getElementById("Day2Weather").style.display = "block";
        document.getElementById("Day3Weather").style.display = "block";
        document.getElementById("Day4Weather").style.display = "none";
        document.getElementById("Day5Weather").style.display = "none";
    }
    else if(selectValue == 4) {
        document.getElementById("Day1Weather").style.display = "block";
        document.getElementById("Day2Weather").style.display = "block";
        document.getElementById("Day3Weather").style.display = "block";
        document.getElementById("Day4Weather").style.display = "block";
        document.getElementById("Day5Weather").style.display = "none";
    }
    else if(selectValue == 5) {
        document.getElementById("Day1Weather").style.display = "block";
        document.getElementById("Day2Weather").style.display = "block";
        document.getElementById("Day3Weather").style.display = "block";
        document.getElementById("Day4Weather").style.display = "block";
        document.getElementById("Day5Weather").style.display = "block";
    }
}

function displayExtraWeather(){
    var Day1CheckBox = document.getElementById("ExtraCheckBox").checked;
    var Day2CheckBox = document.getElementById("ExtraCheckBox2").checked;
    var Day3CheckBox = document.getElementById("ExtraCheckBox3").checked;
    var Day4CheckBox = document.getElementById("ExtraCheckBox4").checked;
    var Day5CheckBox = document.getElementById("ExtraCheckBox5").checked;
    
    
    if(Day1CheckBox == true) {
        document.getElementById("Day1ExtraInfo").style.display = "block";
    }
    else if(Day1CheckBox == false) {
        document.getElementById("Day1ExtraInfo").style.display = "none";
        
    }
    if(Day2CheckBox == true) {
        document.getElementById("Day2ExtraInfo").style.display = "block";
    }
    else if(Day2CheckBox == false) {
        document.getElementById("Day2ExtraInfo").style.display = "none";
        
    }
    if(Day3CheckBox == true) {
        document.getElementById("Day3ExtraInfo").style.display = "block";
    }
    else if(Day3CheckBox == false) {
        document.getElementById("Day3ExtraInfo").style.display = "none";
        
    }
    if(Day4CheckBox == true) {
        document.getElementById("Day4ExtraInfo").style.display = "block";
    }
    else if(Day4CheckBox == false) {
        document.getElementById("Day4ExtraInfo").style.display = "none";
        
    }
    if(Day5CheckBox == true) {
        document.getElementById("Day5ExtraInfo").style.display = "block";
    }
    else if(Day5CheckBox == false) {
        document.getElementById("Day5ExtraInfo").style.display = "none";
        
    }
}

function toggleDaysSaturday(obj) {
    
    // Extract the main properties in the root object.
    var listObj = obj.list;  
    
    // We can then read the data inside the list object array.
    var listClouds = listObj[0].clouds;
    var listTemp = listObj[0].temp;
    var listWeather = listObj[0].weather;
        
    // Next read the temp data. 
    var tempMin = listTemp.min;
    var tempMax = listTemp.max;
    
    // We can then read the data inside the weather object array [0].
    var WeatherMain = listWeather[0].main;
    var WeatherDescription = listWeather[0].description;
    var WeatherIcon = listWeather[0].icon;
    var WeatherUrl = "<img src='http://openweathermap.org/img/w/" + WeatherIcon + ".png'/>";
   
    // This code write the basic Weather Information to the div with id = "Day1Weather".
    var weather_information = "<h2>Saturday's Weather: </h2>"; 
    weather_information += "Clouds: " + listClouds + "<br>";
    weather_information += "Temp Min: " + tempMin + "°C" + "<br>";
    weather_information += "Temp Max: " + tempMax + "°C" + "<br>";
    weather_information += "Mostly: " + WeatherMain + "<br>";
    weather_information += "Weather Description: " + WeatherDescription + "<br>";
    weather_information += " " + WeatherUrl + "<br>";
    document.getElementById("Day1Weather").innerHTML = weather_information;
    
    var listPressure = listObj[0].pressure;
    var listHumidity = listObj[0].humidity;
    var listSpeed = listObj[0].speed;
    
    var extra_weather_information = "<h2>Advanced Forecast: </h2>";
    extra_weather_information += "Pressure: " + listPressure + "<br>";
    extra_weather_information += "Humidity: " + listHumidity + "<br>";
    extra_weather_information += "Wind Speeds: " + listSpeed + "km/h" + "<br>";
    document.getElementById("Day1ExtraInfo").innerHTML = extra_weather_information;
    
    }

function toggleDaysSunday(obj) {
    
    var listObj = obj.list;  
    
    var listClouds1 = listObj[1].clouds;
    var listTemp1 = listObj[1].temp;
    var listWeather1 = listObj[1].weather;
     
    var tempMin1 = listTemp1.min;
    var tempMax1 = listTemp1.max;
    
    var WeatherMain1 = listWeather1[0].main;
    var WeatherDescription1 = listWeather1[0].description;
    var WeatherIcon1 = listWeather1[0].icon;
    var WeatherUrl1 = "<img src='http://openweathermap.org/img/w/" + WeatherIcon1 + ".png'/>";
    
    var weather_information1 = "<h2>Sunday's Weather: </h2>"; 
    weather_information1 += "Clouds: " + listClouds1 + "<br>";
    weather_information1 += "Temp Min: " + tempMin1 + "°C" + "<br>";
    weather_information1 += "Temp Max: " + tempMax1 + "°C" + "<br>";
    weather_information1 += "Mostly: " + WeatherMain1 + "<br>";
    weather_information1 += "Weather Description: " + WeatherDescription1 + "<br>";
    weather_information1 += " " + WeatherUrl1 + "<br>";
    document.getElementById("Day2Weather").innerHTML = weather_information1;
    
    var listPressure1 = listObj[1].pressure;
    var listHumidity1 = listObj[1].humidity;
    var listSpeed1 = listObj[1].speed;
    
    var extra_weather_information1 = "<h2>Advanced Forecast: </h2>";
    extra_weather_information1 += "Pressure: " + listPressure1 + "<br>";
    extra_weather_information1 += "Humidity: " + listHumidity1 + "<br>";
    extra_weather_information1 += "Wind Speeds: " + listSpeed1 + "km/h" + "<br>";
    document.getElementById("Day2ExtraInfo").innerHTML = extra_weather_information1;
}

function toggleDaysMonday(obj) {
    
    var listObj = obj.list;
    
    var listClouds2 = listObj[2].clouds;
    var listTemp2 = listObj[2].temp;
    var listWeather2 = listObj[2].weather;
     
    var tempMin2 = listTemp2.min;
    var tempMax2 = listTemp2.max;
    
    var WeatherMain2 = listWeather2[0].main;
    var WeatherDescription2 = listWeather2[0].description;
    var WeatherIcon2 = listWeather2[0].icon;
    var WeatherUrl2 = "<img src='http://openweathermap.org/img/w/" + WeatherIcon2 + ".png'/>";
    
    var weather_information2 = "<h2>Monday's Weather: </h2>"; 
    weather_information2 += "Clouds: " + listClouds2 + "<br>";
    weather_information2 += "Temp Min: " + tempMin2 + "°C" + "<br>";
    weather_information2 += "Temp Max: " + tempMax2 + "°C" + "<br>";
    weather_information2 += "Mostly: " + WeatherMain2 + "<br>";
    weather_information2 += "Weather Description: " + WeatherDescription2 + "<br>";
    weather_information2 += " " + WeatherUrl2 + "<br>";
    document.getElementById("Day3Weather").innerHTML = weather_information2;
    
    var listPressure2 = listObj[2].pressure;
    var listHumidity2 = listObj[2].humidity;
    var listSpeed2 = listObj[2].speed;
    
    var extra_weather_information2 = "<h2>Advanced Forecast: </h2>";
    extra_weather_information2 += "Pressure: " + listPressure2 + "<br>";
    extra_weather_information2 += "Humidity: " + listHumidity2 + "<br>";
    extra_weather_information2 += "Wind Speeds: " + listSpeed2 + "km/h" + "<br>";
    document.getElementById("Day3ExtraInfo").innerHTML = extra_weather_information2;
}

function toggleDaysTuesday(obj) {
    
    var listObj = obj.list;
    
    var listClouds3 = listObj[3].clouds;
    var listTemp3 = listObj[3].temp;
    var listWeather3 = listObj[3].weather;
     
    var tempMin3 = listTemp3.min;
    var tempMax3 = listTemp3.max;
    
    var WeatherMain3 = listWeather3[0].main;
    var WeatherDescription3 = listWeather3[0].description;
    var WeatherIcon3 = listWeather3[0].icon;
    var WeatherUrl3 = "<img src='http://openweathermap.org/img/w/" + WeatherIcon3 + ".png'/>";
    
    var weather_information3 = "<h2>Tuesday's Weather: </h2>"; 
    weather_information3 += "Clouds: " + listClouds3 + "<br>";
    weather_information3 += "Temp Min: " + tempMin3 + "°C" + "<br>";
    weather_information3 += "Temp Max: " + tempMax3 + "°C" + "<br>";
    weather_information3 += "Mostly: " + WeatherMain3 + "<br>";
    weather_information3 += "Weather Description: " + WeatherDescription3 + "<br>";
    weather_information3 += " " + WeatherUrl3 + "<br>";
    document.getElementById("Day4Weather").innerHTML = weather_information3;
    
    var listPressure3 = listObj[3].pressure;
    var listHumidity3 = listObj[3].humidity;
    var listSpeed3 = listObj[3].speed;
    
    var extra_weather_information3 = "<h2>Advanced Forecast: </h2>";
    extra_weather_information3 += "Pressure: " + listPressure3 + "<br>";
    extra_weather_information3 += "Humidity: " + listHumidity3 + "<br>";
    extra_weather_information3 += "Wind Speeds: " + listSpeed3 + "km/h" + "<br>";
    document.getElementById("Day4ExtraInfo").innerHTML = extra_weather_information3;
}

function toggleDaysWednesday(obj) {
    
    var listObj = obj.list;
    
    var listClouds4 = listObj[4].clouds;
    var listTemp4 = listObj[4].temp;
    var listWeather4 = listObj[4].weather;
     
    var tempMin4 = listTemp4.min;
    var tempMax4 = listTemp4.max;
    
    var WeatherMain4 = listWeather4[0].main;
    var WeatherDescription4 = listWeather4[0].description;
    var WeatherIcon4 = listWeather4[0].icon;
    var WeatherUrl4 = "<img src='http://openweathermap.org/img/w/" + WeatherIcon4 + ".png'/>";
    
    var weather_information4 = "<h2>Wednesday's Weather: </h2>"; 
    weather_information4 += "Clouds: " + listClouds4 + "<br>";
    weather_information4 += "Temp Min: " + tempMin4 + "°C" + "<br>";
    weather_information4 += "Temp Max: " + tempMax4 + "°C" + "<br>";
    weather_information4 += "Mostly: " + WeatherMain4 + "<br>";
    weather_information4 += "Weather Description: " + WeatherDescription4 + "<br>";
    weather_information4 += " " + WeatherUrl4 + "<br>";
    document.getElementById("Day5Weather").innerHTML = weather_information4;
    
    var listPressure4 = listObj[4].pressure;
    var listHumidity4 = listObj[4].humidity;
    var listSpeed4 = listObj[4].speed;
    
    var extra_weather_information4 = "<h2>Advanced Forecast: </h2>";
    extra_weather_information4 += "Pressure: " + listPressure4 + "<br>";
    extra_weather_information4 += "Humidity: " + listHumidity4 + "<br>";
    extra_weather_information4 += "Wind Speeds: " + listSpeed4 + "km/h" + "<br>";
    document.getElementById("Day5ExtraInfo").innerHTML = extra_weather_information4;
}

function showHide() {
      {
    var panel = document.getElementById("panel");
    
    if (panel.style.display == "block")
    {
        panel.style.display = "none";
    }
    else
    {
        panel.style.display = "block";
    }
}    
}

var xmlhttp2 = new XMLHttpRequest();
var url2 = "Detailed.json";

xmlhttp2.onreadystatechange = function() {
    if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
        
        //Parse the JSON data to a JavaScript variable. 
        var parsedDetailedObj = JSON.parse(xmlhttp2.responseText);    
        // This function is defined below and deals with the JSON data read from the file. 
        detailedDay1(parsedDetailedObj);
        detailedDay2(parsedDetailedObj);
        detailedDay3(parsedDetailedObj);
        detailedDay4(parsedDetailedObj);
        detailedDay5(parsedDetailedObj);
        setDetailedDisplay();
        }
};

xmlhttp2.open("GET", url2, true);
xmlhttp2.send();

function detailedDay1(obj) {
    
    var listObj = obj.list;
    var listInfo = "<div>" + "<h2>3 Hourly Weather</h2>" + "<h2>Saturday</h2>" + "<br>";
    
    for (var i = 0; i < 5; i++)
        {   
            var dateTime = listObj[i].dt_txt;
            var tempDetailedMain = listObj[i].main.temp;
            var humidityDetailedMain = listObj[i].main.humidity;
            var listDetailedDescription = listObj[i].weather[0].description;
            var windDetailed = listObj[i].wind.speed;
         
            listInfo += "<br>" + "<u>" + dateTime + "</u>" + "<br>";
            listInfo += "Temp:" + tempDetailedMain + "°C" + "<br>";
            listInfo += "Humidity: " + humidityDetailedMain + "<br>";
            listInfo += "Description: " + listDetailedDescription + "<br>";
            listInfo += "Wind Speed: " + windDetailed + "km/h" + "<br>";}
    listInfo += "</div>";
    document.getElementById("DetailedWeather1").innerHTML = listInfo;
}

function detailedDay2(obj) {
    
    var listObj = obj.list;
    var listInfo = "<div>" + "<h2>3 Hourly Weather</h2>" + "<h2>Sunday</h2>" + "<br>";
    
    for (var i = 5; i < 13; i++)
        {   
            var dateTime = listObj[i].dt_txt;
            var tempDetailedMain = listObj[i].main.temp;
            var humidityDetailedMain = listObj[i].main.humidity;
            var listDetailedDescription = listObj[i].weather[0].description;
            var windDetailed = listObj[i].wind.speed;
            
            listInfo += "<br>" + "<u>" + dateTime + "</u>" + "<br>";
            listInfo += "Temp:" + tempDetailedMain + "°C" + "<br>";
            listInfo += "Humidity: " + humidityDetailedMain + "<br>";
            listInfo += "Description: " + listDetailedDescription + "<br>";
            listInfo += "Wind Speed: " + windDetailed + "km/h" + "<br>";}
    listInfo += "</div>";
    document.getElementById("DetailedWeather2").innerHTML = listInfo;
}

function detailedDay3(obj) {
    
    var listObj = obj.list;
    var listInfo = "<div>" + "<h2>3 Hourly Weather</h2>" + "<h2>Monday</h2>" + "<br>";
    
    for (var i = 13; i < 21; i++)
        {   
            var dateTime = listObj[i].dt_txt;
            var tempDetailedMain = listObj[i].main.temp;
            var humidityDetailedMain = listObj[i].main.humidity;
            var listDetailedDescription = listObj[i].weather[0].description;
            var windDetailed = listObj[i].wind.speed;
             
            listInfo += "<br>" + "<u>" + dateTime + "</u>" + "<br>";
            listInfo += "Temp:" + tempDetailedMain + "°C" + "<br>";
            listInfo += "Humidity: " + humidityDetailedMain + "<br>";
            listInfo += "Description: " + listDetailedDescription + "<br>";
            listInfo += "Wind Speed: " + windDetailed + "km/h" + "<br>";}
    listInfo += "</div>";
    document.getElementById("DetailedWeather3").innerHTML = listInfo;
}

function detailedDay4(obj) {
    
    var listObj = obj.list;
    var listInfo = "<div>" + "<h2>3 Hourly Weather</h2>" + "<h2>Tuesday</h2>" + "<br>";
    
    for (var i = 21; i < 29; i++)
        {   
            var dateTime = listObj[i].dt_txt;
            var tempDetailedMain = listObj[i].main.temp;
            var humidityDetailedMain = listObj[i].main.humidity;
            var listDetailedDescription = listObj[i].weather[0].description;
            var windDetailed = listObj[i].wind.speed;
             
            listInfo += "<br>" + "<u>" + dateTime + "</u>" + "<br>";
            listInfo += "Temp:" + tempDetailedMain + "°C" + "<br>";
            listInfo += "Humidity: " + humidityDetailedMain + "<br>";
            listInfo += "Description: " + listDetailedDescription + "<br>";
            listInfo += "Wind Speed: " + windDetailed + "km/h" + "<br>";}
    listInfo += "</div>";
    document.getElementById("DetailedWeather4").innerHTML = listInfo;
}

function detailedDay5(obj) {
    
    var listObj = obj.list;
    var listInfo = "<div>" + "<h2>3 Hourly Weather</h2>" + "<h2>Wednesday</h2>" + "<br>";
   
    for (var i = 29; i <= 36; i++)
        {   
            var dateTime = listObj[i].dt_txt;
            var tempDetailedMain = listObj[i].main.temp;
            var humidityDetailedMain = listObj[i].main.humidity;
            var listDetailedDescription = listObj[i].weather[0].description;
            var windDetailed = listObj[i].wind.speed;
             
            listInfo += "<br>" + "<u>" + dateTime + "</u>" + "<br>";
            listInfo += "Temp:" + tempDetailedMain + "°C" + "<br>";
            listInfo += "Humidity: " + humidityDetailedMain + "<br>";
            listInfo += "Description: " + listDetailedDescription + "<br>";
            listInfo += "Wind Speed: " + windDetailed + "km/h" + "<br>";}
    listInfo += "</div>";
    document.getElementById("DetailedWeather5").innerHTML = listInfo;
}

function setDetailedDisplay() {
    var selectDetailedValue = document.getElementById("SelectDetailedDays").value;
    
    if (selectDetailedValue == 0) {
        document.getElementById("DetailedWeather1").style.display = "none";
        document.getElementById("DetailedWeather2").style.display = "none";
        document.getElementById("DetailedWeather3").style.display = "none";
        document.getElementById("DetailedWeather4").style.display = "none";
        document.getElementById("DetailedWeather5").style.display = "none";
    }
    
    else if (selectDetailedValue == 1) {
        document.getElementById("DetailedWeather1").style.display = "block";
        document.getElementById("DetailedWeather2").style.display = "none";
        document.getElementById("DetailedWeather3").style.display = "none";
        document.getElementById("DetailedWeather4").style.display = "none";
        document.getElementById("DetailedWeather5").style.display = "none";
    }
    else if(selectDetailedValue == 2) {
        document.getElementById("DetailedWeather1").style.display = "block";
        document.getElementById("DetailedWeather2").style.display = "block";
        document.getElementById("DetailedWeather3").style.display = "none";
        document.getElementById("DetailedWeather4").style.display = "none";
        document.getElementById("DetailedWeather5").style.display = "none";
    }
    else if(selectDetailedValue == 3) {
        document.getElementById("DetailedWeather1").style.display = "block";
        document.getElementById("DetailedWeather2").style.display = "block";
        document.getElementById("DetailedWeather3").style.display = "block";
        document.getElementById("DetailedWeather4").style.display = "none";
        document.getElementById("DetailedWeather5").style.display = "none";
    }
    else if(selectDetailedValue == 4) {
        document.getElementById("DetailedWeather1").style.display = "block";
        document.getElementById("DetailedWeather2").style.display = "block";
        document.getElementById("DetailedWeather3").style.display = "block";
        document.getElementById("DetailedWeather4").style.display = "block";
        document.getElementById("DetailedWeather5").style.display = "none";
    }
    else if(selectDetailedValue == 5) {
        document.getElementById("DetailedWeather1").style.display = "block";
        document.getElementById("DetailedWeather2").style.display = "block";
        document.getElementById("DetailedWeather3").style.display = "block";
        document.getElementById("DetailedWeather4").style.display = "block";
        document.getElementById("DetailedWeather5").style.display = "block";
    }
}


function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(53.349805, -6.260310), 
    zoom: 11
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}




            
            
            
            
            
        
            
       

