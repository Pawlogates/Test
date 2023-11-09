$(function(){
    $('#btn1a').on('click', function(){

        $('#slider1').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer1').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer1').on('click', function(){

        $('#slider1').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer1').toggleClass('closer_active');

    });
});

$(function(){
    $('#start_msg_closer').on('click', function(){

        $('.bg_cover').toggleClass('hide_this');
        $('#start_msg_closer').toggleClass('hide_this');
        $('.start_msg').toggleClass('start_box_hide');

    });
});