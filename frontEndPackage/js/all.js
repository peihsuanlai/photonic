$(function () {

    //漢堡選單切換
    $(".menu-icon").click(function () {
        $(this).addClass("d-none");
        $(".close-icon").toggleClass("d-none");
    });

    $(".close-icon").click(function () {
        $(this).toggleClass("d-none");
        $(".menu-icon").toggleClass("d-none");
    });

     // nav 路徑 active 樣式
     if (location.pathname == "/service") {
        $("#nav-service").addClass("active");
    } else if (location.pathname == "/project") {
        $("#nav-project").addClass("active");
    } else if (location.pathname == "/entrepreneur") {
        $("#nav-entrepreneur").addClass("active");
    } else if (location.pathname == "/boss") {
        $("#nav-boss").addClass("active");
    } else if (location.pathname == "/event") {
        $("#nav-event").addClass("active");
    } else if (location.pathname == "/esg") {
        $("#nav-esg").addClass("active");
    } else if (location.pathname == "/about") {
        $("#nav-about").addClass("active");
    } 
    
   
    //navbar滑動換樣式
    // $(window).on("scroll", function () {
    //     let scrollTop = $(window).scrollTop();
    //     if (scrollTop > 100) {
    //         $("#home-nav-container").addClass("navbar-bgWhite");
    //         $(".white-logo").addClass("d-none");
    //         $(".color-logo").removeClass("d-none");
    //     } 
    //     else {
    //         $("#home-nav-container").removeClass("navbar-bgWhite");
    //         $(".white-logo").removeClass("d-none");
    //         $(".color-logo").addClass("d-none");
    //     }
    // });

    
   
});


