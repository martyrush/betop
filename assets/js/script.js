$(document).ready(function(){
   // rndNumber();
    display();
    hoverSpBtn();
     starVote();
    moveToTop();
    startDiag();
    /*$('.hamb-menu').unbind('click').bind('click', function (e) {
        $('.widget-left-menu').toggleClass('left-menu-show');
        alert('hamburger clicked');
        console.log('onlcick hamburger');
    });*/
    $('.calca').unbind('click').bind('click', function (e) {
        closeLeftMenu();
    });
    $('.left-head').unbind('click').bind('click',function(e){
        closeLeftMenu();
    }); 
   
    var nav = document.getElementById("nav_c");
        // var stick =nav.offsetTop;
    var stick = nav.offsetHeight;
    var prevScrollPos = window.pageYOffset;
   
    window.onscroll=function(){scroll();};
    /*window.addEventListener('scroll', function() {
          
         if($(window).scrollTop()>=stick)
       {
                console.log("somesing work");     
        if(!$('#nav_c').hasClass('nav-cont-fixed')){
        $('#nav_c').removeClass('nav-cont');
        $('#nav_c').addClass('nav-cont-fixed');
            
        }else{	
        if($(window).scrollTop()>=(stick+60))
        if (prevScrollPos > currScrollPos) {
        document.getElementById("nav_c").style.top = "0";console.log('0 worked');
         } else {
        document.getElementById("nav_c").style.top = "-60px";
             console.log('-60 worked');
         }
         prevScrollPos = currScrollPos;
       }}else{
            if(!$('#nav_c').hasClass('nav-cont'))
            {
            $('#nav_c').removeClass('nav-cont-fixed');
            $('#nav_c').addClass('nav-cont');
            }
       }
         
     });*/
    function scroll(){
        var currScrollPos=window.pageYOffset;
         if($(window).scrollTop()>=stick)
       {
               //console.log("stich = "+stick);
           /////////////////////////////////if($('#main-content').hasClass('main-out'))
        if(!$('#nav_c').hasClass('nav-cont-fixed')){
        $('#nav_c').removeClass('nav-cont');
            $('#nav_c').addClass('nav-cont-fixed');
        }else{	
        if($(window).scrollTop()>=(stick+60))
        if (prevScrollPos > currScrollPos) {
        document.getElementById("nav_c").style.top = "0";//console.log('0 worked');
         } else {
        document.getElementById("nav_c").style.top = "-60px";
           //  console.log('-60 worked');
         }
         prevScrollPos = currScrollPos;
       }}else{
           //console.log("scroll < stick = "+stick);
            if(!$('#nav_c').hasClass('nav-cont'))
            {
                 $('#nav_c').addClass('nav-cont');
                $('#nav_c').removeClass('nav-cont-fixed');
            }
       }
    }
});

