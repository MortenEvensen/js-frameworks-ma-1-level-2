# A simple slideshow for displaying images. 

## Follow these 5 steps: 

1) Add you images to the images folder.

2) Insert this block of code to your html document for each image:
##
    <div class="image-wrap">
        <img class="image image1" src="images/image1.jpg">
    </div>

3) For each image, change the "image1"-class to the next increasing number (image2, image3) and so on. It should look like this:

##
    <div class="image-wrap">
        <img class="image image1" src="images/image1.jpg">
    </div>
    <div class="image-wrap">
        <img class="image image2" src="images/image2.jpg">
    </div>
    <div class="image-wrap">
        <img class="image image3" src="images/image3.jpg">
    </div>


4) Add this block of code to the javascript document for each image: 
##
    $(".image1").click(function() {
    	$(".image1").css({
       	    display: "none"
    })
    $(".image2").fadeToggle(700);
});


5) Increase the numbers for each image. The last image in the slideshow must return to the first image. It should look like this:
##
//First image

$(".image1").click(function() {
    $(".image1").css({
        display: "none"
    })
    $(".image2").fadeToggle(700);
});

//Second image

$(".image2").click(function() {
    $(".image2").css({
        display: "none"
    })
    $(".image3").fadeToggle(700);
});

//Last image image

$(".image3").click(function() {
    $(".image3").css({
        display: "none"
    })
    $(".image1").fadeToggle(700);
});


Thats it! You now have a fully working simple slideshow for you images!


The css accepts 10 images, if you have more images then that, just add ".image11", ".image12" etc to the css. It should look like this: 


.image2, .image3, .image4, .image5, .image6, .image7, .image8, .image9, .image10, *add new classes if needed here* {
    display: none;
}
