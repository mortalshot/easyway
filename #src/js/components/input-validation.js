$(document).ready(function () {
    let workEmail = $('.email');
    let validateText = $(".input-group__valide-text");

    $(workEmail).on('change', function () {
        var workEmailProp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var input = $(this).val();

        if (workEmailProp.test(input) == false) {
            console.log($(this).parent());
            $(this).parent().removeClass('_valid');
            $(this).parent().addClass('_invalid');
            $(this).parent().children('.input-group__valide-text').slideDown(300).text("Что-то пошло не так");
        }
        else {
            $(this).parent().removeClass('_invalid');
            $(this).parent().addClass('_valid');
            $(this).parent().children('.input-group__valide-text').slideDown(300).text("Успешно");
        }
    })


    // workEmail.onchange = () => {
    //     var workEmailProp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     var input = workEmail.value;

    //     console.log(workEmail);

    //     if (workEmailProp.test(input) == false) {
    //         console.log(workEmail.child(validateText));
    //         console.log("Something is wrong");
    //     }
    //     else {
    //         console.log("All is good");
    //     }
    // };
})