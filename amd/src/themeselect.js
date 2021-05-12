define([
    'jquery'
], function ($) {

    return {
        init: function () {

            $('.themeselect').click(function(e) {
                e.preventDefault;
                var opt = $(this).val();
                var dataselect = $(this).data('select');

                if(opt > 0 && opt < 14) {
                    $("[data-btnslot=" + dataselect + "]").removeAttr("disabled");
                } else {
                    $("[data-btnslot=" + dataselect + "]").prop("disabled", true);
                }

                if(opt == 14) {
                    $("[data-inputselect=" + dataselect + "]").removeClass('hide');
                } else {
                    $("[data-inputselect=" + dataselect + "]").addClass('hide');
                }
            });

            $('.inputselect').keyup(function(e) {
                e.preventDefault;
                var btnslot = $(this).data('inputselect');
                if($(this).val() != '') {
                    $("[data-btnslot=" + btnslot + "]").removeAttr("disabled");
                } else {
                    $("[data-btnslot=" + btnslot + "]").prop("disabled", true);
                }
            });
        }
    };
});
