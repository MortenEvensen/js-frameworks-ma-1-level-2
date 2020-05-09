$(".image1").click(function() {
    $(".image1").css({
        display: "none"
    })
    $(".image2").fadeToggle(700);
});

$(".image2").click(function() {
    $(".image2").css({
        display: "none"
    })
    $(".image3").fadeToggle(700);
});

$(".image3").click(function() {
    $(".image3").css({
        display: "none"
    })
    $(".image1").fadeToggle(700);
});
