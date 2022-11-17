// played a bit with js for the contact form

// I used JavaScript because I wanted to have a possibility to check if f.e. the email is written correct
// JQuery keyup() Method is used to start the method when the first letter is written
// JQuery is a lightweight, "write less, do more", JavaScript library.

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

// this function below checkes if the Email is written correct

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
