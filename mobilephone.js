$(document).ready(function(){
    $(".screen2").hide();
    $(".screen3").hide();
    
    $(".trans_options").on("click", function(){
        $(".screen").hide();
        $(".screen2").hide();
        $(".screen3").show();
    });
    
    $(".trans_homebtn").on("click", function(){
        $(".screen2").hide();
        $(".screen3").hide();
        $(".screen").show();
    });
    
    $(".trans_back").on("click", function(){
         $(".screen3").hide();
        $(".screen").hide();
       
        $(".screen2").show();
    });
    
//            $(".trans_options, .trans_homebtn, .trans_back").on("click", function(){
//                
//            $(".screen").delay(1000).fadeOut();
//            $(".screen2").delay(1000).fadeIn().delay(2000).fadeOut();           
//            $(".screen3").delay(1000).fadeIn();
//                
////            $(".screen2").fadeIn();
//        });
        });