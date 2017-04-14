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
                displayResult(res);
            }//End else
        });
    });//End #search
});//End document ready

//Gets the data from the DB and calls the displayContacts() function
//passing the returned values to the function.
function loadContact(){
    $.get("data.php?action=load", function(res){
        $("#contacts").empty();
        displayContacts(res);
    });
}//End loadContact();

//Loads all the contacts onto the page.
function displayContacts(contact){

//The main loop, takes all the data from loadContact
//Inputs the data into HTML
    for(let i = 0; i<contact.length; i++){
        let contactId = contact[i].addr_id;
        let $contactDiv = $("<div>").addClass('singleContact col-md-8 col-sm-12').attr('id', contact[i].id);
        let $userName = $("<p>").text("Name: " + contact[i].addr_first_name + " " + contact[i].addr_last_name);
        let $userAddress = $("<p>").text("City & Region: " + contact[i].addr_city + " " + contact[i].addr_region);
        let $userEmail = $("<a>").attr("href", "mailto:" + contact[i].addr_email_1).text("Email Address: " + contact[i].addr_email_1).append("<br />");
        let $emailTwo = $("<a>").attr("href", "mailto:" + contact[i].addr_email_2).text("Work Email: " + contact[i].addr_email_2).append("<br />");
            $contactDiv.append("<br />").append($emailTwo);
        let $userPhone = $("<a>").attr("href", "tel:" + contact[i].addr_phone_1).text("Phone Number: " + contact[i].addr_phone_1).append("<br>");
        let $phoneTwo = $("<a>").attr("href", "tel:" + contact[i].addr_phone_2).text("Home Phone: " + contact[i].addr_phone_2).append("<br />");

        let $del = $("<a>").append("href", "#").text("X").addClass('delLink').click(function(e){
            e.preventDefault();
            $.get("data.php?action=delete&id=" + contactId, function(res){
                console.log(res);
            });
            loadContact();
        });//End del
        
        $contactDiv.append($del).append($userName).append($userAddress).append($userEmail).append($emailTwo).append($userPhone).append($phoneTwo);

        //Creates a button for editing a contact
        //It will only show when the user clicks to update a contact from 
        //the contact list.
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
    //Hides the submit new contact button
    $("#saveButt").hide();

    $.get("data.php?action=update&id=" + updateId, function(res){
        //Fills the form with data returned from the DB.
        $('#firstName').val(res[0].addr_first_name);
        $('#lastName').val(res[0].addr_last_name);
        $('#city').val(res[0].addr_city);
        $('#region').val(res[0].addr_region);
        $('#emailOne').val(res[0].addr_email_1);
        $('#emailTwo').val(res[0].addr_email_2);
        $('#phoneOne').val(res[0].addr_phone_1);
        $('#phoneTwo').val(res[0].addr_phone_2);

        //Prevents multiple #saveUpdate buttons from appearing on the page
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
    $.post("data.php?action=saveupdate&id=" + id, $("#saveNew").serialize(), function(res){
        console.log(res);
    });

    loadContact();

    $("#saveUpdate").remove();
    $("#saveButt").show();
}//End saveUpdate


//Used to empty the form of data when submit or save button is clicked.
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

//Show the name of the contacts that are returned from the search function.
function displayResult(contact){
    for(let i = 0; i<contact.length; i++){
        let contactId = contact[i].addr_id;
        let $contactDiv = $("<div>").addClass('singleContact col-md-8 col-sm-12').attr('id', contact[i].id);
        let $name = $("<p>").text("Name:" + contact[i].addr_first_name + " " + contact[i].addr_last_name);
        $contactDiv.append($name);
        $contactDiv.click(function(){
        $contactDiv.empty();
            console.log(contact);
            let $address = $("<p>").text("City & Region: " + contact[i].addr_city + " " + contact[i].addr_region);
            let $email = $("<a>").attr("href", "mailto:" + contact[i].addr_email_1).text("Email Address: " + contact[i].addr_email_1).append("<br />");
            let $emailTwo = $("<a>").attr("href", "mailto:" + contact[i].addr_email_2).text("Work Email: " + contact[i].addr_email_2).append("<br />");
            let $phone = $("<a>").attr("href", "tel:" + contact[i].addr_phone_1).text("Phone Number: " + contact[i].addr_phone_1).append("<br />");
            let $phoneTwo = $("<a>").attr("href", "tel:" + contact[i].addr_phone_2).text("Home Phone: " + contact[i].addr_phone_2);
            let $del = $("<a>").append("href", "#").text("X").addClass('delLink').click(function(e){
            e.preventDefault();
            $.get("data.php?action=delete&id=" + contactId, function(res){
                console.log(res);
            });
            loadContact();
        });//End del
            $contactDiv.append($name).append($address).append($email).append($emailTwo).append($phone).append($phoneTwo).append($del);
        }); 
        $("#contacts").append($contactDiv);
    }//End for
}//End displayResult()