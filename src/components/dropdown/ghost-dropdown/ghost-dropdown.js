//https://habr.com/ru/post/38208/
$(document).ready(function(){
    $(".dropdown").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
});