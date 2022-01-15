

   
window.onload = getData();


var map = L.map('map').setView([45.764043, 4.835659], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



function getData(){
let url = "https://api.jcdecaux.com/vls/v3/stations?contract=Lyon&apiKey=ba573170931dcee106e76ec094bfd178b6fd468a";

$.ajax({
    url:url,
    method:"GET",
    dataType:"json",
})
.done(function(response){
    console.log(response);

    

for(let i = 0; i < response.length; i++){
    const bike = response[i];
    let position = bike.position;
    let mark = L.marker([position.latitude, position.longitude]);
    

mark.addTo(map)
.bindPopup("Station n°" + bike.name + " <br>" + bike.totalStands.availabilities.bikes + 
" Vélos disponibles <br>" + bike.totalStands.availabilities.stands + " Places disponibles")

$(mark).click(function() {
    $("#text").removeClass();
    
    for(let j = 0; j < bike.totalStands.availabilities.bikes; j++){
        
        $(".adr").html("<br><button>Cliquez pour réservez le vélo n°" + j + "</button><br><br>")
        $("a").addClass("btn-info btn");
        localStorage["vélo"] = j;
        
    }
    
  });
  
}

$(".adr").click(function() {
    $("#name").removeClass();
}



)}
)}



