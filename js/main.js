//Document load for the initial 
//data gathering
$(document).ready(function(){
    loadContact();
    $("#saveNew").submit(function(e){
        e.preventDefault();
        $.post("data.php?action=newcontact", $(this).serialize(), function(res){
            console.log(res);
            loadContact();
        });
    });//End #saveNew
    $("#search").submit(function(e){
        e.preventDefault();
        $.post("data.php?action=search", $(this).serialize(), function(res){
            displayContacts(res);
        });
    });//End #search
});

function loadContact(){
    $.get("data.php?action=load", function(res){
        // $("#saveNew").empty();
        $("#contacts").empty();
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
        $("#button-" + contact[i].addr_id).click(function(){
            //Gets the value from the hidden input
            loadOneContact($(this).siblings('input').val());
        });
    }//End for
}//End displayContacts();

//Update contact function
function loadOneContact(updateId){
    $.get("data.php?action=update&id=" + updateId, function(res){
        $('#firstName').val(res[0].addr_first_name);
        $('#lastName').val(res[0].addr_last_name);
        $('#city').val(res[0].addr_city);
        $('#region').val(res[0].addr_region);
        $('#emailOne').val(res[0].addr_email_1);
        $('#emailTwo').val(res[0].addr_email_2);
        $('#phoneOne').val(res[0].addr_phone_1);
        $('#phoneTwo').val(res[0].addr_phone_2);

        let conId = res[0].addr_id;
        let $updateContact = $("<button>").attr("id", "saveUpdate").addClass("btn-info btn-lg").text("Save").click(function(){
            saveUpdate(conId);
        });
        $("#form").append($updateContact);
    });
}//End update();

function saveUpdate(id){

    $("#saveUpdate").remove();
}//End saveUpdate

