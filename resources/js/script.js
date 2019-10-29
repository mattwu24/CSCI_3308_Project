var userLoc = "";

$(document).ready(function(){

    userLoc = $('#userLoc');
    var submit = $("#submitLoc");
    submit.click(function() {
        if(userLoc.val() == undefined || userLoc.val() === '') {
            console.log("TEST");
            alert("Location Invalid - No Input");
            return;
        }
    });
  
  });

function getLocation() {
    if (navigator.geolocation) {
        userAllow = true;
        navigator.geolocation.getCurrentPosition(showPosition, function(position) {
            alert('Location Permissions Denined.');
        });
    } 
}
    
function showPosition(position) {
    var locOut = document.getElementById("locOut");
    locOut.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

  