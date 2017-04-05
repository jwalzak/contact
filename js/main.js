//Document load for the initial 
//data gathering
$(document).ready(function(){
    loadContact();
    console.log("Loading");
});

function loadContact(){
    $.get("data.php?action=load", function(res){
        console.log(res);
    });
}


