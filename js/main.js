//Document load for the initial 
//data gathering
$(document).ready(function(){
    loadContact();
    console.log("Loading");
});

function loadContact(){
    $.get("data.php?action=load", function(res){
        console.log(res);
        displayContacts(res);
    });
}

function displayContacts(contact){
    for(let i = 0; i<contact.length; i++){
        console.log(contact[i]);
    }//End for

}


