//https://habr.com/ru/post/38208/
$(document).ready(function(){
    $(".ghostDropdown").click(function(){
        $("#ghostDropdownList").slideToggle("slow");
        $(this).toggleClass("active");
        $("#ghostDropdownList").toggleClass("open");
    });
});