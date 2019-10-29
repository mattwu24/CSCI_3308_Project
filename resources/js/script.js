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

        // regex here to parse address and make sure it's accessible
        alert(userLoc.val());
    });
  
  });

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else { 
        locOut.innerHTML = "Geolocation is not supported by this browser.";
    }
}
    
function showPosition(position) {
    var locOut = document.getElementById("locOut");
    locOut.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

  