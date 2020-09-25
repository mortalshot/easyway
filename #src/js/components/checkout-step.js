$(document).ready(function () {
    const checkoutStep = $('checkoutStep-1');
    // if (checkoutStep) {
    //     $('#checkoutStep-1 input').blur(function () {
    //         if ($(this).val()) {
    //             $('#checkoutStep-2').slideDown(300);
    //         }
    //     });

    //     $('input:radio[name="delivery"]').change(function () {
    //         $('#checkoutStep-3').slideDown(300);
    //     })

    //     $('#checkoutStep-3 input').blur(function () {
    //         if ($('#step-checkout-name').val()
    //             && $('#step-checkout-surname').val()
    //             && $('#step-checkout-email').val()
    //             && $('#step-checkout-phone').val()) {
    //             $('#checkoutStep-4').slideDown(300);
    //         }
    //     });
    //     $('#checkoutStep-4 input').blur(function () {
    //         if ($('#step-checkout-street').val()
    //             && $('#step-checkout-house').val()
    //             && $('#step-checkout-corps').val()
    //             && $('#step-checkout-building').val()
    //             && $('#step-checkout-flat').val()) {

    //             $('#checkoutStep-5').slideDown(300);
    //         }
    //     });

    // }

    $('input:radio[name="payment"]').change(function () {
        let checkoutStepID = $(this).closest('.step-checkout').attr("id");
        $('#' + checkoutStepID + ' ' + '.radio-group__checked').not($(this).next()).slideUp(300);
        $(this).parent().children('.radio-group__checked').slideDown(300);
    })
    
    $('.radio-group__field').click(function (e) {
        let checkoutStepID = $(this).closest('.step-checkout').attr("id");
        $('#' + checkoutStepID + ' ' + '.radio-group').removeClass('_active');

        $(this).parent().addClass('_active');
    })
});