function stickScroll(stick,prevScrollPos){
    var currScrollPos=window.pageYOffset;
     if($(window).scrollTop()>=stick)
       {
                     
        if(!$('#nav_c').hasClass('nav-cont-fixed')){
        $('#nav_c').removeClass('nav-cont');
        $('#nav_c').addClass('nav-cont-fixed');

        }else{	
        if($(window).scrollTop()>=(stick+60))
        if (prevScrollPos > currScrollPos) {
        document.getElementById("nav_c").style.top = "0";//console.log('0 worked');
         } else {
        document.getElementById("nav_c").style.top = "-60px";
             //console.log('-60 worked');
         }
         prevScrollPos = currScrollPos;
       }}else{
            if(!$('#nav_c').hasClass('nav-cont'))
            {
            $('#nav_c').removeClass('nav-cont-fixed');
            $('#nav_c').addClass('nav-cont');
            }
       }
}
function showLeftMenu()
{
    if($('#main-content').hasClass('main-out'))
        {
             $('#main-content').removeClass('main-out')
        }
    if($('.widget-left-menu').hasClass('widget-left-menu-close'))
        {
           
             $('.widget-left-menu').removeClass('widget-left-menu-close')
        }

   
    $('.widget-left-menu').toggleClass('left-menu-show');
   $('#main-content').toggleClass('main-move');
       if($('.calca').hasClass('calca-show'))
      closeLeftMenu();else
    $('.calca').toggleClass('calca-show');
    //$('#nav-c').removeClass('nav-cont-fixed');
       // alert('hamburger clicked');
}
function closeLeftMenu()
{
    $('#main-content').removeClass('main-move').addClass('main-out');
    $('.widget-left-menu').removeClass('left-menu-show').addClass('widget-left-menu-close');
     $('.calca').removeClass('calca-show');
   /* if($('#nav_c').hasClass('nav-cont-fixed')){
        $('#nav_c').removeClass('nav-cont-fixed');
       }
    if($('#nav_c').hasClass('nav-cont'))
        {
            $('#nav_c').removeClass('nav-cont');
        }*/
   /* $('#nav_c').removeClass('nav-cont-fixed');
     $('#nav_c').removeClass('nav-cont');
     $('#nav_c').addClass('nav-cont');*/
     
    //$('#nav-c').addClass('nav-cont-fixed');
   //$('#nav_c').removeClass('nav-cont-fixed');
}
function rndNumber()
{
    //$('.rotplace1').text('1500');
    time=800;
    setTimeout(function inc(){
                if(time<1650)
                   { time+=10;$('.rotplace1').text(time+"₴");setTimeout(inc,10);
    }},10);
    col=40;
    payone=10;
    colzaj=700;
    setTimeout(function incCol(){
                if(col<90)
                   { col+=5;$('.rotplace2').text(col);setTimeout(incCol,100);
    }},100);
    setTimeout(function incOne(){
                if(payone<150)
                   { payone+=10;$('.rotplace3').text(payone+"₴");setTimeout(incOne,100);
    }},100);
   setTimeout(function incZaj(){
                if(colzaj<1200)
                   { colzaj+=10;$('.rotplace4').text(colzaj+"₴");setTimeout(incZaj,20);
    }},20);
}
function rndNumberSec()
{
    //$('.rotplace1').text('1500');
    time=10;
    setTimeout(function inc(){
                if(time<1000)
                   { time+=5;$('.rotplacesec1').text(time+"₴");setTimeout(inc,10);
    }},10);
    col=10;
    payone=10;
    colzajs=0;
    setTimeout(function incCol(){
                if(col<125)
                   { col+=1;$('.rotplacesec2').text(col);setTimeout(incCol,10);
    }},10);
    setTimeout(function incOne(){
                if(payone<=140)
                   { payone+=5;$('.rotplacesec3').text(payone+"₴");setTimeout(incOne,100);
    }},100);
   setTimeout(function incZaj(){
      // console.log("start - "+colzajs);
                if(colzajs<=7)
                   {colzajs+=1;//console.log('worked'); $('.rotplacesec4').text(colzajs);setTimeout(incZaj,100);
    }else{console.log('not worked - '+colzajs); }},100);
}

function scrolledDiagrams(){
     var l =$(window).scrollTop() + $(window).height();
   // console.log(l+" .diagram-cont-1 = "+$('.diagram-cont-1').offset().top);
     if(l>=$('.diagram-cont-1').offset().top){
 		$('.diagram-cont-1').addClass('show-diagram');
         $('.diagram-cont-1 .diagram-cont').addClass('visible-diagram');
         $('.diagram-cont-1 .diagram-cont-sec').addClass('visible-diagram');
  
    }
    if(l>=$('.diagram-cont-2').offset().top){
 		$('.diagram-cont-2').addClass('show-diagram');
        $('.diagram-cont-2 .diagram-cont').addClass('visible-diagram');
         $('.diagram-cont-2 .diagram-cont-sec').addClass('visible-diagram');
 }
}

