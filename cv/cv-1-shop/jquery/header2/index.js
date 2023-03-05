$(document).ready(function(){
    $('.brand-reponsive').click(function(){
        $(".ctn").slideToggle();
    });

    $(".close-menu").click(function(){
        $(".ctn").slideToggle();
    })


    $('.menu-con-product').click(function(){
        $('.menu-product').slideToggle(1000);
    })

    $('.menu-con-shop').click(function(){
        $('.menu-shop').slideToggle(1000);
    })

    // body2

    $('.btn-bd1').click(function(){
        $('.list-body-2').show()
    });

    $('.btn-bd2').click(function(){
        $('.bd-2-1').hide()
        $('.bd-2-4').hide()
        $('.bd-2-2').show()
        $('.bd-2-3').show()
    });
    $('.btn-bd3').click(function(){
        $('.bd-2-1').show()
        $('.bd-2-4').show()
        $('.bd-2-2').hide()
        $('.bd-2-3').hide()
    });

    $(".btn-body-2").click(function(){
        $(".btn-body-2").removeClass("acct");
        $(this).addClass("acct")
    })
})