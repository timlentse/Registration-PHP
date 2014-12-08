/**
@The scripts is used for sending form data to server
*/

$("#msform").submit(function(event){
    event.preventDefault();
    formData = $(this).serialize();
    $.post('script/insert.php',formData,function(data){ /*TODO*/ });
});

