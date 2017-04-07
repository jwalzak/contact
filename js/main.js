//Document load for the initial 
//data gathering
$(document).ready(function(){
    loadContact();
    console.log("Loading");
});

function loadContact(){
    $.get("data.php?action=load", function(res){
        // console.log(res);
        displayContacts(res);
    });
}

function displayContacts(contact){
    for(let i = 0; i<contact.length; i++){
        let $contactDiv = $("<div>").attr('id', contact[i].id).attr('class', 'singleContact');
        let $userName = $("<p>").text("Name: " + contact[i].addr_first_name + contact[i].addr_last_name);
        let $userAddress = $("<p>").text("City & Region: " + contact[i].addr_city);
        let $userEmail = $("<p>").text("Email Address: " + contact[i].addr_email_1);
        let $userPhone = $("<p>").text("Phone Number: " + contact[i].addr_phone_1);
        $contactDiv.append($userName).append($userAddress).append($userEmail).append($userPhone);
        $("#contacts").append($contactDiv);
        console.log(contact[i]);
    }//End for
}//End displayContacts();


