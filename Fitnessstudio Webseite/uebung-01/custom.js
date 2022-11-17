document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('home-navbar').classList.add('scroll-navbar');
        } else {
            document.getElementById('home-navbar').classList.remove('scroll-navbar');
        }
    });

});

/*--------------*/

$(".classes-card-item").mouseover(function(){
    $(this).css("background-color", "#c83660").append('<button class="booking-btn">Jetzt Buchen</button>');;
});

$(".classes-card-item").mouseout(function(){
    $(this).css("background-color", "#ffffff").find('button').remove();
});

/*--------------*/

$("#get-started-btn").click(function(){
    $(this).html("You just started " + Date().toLocaleString());
});

/*--------------*/

$(window).resize(function(){
    console.log("innerWidth: " + window.innerWidth);
    console.log("outerWidth: " + window.outerWidth);
    console.log("innerHeight: " + window.innerHeight);
    console.log("outerHeight: " + window.outerHeight);
});

/*--------------*/

$('#fname').keyup(function() {
    checkMinLength(this);
    checkMaxLength(this);
});

$('#lname').keyup(function() {
    checkMinLength(this);
    checkMaxLength(this);
});

$('#subject').keyup(function() {
    checkMinLength(this);
    checkMaxLength50(this);
});

$('#email').keyup(function() {
    checkMinLength20(this);
    checkMaxLength500(this);
});

$('#message').keyup(function() {
    checkEmail(this);
    checkMinLength(this);
});

function checkMinLength(input) {
    if (input.value.length === 0) {
        input.classList.add('input-error');
    } else {
        input.classList.remove('input-error');
    }
}

function checkMaxLength(input) {
    if (input.value.length >= 20) {
        input.classList.add('input-error');
    } else {
        input.classList.remove('input-error');
    }
}

function checkMaxLength50(input) {
    if (input.value.length >= 50) {
        input.classList.add('input-error');
    } else {
        input.classList.remove('input-error');
    }
}

function checkMinLength20(input) {
    console.log("input");
    console.log(input);
    if (input.value.length <= 20) {
        input.classList.add('input-error');
    } else {
        input.classList.remove('input-error');
    }
}

function checkMaxLength500(input) {
    if (input.value.length >= 500) {
        input.classList.add('input-error');
    } else {
        input.classList.remove('input-error');
    }
}

function checkEmail(input) {
    console.log("checkEmail");
    console.log(input);
    value = input.value;
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!pattern.test(value))
    {
        input.classList.add('input-error');
    } else {
        input.classList.remove('input-error');
    }
}
