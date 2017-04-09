//Document load for the initial 
//data gathering
$(document).ready(function(){
    loadContact();
    $("#saveNew").submit(function(e){
        e.preventDefault();
        $.post("data.php?action=newcontact", $(this).serialize(), function(res){
            console.log(res);
            loadContact();
            clearForm();
        });
    });//End #saveNew

    $("#search").submit(function(e){
        e.preventDefault();
        $.post("data.php?action=search", $(this).serialize(), function(res){
            console.log(res);
            $("#contacts").empty();
            if(res.length < 1){
                alert("Sorry, no results found. Please try another name.")
                loadContact();
            }
            else{
                displayContacts(res);
            }//End else
        });
    });//End #search
});//End document ready

function loadContact(){
    $.get("data.php?action=load", function(res){
        $("#contacts").empty();
        displayContacts(res);
    });
}

function displayContacts(contact){

    for(let i = 0; i<contact.length; i++){
        let contactId = contact[i].addr_id;
        let $contactDiv = $("<div>").addClass('singleContact col-md-3').attr('id', contact[i].id);
        let $userName = $("<p>").text("Name: " + contact[i].addr_first_name + " " + contact[i].addr_last_name);
        let $userAddress = $("<p>").text("City & Region: " + contact[i].addr_city + " " + contact[i].addr_region);
        let $userEmail = $("<p>").text("Email Address: " + contact[i].addr_email_1);
        let $userPhone = $("<p>").text("Phone Number: " + contact[i].addr_phone_1);

        let $del = $("<a>").append("href", "#").text("X").addClass('delLink').click(function(e){
            e.preventDefault();
            $.get("data.php?action=delete&id=" + contactId, function(res){
                console.log(res);
            });
            loadContact();
        });
        
        $contactDiv.append($del).append($userName).append($userAddress).append($userEmail);
        
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

        let $edit = $("<button>").attr("id", "button-" + contact[i].addr_id).addClass('btn btn-info btn-sm').text("Update Contact");
        let $hiddenId = $("<input>").attr({id: "input-" + contact[i].addr_id, type: "hidden"}).val(contact[i].addr_id);


        
        $contactDiv.append($edit).append($hiddenId);

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

        $("#saveUpdate").remove();
        let conId = res[0].addr_id;
        let $updateContact = $("<button>").attr("id", "saveUpdate").addClass("btn-info btn-sm").text("Save").click(function(){
            saveUpdate(conId);
            clearForm();
        });
        $("#form").append($updateContact);
    });
}//End update();

function saveUpdate(id){

    $("#saveUpdate").remove();
}//End saveUpdate

function clearForm(){
    $('#firstName').val("");
    $('#lastName').val("");
    $('#city').val("");
    $('#region').val("");
    $('#emailOne').val("");
    $('#emailTwo').val("");
    $('#phoneOne').val("");
    $('#phoneTwo').val("");
}//end clearForm()