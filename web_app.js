var r = document.querySelector(':root');





/*Zmień poniższą wartość żeby włączyć tryb debug.
(usunie/ukryje elementy przeszkadzające w testowaniu strony*/

let debug_state

debug_state = "ooootutaj cokolwiek poza tym tekstem włączy debug";

if(debug_state == "tutaj cokolwiek poza tym tekstem włączy debug"){
    void(0);
    
}

else{
    $(".start_msg").remove();
    $(".bg_cover").remove();
    /*$(".main_overlay").remove();*/


}

/*teraz poniżej już normalne funkcje*/



document.querySelector("#textbox1").style.display = "none"

/* A-TYPE BUTTONS */


$(function(){
    $('#btn_BADGES').on('click', function(){

        $('#slider_BADGES').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer_BADGES').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer_BADGES').on('click', function(){

        $('#slider_BADGES').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer_BADGES').toggleClass('closer_active');

    });
});

$(function(){
    $('#btn_TASKS').on('click', function(){

        $('#slider_TASKS').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer_TASKS').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer_TASKS').on('click', function(){

        $('#slider_TASKS').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer_TASKS').toggleClass('closer_active');

    });
});

$(function(){
    $('#btn_WORKERS').on('click', function(){

        $('#slider_WORKERS').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer_WORKERS').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer_WORKERS').on('click', function(){

        $('#slider_WORKERS').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer_WORKERS').toggleClass('closer_active');

    });
});

/* B-TYPE BUTTONS */

$(function(){
    $('#btn1b').on('click', function(){

        $('#item_moveup1').toggleClass('item_up');

    });
});


/* C-TYPE BUTTONS */

$(function(){
    $('#btn1c').on('click', function(){

        $('.textbox').toggleClass('textbox_appear');
        document.querySelector("#textbox1").style.display = "block"

    });
});

/* OTHER STUFF BELOW */

$(function(){
    $('#start_msg_closer').on('click', function(){

        $('.bg_cover').toggleClass('hide_this');
        $('#start_msg_closer').toggleClass('hide_this');
        $('.start_msg').toggleClass('start_box_hide');

    });
});









/* BADGES */

$('.badge_description').hover(function() {
    $('.badge_description').toggleClass('badges_moveLeft');
}, function() {
    $('.badge_description').toggleClass('badges_moveLeft');
});




/* manage badge desc */

let badge_description = "Kliknij odznake zeby zobaczyc opis itp (na razie tylko opis :c)"


function changeBadgeDescription(badge_description) {
    document.getElementById("badge_description_txt").innerText = badge_description;
    
}


let b1d = "opis1: w pliku .js sa zmienne co maja opis kazdej odznaki"
let b2d = "a po kliknieciu odznaki zmienia sie ten tutaj tekst na wartosc ustalona w pliku .js"
let b3d = "tak"
let b4d = "nie :("




/* TASKS */



$('.task_list').hover(function() {
    $('.task_list').toggleClass('task_listHOVER');  /*ON ENTER DIV*/
}, function() {
    setTimeout(function(){                          
        $('.task_list').toggleClass('task_listHOVER');  /*ON LEAVE DIV*/
        }, 1500)
                    
});





/* HANDLE WORKERS LIST */

let worker_name1 = "Joanna Woźniak"
let worker_name2 = "Andrzej Gawin"
let worker_name3 = "Patrycja Bos"

let worker_status1 = "Obecny/a"
let worker_status2 = "Nieobecny/a"
let worker_status3 = "Obecny/a"


document.getElementById("name1").innerText = worker_name1;
document.getElementById("name2").innerText = worker_name2;
document.getElementById("name3").innerText = worker_name3;

document.getElementById("status1").innerText = worker_status1;
document.getElementById("status2").innerText = worker_status2;
document.getElementById("status3").innerText = worker_status3;


$('#workers_profilePicture1').toggleClass('workers_profilePicture1');
$('#workers_profilePicture2').toggleClass('workers_profilePicture2');
$('#workers_profilePicture3').toggleClass('workers_profilePicture3');
