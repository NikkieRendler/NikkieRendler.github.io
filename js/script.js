$("input").on("keyup", function(e) {
  if(e.keyCode === 13) {
  $(".fa-search").trigger("click");
}});
$(".fa-search").on("click", function() {

  $(".info span").remove();
  $(".temp span").remove();
  $(".appRightSide div").remove();
  $(".weatherRight div").remove();
  $(".weatherRight").append("<div class='loader'></div>");
  var requiredCity = $("input").val();

$.get(`https://api.wunderground.com/api/bc83691ee725e7bb/geolookup/conditions/hourly/q/UA/${requiredCity}.json`, function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_c = parsed_json['current_observation']['temp_c'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var wind = parsed_json.current_observation.wind_kph;
  var sky = parsed_json.current_observation.weather;
  var skyIcon = parsed_json.current_observation.icon_url;

  console.log(parsed_json);

  $(".weatherBgr").css("backgroundImage", "url(img/cityBgr.png)");
  $(".info").append(`
    <span><b>${location}</b> <br/></span>
    <span>&mdash; <br/></span>`);
  $(".info").append(`  
    <span>Sky: ${sky} <br/></span> 
    <span>Wind: ${wind} kph<span>    
    `);
  $(".temp").append(`
    <span><b>${temp_c} &deg;C</b> (${temp_f} &deg;F)</span>
    `);
  $(".weatherRight").append(`<div><img src='${skyIcon}' height=60px width=60px></div>`);


  if(temp_c < 5) {
    $("#body").css("background",  "rgba(38, 166, 227, 0.1)")
    $("header").css("background", "rgba(38, 166, 227, 0.9)");
    $(".searchBlock").css("background", "rgba(38, 166, 227, 0.9)");
    $("footer").css("background", "rgba(38, 166, 227, 0.9)");
    $(".weather").css({"background": "rgba(38, 166, 227, 0.9)", "box-shadow": "0px 0px 10px #000"})
    $(".appRightSide").append(`
    <div><img src='img/boyCold.png' height= 200px width=200px></div>
    <div><img src='img/girlCold.png' height= 200px width=200px></div>
    `);
  } else if(temp_c <12){
    $("#body").css("background",  "rgba(134, 46, 227, 0.1)")
    $("header").css("background", "rgba(134, 46, 227, 0.9)");
    $(".searchBlock").css("background", "rgba(134, 46, 227, 0.9)");
    $(".weather").css({"background": "rgba(134, 46, 227, 0.9)", "box-shadow": "0px 0px 10px #000"})
    $("footer").css("background", "rgba(134, 46, 227, 0.9)");
    $(".appRightSide").append(`
    <div><img src='img/boyCool.png' height= 200px width=200px></div>
    <div><img src='img/girlCool.png' height= 200px width=200px></div>
    `);
  } else if(temp_c <18) {

    $("#body").css({"background":  "rgba(234, 193, 46, 0.1)"})
    $("header").css({"background": "rgba(234, 193, 46, 0.9)", "box-shadow": "0px 0px 10px"});
    $(".searchBlock").css("background", "rgba(234, 193, 46, 0.9)")
    $(".weather").css({"background": "rgba(234, 193, 46, 0.9)", "box-shadow": "0px 0px 10px #000"});
    $("footer").css({"background": "rgba(234, 193, 46, 0.9)", "box-shadow": "0px 0px 10px #000"});
    $(".appRightSide").append(`
    <div><img src='img/boyWarm.png' height= 200px width=200px></div>
    <div><img src='img/girlWarm.png' height= 200px width=200px></div>
    `);

  } else if(temp_c > 18) {
    $("#body").css("background",  "rgba(176, 50, 18, 0.1)")
    $("header").css("background",  "rgba(176, 50, 18, 0.9)");
    $(".searchBlock").css("background", "rgba(176, 50, 18, 0.9)");
    $(".weather").css({"background":  "rgba(176, 50, 18, 0.9)", "box-shadow": "0px 0px 10px #000"});
    $("footer").css("background", "rgba(176, 50, 18, 0.9)");
    $(".appRightSide").append(`
    <div><img src='img/boyHot.png' height= 200px width=200px></div>
    <div><img src='img/girlHot.png' height= 200px width=200px></div>
    `); 
  } else {
  document.html("It's really cold or really hot. Take a look outside and choose obvious things")
  };
  $(document).ready(function() {
    $("div.loader").remove();     
 });
  });
  });
  $(".fa-search").trigger("click");


