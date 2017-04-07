//Document load for the initial 
//data gathering
$(document).ready(function(){
    loadContact();
    console.log("Loading");
});

function loadContact(){
    $.get("data.php?action=load", function(res){
        displayContacts(res);
    });
}

function displayContacts(contact){
    for(let i = 0; i<contact.length; i++){
        let $contactDiv = $("<div>").addClass('singleContact col-md-3').attr('id', contact[i].id);
        let $userName = $("<p>").text("Name: " + contact[i].addr_first_name + " " + contact[i].addr_last_name);
        let $userAddress = $("<p>").text("City & Region: " + contact[i].addr_city + " " + contact[i].addr_region);
        let $userEmail = $("<p>").text("Email Address: " + contact[i].addr_email_1);
        let $userPhone = $("<p>").text("Phone Number: " + contact[i].addr_phone_1);
        
        $contactDiv.append($userName).append($userAddress).append($userEmail);
        
        //Adds second email address if it exists
        if(contact[i].addr_email_2 != null){
            let $emailTwo = $("<p>").text("Work Email: " + contact[i].addr_email_2);
            $contactDiv.append($emailTwo);
        }//End if

        $contactDiv.append($userPhone);

        //Adds second phone number if it exists
        if(contact[i].addr_phone_2 != null){
            let $phoneTwo = $("<p>").text("Home Phone: " + contact[i].addr_phone_2);
            $contactDiv.append($phoneTwo);
        }//End if
        let $edit = $("<button>").attr("id", "button-" + contact[i].addr_id).addClass('btn btn-info btn-lg').text("Update Contact");
        let $contactId = $("<input>").attr({id: "input-" + contact[i].addr_id, type: "hidden"}).val(contact[i].addr_id);
        $contactDiv.append($edit).append($contactId);

        $("#contacts").append($contactDiv);
        console.log(contact[i]);
        $("#button-" + contact[i].addr_id).click(function(){
            //Gets the value from the hidden input
            update($(this).siblings('input').val());
        });
    }//End for
}//End displayContacts();

//Update contact function
function update(updateId){
    console.log(updateId);
}//End update();

