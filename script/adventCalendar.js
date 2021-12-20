$(document).ready(function() {
    $("#button").click(function() {
        $("#active").css("transform", "scale(1.4)");
        $("#active").css("z-index", "99");
        $(".day").css("filter", "blur(10px)");
        $(".decoration").css("filter", "blur(10px)");
        $("#active").css("filter", "blur(0px)");
        $("#active .house").css("display", "none");
        $("#active .santa").css("display", "none");
        //Cia C kalbos kode yra priskiriamas paveiksliukas//
        $("#active").css("background", "url(../img/18.jpg) center center");
        $("#active").css("background-size", "cover");
        $("#button").css("display", "none");
        $("#button2").css("display", "block");
    });
});

$(document).ready(function() {
    $("#button2").click(function() {
        $("#active").css("transform", "none");
        $("#active").css("z-index", "2");
        $(".day").css("filter", "blur(0px)");
        $(".decoration").css("filter", "blur(0px)");
        $("#active .house").css("display", "block");
        $("#active .santa").css("display", "block");
        $("#active").css("background", "#0000");
        $("#button").css("display", "block");
        $("#button2").css("display", "none");
    });
});