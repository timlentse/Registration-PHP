/**
@submit handler
*/

$("#msform").submit(function(event){
    event.preventDefault();
    formData = $(this).serialize();
    $.post('../script/validateLogin.php',formData,function(data){
        if (data =="true"){ window.location.href = "wellcome.html";}
        else if (data == 'false') {
                errorMessage("The email was not Registered!");
            } else if ( data== 'wrong') {
      errorMessage("The password was Incorrect!");
            } else { errorMessage("Sorry:Something was wrong with server!");}         
     });
});

function errorMessage(messageBody){
    var html = "<img src ='../image/Error-icon.png'></img><span style = 'color:red'>"+messageBody+"!</span>";
    document.getElementById('error').innerHTML = html;
}

$("#email").focusin(function() {
    document.getElementById('error').innerHTML = "";
})

$("#pass").focusin(function() {
    document.getElementById('error').innerHTML = "";
})