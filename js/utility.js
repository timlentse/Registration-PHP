/**
@This script is some utility function
*/

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
//var animating; //flag to prevent quick multi-click glitches
var isCorrectEmail;
var isPasswdValid;
$(".next").click(function() {
   /* if (animating) return false;
    animating = true;*/
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    printError();
    if ($(this).attr('id') ==='1') {
        if (!isCorrectEmail || !isPasswdValid){ return false; }
    }
        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50) + "%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')'
                });
                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
});

$(".previous").click(function() {
 /*
    if (animating) return false;
    animating = true;*/

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
        opacity: 0
    }, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'left': left
            });
            previous_fs.css({
                'transform': 'scale(' + scale + ')',
                'opacity': opacity
            });
        },
        duration: 800,
        complete: function() {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".submit").click(function() {
    //return false;
})

//response handler(check if the email was registered.)
$("#email").focusout(function() {
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        $.get('script/validate.php', $("#email").serialize(), function(response) {
            if (response == "false") {
                errorMessage("The email was Registered!");
                isCorrectEmail = false;
            } else {
                document.getElementById('error').innerHTML = "<img src ='image/Clear-Tick-icon.png'></img>";
                isCorrectEmail = true;
            }
        })
    } else isCorrectEmail = false;
})

function errorMessage(messageBody){
    var html = "<img src ='image/Error-icon.png'></img><span style = 'color:red'>"+messageBody+"!</span>";
    document.getElementById('error').innerHTML = html;
}

$("#email").focusin(function() {
    document.getElementById('error').innerHTML = "";
})
//show the error message.
 function printError() {
    if (!validatePasswd()) {
        isPasswdValid = false;
        var html = "<img src ='image/Error-icon.png'></img><span style = 'color:red'>The two password don't Match!</span>";
        document.getElementById('validatepasswd').innerHTML = html;       
    } else {
        isPasswdValid = true;
    }
    if (!isCorrectEmail) {
        var email = document.getElementById('email').value 
        if ( !validateEmail(email)) { errorMessage("Please input valid email address!"); }
        else { errorMessage("The email was Registered!");}
    }
}

$("#cpass").focusin(function() {
    document.getElementById('validatepasswd').innerHTML = "";
})

//validate the email using regex.
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//check if the two inputing password are same.
function validatePasswd() {
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    return (pass === cpass && pass != "" && cpass != '');
}