function startDiag(){
    var  wind = $(window).height();
    var scrl =$(document).scrollTop();
    var scrollBot=scrl+wind;
    
    showAnimDiag(scrollBot);
}

function showAnimDiag(h){
    for(var i=1;i<=12;i++){
        if($('.diagram-cnt-'+i).length){
        var top = $('.diagram-cnt-'+i).offset().top;
        if((h-top)>0){
            $('.diagram-cnt-'+i).addClass('show-diagram');
            $('.diagram-cnt-'+i+' .diagram-cont').addClass('visible-diagram');
        }
        }
    }
}
/*$(window).on("scroll", function(){
  if($(window).scrollTop() + $(window).height() - 100 >= $("#section-number").offset().top){
  //  alert("On viewport");
      console.log("scrolled!");
      $("#section-number").css({"opacity":"1"});
}});*/

$(window).on("scroll", function(){
    display();
    });
function display()
{
    var i=1;
    while($(".section-"+i).length)
    {
        if(!$('.section-'+i).hasClass('change'))
        if(($(window).height()+$(window).scrollTop())>$('.section-'+i).offset().top) 
            {
                $('.section-'+i).addClass("change");
               // console.log('section - '+i);
                $('.section-'+i+' .bottom-line').removeClass('bottom-line').addClass('bottom-line-show');
                //$('.bottom-line-show').html('<span></span>')
                if(i==5)
                    {
                        // diagram();
                        rndNumber();
                        
                    }
                if(i==6){
                    //diagramErba();
                    rndNumberSec();
                }
            }
        if(i==5)
            {
               // rndNumber();
               
            }
        
        i++;
    }
    if($('.diagram-section-2').length)
        {
              startDiag();
        }else
    if($('.diagram-widget').length) 
    {
        scrolledDiagrams();
      
    }
}

function diagram(){
    $('.diagram-none').removeClass('diagram-none').addClass('diagram-cont');
}
function diagramErba(){
    $('.diagram-none-sec').removeClass('diagram-none-sec').addClass('diagram-cont');
}
function hoverSpBtn(){
    $('.spons-btn').mouseover(
        function(){
            $( this ).find("img").removeClass('grayscale');
            $(this).find("img").removeClass('img-side-5').addClass('img-side-4');
        }
    ).mouseout(function(){$( this ).find("img").addClass('grayscale');
            $(this).find("img").removeClass('img-side-4').addClass('img-side-5');
                         });
}

function starVote()
{
    get_votes();
    $('.star-rate').hover(
function(){
$(this).prevAll().addBack().addClass('star-rate-hover');
        $(this).nextAll().removeClass('star-rate-hover'); 
},
function(){
$(this).prevAll().addBack().removeClass('star-rate-hover');
get_votes();
}
);
}
function get_votes(){
    drawSelected(4);
}
function drawSelected(n)
{
/*$('.star-rate').each(function(c) {
if(c<n)
{
$(this).prevAll().addBack().addClass('star-rate-hover');
$(this).nextAll().removeClass('star-rate-hover'); 
}
});*/
    $('.str-1').each(function(c) {
if(c<n)
{
$(this).prevAll().addBack().addClass('star-rate-hover');
$(this).nextAll().removeClass('star-rate-hover'); 
}
});
     $('.str-2').each(function(c) {
if(c<n)
{
$(this).prevAll().addBack().addClass('star-rate-hover');
$(this).nextAll().removeClass('star-rate-hover'); 
}
});
     $('.str-3').each(function(c) {
if(c<n)
{
$(this).prevAll().addBack().addClass('star-rate-hover');
$(this).nextAll().removeClass('star-rate-hover'); 
}
});
}

function moveToTop()
{
    $("#back-top").hide();
    $(function () {
    $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
    $('#back-top').show(10).animate({bottom:"25px"},10);
    } else {
    $('#back-top').animate({bottom:"-80px"},10);
    }
    });
    $('#back-top').click(function () {
    $('html, body').animate({
                  scrollTop: 0
    }, 400);
    return false;
    });
    });
}