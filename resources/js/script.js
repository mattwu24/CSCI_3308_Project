$(document).ready(function(){

    var userLoc = $('#userLoc');
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