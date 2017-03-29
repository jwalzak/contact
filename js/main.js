//Document load for the initial 
//data gathering
$(document).ready(function(){
    loadContact();
    var a = 1;
    var b = 2;
    var c = a + b;
});

function loadContact(){
    $.get("data.php?action=load", function(res){
        console.log(res);
    });
}