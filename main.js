console.log('hi');

function submitSignUpInfo(){
    console.log('hello');
    event.preventDefault();
    const options = {
        url: "http://localhost:7777/SignUp",
        dataType: 'json',
        method: 'POST',
        data: $('form').serialize(),
        headers: {
            "Access-Control-Allow-Origin" : "*",
        },
    }
    $.ajax(options);
}

function submitSignUpInfo2(){
    console.log('hello');
    event.preventDefault();
    const options = {
        url: "http://localhost:7777/SignUp2",
        dataType: 'json',
        method: 'GET',
        data: $('form').serialize(),
        headers: {
            "Access-Control-Allow-Origin" : "*",
        },
    }
    $.ajax(options);
}