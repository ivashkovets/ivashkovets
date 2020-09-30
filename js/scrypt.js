document.cockie='SameSite=Lax';
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(window).scroll(function(event){
        $('.header,.menu,.logotip').addClass('color');
    });
    $('.s3-bla').addClass('active');
    $('.s3-t__a').addClass('active');
    $('.s3-t__a').click(function(){
        $('.s3-bla').toggleClass('active');
        $('.s3-bla2.active').removeClass('active');
        $('.s3-bla3.active').removeClass('active');
        $('.s3-t__a').toggleClass('active');
        $('.s3-t__a2.active').removeClass('active');
        $('.s3-t__a3.active').removeClass('active');
    });
    $('.s3-t__a2').click(function(){
        $('.s3-bla2').toggleClass('active');
        $('.s3-bla3.active').removeClass('active');
        $('.s3-bla.active').removeClass('active');
        $('.s3-t__a2').toggleClass('active');
        $('.s3-t__a.active').removeClass('active');
        $('.s3-t__a3.active').removeClass('active');
    });
    $('.s3-t__a3').click(function(){
        $('.s3-bla3').toggleClass('active');
        $('.s3-bla.active').removeClass('active');
        $('.s3-bla2.active').removeClass('active');
        $('.s3-t__a3').toggleClass('active');
        $('.s3-t__a2.active').removeClass('active');
        $('.s3-t__a.active').removeClass('active');
    });
    $('.s5-icon__i').addClass('active');
    $('.s5-bla2').addClass('active');
    $('.s5-icon__i').click(function(){
        $('.s5-icon__i').toggleClass('active');
        $('.s5-icon__i2.active').removeClass('active');
        $('.s5-icon__i3.active').removeClass('active');
        $('.s5-icon__i4.active').removeClass('active');
        $('.s5-bla1.active').removeClass('active');
        $('.s5-bla2').toggleClass('active');
        $('.s5-bla3.active').removeClass('active');
        $('.s5-bla4.active').removeClass('active');
    });
    $('.s5-icon__i2').click(function(){
        $('.s5-icon__i2').toggleClass('active');
        $('.s5-icon__i.active').removeClass('active');
        $('.s5-icon__i3.active').removeClass('active');
        $('.s5-icon__i4.active').removeClass('active');
        $('.s5-bla2.active').removeClass('active');
        $('.s5-bla1').toggleClass('active');
        $('.s5-bla3.active').removeClass('active');
        $('.s5-bla4.active').removeClass('active');
    });
    $('.s5-icon__i3').click(function(){
        $('.s5-icon__i3').toggleClass('active');
        $('.s5-icon__i2.active').removeClass('active');
        $('.s5-icon__i.active').removeClass('active');
        $('.s5-icon__i4.active').removeClass('active');
        $('.s5-bla1.active').removeClass('active');
        $('.s5-bla3').toggleClass('active');
        $('.s5-bla2.active').removeClass('active');
        $('.s5-bla4.active').removeClass('active');
    });
    $('.s5-icon__i4').click(function(){
        $('.s5-icon__i4').toggleClass('active');
        $('.s5-icon__i2.active').removeClass('active');
        $('.s5-icon__i3.active').removeClass('active');
        $('.s5-icon__i.active').removeClass('active');
        $('.s5-bla1.active').removeClass('active');
        $('.s5-bla4').toggleClass('active');
        $('.s5-bla3.active').removeClass('active');
        $('.s5-bla2.active').removeClass('active');
    });
        $('.s7__a1').addClass('active');
        $('.s7__a2.active').removeClass('active');
        $('.s7__a3.active').removeClass('active');
        $('.s7__a4.active').removeClass('active');
        $('.s7__a5.active').removeClass('active');
        $('.s7__a6.active').removeClass('active');
        $('.s7__a7.active').removeClass('active');
        $('.all-works').addClass('active');
        $('.print').addClass('active');
        $('.branding').addClass('active');
        $('.identity').addClass('active');
        $('.s7-web').addClass('active');
        $('.s7-html').addClass('active');
        $('.wordpress').addClass('active');
        
    $('.s7__a1').click(function(){
        $('.s7__a1').addClass('active');
        $('.s7__a2.active').removeClass('active');
        $('.s7__a3.active').removeClass('active');
        $('.s7__a4.active').removeClass('active');
        $('.s7__a5.active').removeClass('active');
        $('.s7__a6.active').removeClass('active');
        $('.s7__a7.active').removeClass('active');
        $('.all-works').addClass('active');
        $('.print').addClass('active');
        $('.branding').addClass('active');
        $('.identity').addClass('active');
        $('.s7-web').addClass('active');
        $('.s7-html').addClass('active');
        $('.wordpress').addClass('active');
        $('.wordpress__pos10.active').removeClass('active');
        $('.s7-web__pos9.active').removeClass('active');
        $('.print__pos8.active').removeClass('active');
        $('.s7-html__pos2.active').removeClass('active');
        $('.print__pos1.active').removeClass('active');
        $('.print.position').removeClass('position');
        $('.branding.position').removeClass('position');
        $('.identity.position').removeClass('position');
        $('.s7-web.position').removeClass('position');
        $('.s7-html.position').removeClass('position');
        $('.wordpress.position').removeClass('position');
    });
    $('.s7__a2').click(function(){
        $('.s7__a2').addClass('active');
        $('.s7__a1.active').removeClass('active');
        $('.s7__a3.active').removeClass('active');
        $('.s7__a4.active').removeClass('active');
        $('.s7__a5.active').removeClass('active');
        $('.s7__a6.active').removeClass('active');
        $('.s7__a7.active').removeClass('active');
        $('.print').addClass('active');
        $('.print').addClass('position');
        $('.all-works.active').removeClass('active');
        $('.print__pos8').addClass('active');
        $('.print__pos1').addClass('active');
        $('.branding.active').removeClass('active');
        $('.identity.active').removeClass('active');
        $('.s7-web.active').removeClass('active');
        $('.s7-html.active').removeClass('active');
        $('.wordpress.active').removeClass('active');
        $('.wordpress__pos10.active').removeClass('active');
        $('.s7-web__pos9.active').removeClass('active');
        $('.s7-html__pos2.active').removeClass('active');
        $('.branding.position').removeClass('position');
        $('.identity.position').removeClass('position');
        $('.s7-web.position').removeClass('position');
        $('.s7-html.position').removeClass('position');
        $('.wordpress.position').removeClass('position');
    });
    $('.s7__a3').click(function(){
        $('.s7__a3').addClass('active');
        $('.s7__a1.active').removeClass('active');
        $('.s7__a2.active').removeClass('active');
        $('.s7__a4.active').removeClass('active');
        $('.s7__a5.active').removeClass('active');
        $('.s7__a6.active').removeClass('active');
        $('.s7__a7.active').removeClass('active');
        $('.branding').addClass('active');
        $('.branding').addClass('position');
        $('.identity.active').removeClass('active');
        $('.print.active').removeClass('active');
        $('.s7-web.active').removeClass('active');
        $('.s7-html.active').removeClass('active');
        $('.wordpress.active').removeClass('active');
        $('.wordpress__pos10.active').removeClass('active');
        $('.s7-web__pos9.active').removeClass('active');
        $('.print__pos8.active').removeClass('active');
        $('.s7-html__pos2.active').removeClass('active');
        $('.print__pos1.active').removeClass('active');
        $('.all-works.active').removeClass('active');
        $('.print.position').removeClass('position');
        $('.identity.position').removeClass('position');
        $('.s7-web.position').removeClass('position');
        $('.s7-html.position').removeClass('position');
        $('.wordpress.position').removeClass('position');
    });
    $('.s7__a4').click(function(){
        $('.s7__a4').addClass('active');
        $('.s7__a1.active').removeClass('active');
        $('.s7__a2.active').removeClass('active');
        $('.s7__a3.active').removeClass('active');
        $('.s7__a5.active').removeClass('active');
        $('.s7__a6.active').removeClass('active');
        $('.s7__a7.active').removeClass('active');
        $('.identity').addClass('active');
        $('.identity').addClass('position');
        $('.branding.active').removeClass('active');
        $('.print.active').removeClass('active');
        $('.s7-web.active').removeClass('active');
        $('.s7-html.active').removeClass('active');
        $('.wordpress.active').removeClass('active');
        $('.wordpress__pos10.active').removeClass('active');
        $('.s7-web__pos9.active').removeClass('active');
        $('.print__pos8.active').removeClass('active');
        $('.s7-html__pos2.active').removeClass('active');
        $('.print__pos1.active').removeClass('active');
        $('.all-works.active').removeClass('active');
        $('.print.position').removeClass('position');
        $('.branding.position').removeClass('position');
        $('.s7-web.position').removeClass('position');
        $('.s7-html.position').removeClass('position');
        $('.wordpress.position').removeClass('position');
    });
    $('.s7__a5').click(function(){
        $('.s7__a5').addClass('active');
        $('.s7__a1.active').removeClass('active');
        $('.s7__a2.active').removeClass('active');
        $('.s7__a3.active').removeClass('active');
        $('.s7__a4.active').removeClass('active');
        $('.s7__a6.active').removeClass('active');
        $('.s7__a7.active').removeClass('active');
        $('.s7-web').addClass('active');
        $('.s7-web').addClass('position');
        $('.s7-web__pos9').addClass('active');
        $('.branding.active').removeClass('active');
        $('.print.active').removeClass('active');
        $('.identity.active').removeClass('active');
        $('.s7-html.active').removeClass('active');
        $('.wordpress.active').removeClass('active');
        $('.wordpress__pos10.active').removeClass('active');
        $('.print__pos8.active').removeClass('active');
        $('.s7-html__pos2.active').removeClass('active');
        $('.print__pos1.active').removeClass('active');
        $('.all-works.active').removeClass('active');
        $('.print.position').removeClass('position');
        $('.branding.position').removeClass('position');
        $('.identity.position').removeClass('position');
        $('.s7-html.position').removeClass('position');
        $('.wordpress.position').removeClass('position');
    });
    $('.s7__a6').click(function(){
        $('.s7__a6').addClass('active');
        $('.s7__a1.active').removeClass('active');
        $('.s7__a2.active').removeClass('active');
        $('.s7__a3.active').removeClass('active');
        $('.s7__a5.active').removeClass('active');
        $('.s7__a4.active').removeClass('active');
        $('.s7__a7.active').removeClass('active');
        $('.s7-html').addClass('active');
        $('.s7-html').addClass('position');
        $('.s7-html__pos2').addClass('active');
        $('.branding.active').removeClass('active');
        $('.print.active').removeClass('active');
        $('.identity.active').removeClass('active');
        $('.s7-web.active').removeClass('active');
        $('.wordpress.active').removeClass('active');
        $('.wordpress__pos10.active').removeClass('active');
        $('.s7-web__pos9.active').removeClass('active');
        $('.print__pos8.active').removeClass('active');
        $('.print__pos1.active').removeClass('active');
        $('.all-works.active').removeClass('active');
        $('.print.position').removeClass('position');
        $('.branding.position').removeClass('position');
        $('.identity.position').removeClass('position');
        $('.s7-web.position').removeClass('position');
        $('.wordpress.position').removeClass('position');
    });
    $('.s7__a7').click(function(){
        $('.s7__a7').addClass('active');
        $('.s7__a1.active').removeClass('active');
        $('.s7__a2.active').removeClass('active');
        $('.s7__a3.active').removeClass('active');
        $('.s7__a5.active').removeClass('active');
        $('.s7__a4.active').removeClass('active');
        $('.s7__a6.active').removeClass('active');
        $('.wordpress').addClass('active');
        $('.wordpress').addClass('position');
        $('.wordpress__pos10').addClass('active');
        $('.branding.active').removeClass('active');
        $('.print.active').removeClass('active');
        $('.identity.active').removeClass('active');
        $('.s7-web.active').removeClass('active');
        $('.s7-html.active').removeClass('active');
        $('.s7-web__pos9.active').removeClass('active');
        $('.print__pos8.active').removeClass('active');
        $('.s7-html__pos2.active').removeClass('active');
        $('.print__pos1.active').removeClass('active');
        $('.all-works.active').removeClass('active');
        $('.print.position').removeClass('position');
        $('.branding.position').removeClass('position');
        $('.identity.position').removeClass('position');
        $('.s7-web.position').removeClass('position');
        $('.s7-html.position').removeClass('position');
    });
    $('.map-s15-map.none-active').removeClass('none-active');
    $('.s-15__map2.active').removeClass('active');
    $('.s15-map__a').click(function(){
        $('.s-15__map2').addClass('active');
        $('.map-s15-map').addClass('none-active');
    });
});
var like1 = 0; var like9 = 0;
var like2 = 0; var like10 = 0;
var like3 = 0; var like11 = 0;
var like4 = 0; var like12 = 0;
var like5 = 0;
var like6 = 0;
var like7 = 0;
var like8 = 0;
$(document).ready(function(){
    $('.img-a12').click(function(){
        like12=1;
        localStorage.removeItem('like12');
        localStorage.setItem('like12', like12);
        $('.like12').addClass('active');
        $('.like-non12').addClass('active');
    });
    $('.img-a__like12').click(function(){
        like12=0;
        localStorage.removeItem('like12');
        localStorage.setItem('like12', like12);
        $('.like12.active').removeClass('active');
        $('.like-non12.active').removeClass('active');
    });
    
    $('.img-a11').click(function(){
        like11=1;
        localStorage.removeItem('like11');
        localStorage.setItem('like11', like11);
        $('.like11').addClass('active');
        $('.like-non11').addClass('active')
    });
    $('.img-a__like11').click(function(){
        like11=0;
        localStorage.removeItem('like11');
        localStorage.setItem('like11', like11);
        $('.like11.active').removeClass('active');
        $('.like-non11.active').removeClass('active')
    });
    $('.img-a10').click(function(){
        like10=1;
        localStorage.removeItem('like10');
        localStorage.setItem('like10', like10);
        $('.like10').addClass('active');
        $('.like-non10').addClass('active')
    });
    $('.img-a__like10').click(function(){
        like10=0;
        localStorage.removeItem('like10');
        localStorage.setItem('like10', like10);
        $('.like10.active').removeClass('active');
        $('.like-non10.active').removeClass('active')
    });
    $('.img-a9').click(function(){
        like9=1;
        localStorage.removeItem('like9');
        localStorage.setItem('like9', like9);
        $('.like9').addClass('active');
        $('.like-non9').addClass('active')
    });
    $('.img-a__like9').click(function(){
        like9=0;
        localStorage.removeItem('like9');
        localStorage.setItem('like9', like9);
        $('.like9.active').removeClass('active');
        $('.like-non9.active').removeClass('active')
    });
    $('.img-a8').click(function(){
        like8=1;
        localStorage.removeItem('like8');
        localStorage.setItem('like8', like8);
        $('.like8').addClass('active');
        $('.like-non8').addClass('active')
    });
    $('.img-a__like8').click(function(){
        like8=0;
        localStorage.removeItem('like8');
        localStorage.setItem('like8', like8);
        $('.like8.active').removeClass('active');
        $('.like-non8.active').removeClass('active')
    });
    $('.img-a7').click(function(){
        like7=1;
        localStorage.removeItem('like7');
        localStorage.setItem('like7', like7);
        $('.like7').addClass('active');
        $('.like-non7').addClass('active')
    });
    $('.img-a__like7').click(function(){
        like7=0;
        localStorage.removeItem('like7');
        localStorage.setItem('like7', like7);
        $('.like7.active').removeClass('active');
        $('.like-non7.active').removeClass('active')
    });
    $('.img-a6').click(function(){
        like6=1;
        localStorage.removeItem('like6');
        localStorage.setItem('like6', like6);
        $('.like6').addClass('active');
        $('.like-non6').addClass('active')
    });
    $('.img-a__like6').click(function(){
        like6=0;
        localStorage.removeItem('like6');
        localStorage.setItem('like6', like6);
        $('.like6.active').removeClass('active');
        $('.like-non6.active').removeClass('active')
    });
    $('.img-a5').click(function(){
        like5=1;
        localStorage.removeItem('like5');
        localStorage.setItem('like5', like5);
        $('.like5').addClass('active');
        $('.like-non5').addClass('active')
    });
    $('.img-a__like5').click(function(){
        like5=0;
        localStorage.removeItem('like5');
        localStorage.setItem('like5', like5);
        $('.like5.active').removeClass('active');
        $('.like-non5.active').removeClass('active')
    });
    $('.img-a4').click(function(){
        like4=1;
        localStorage.removeItem('like4');
        localStorage.setItem('like4', like4);
        $('.like4').addClass('active');
        $('.like-non4').addClass('active')
    });
    $('.img-a__like4').click(function(){
        like4=0;
        localStorage.removeItem('like4');
        localStorage.setItem('like4', like4);
        $('.like4.active').removeClass('active');
        $('.like-non4.active').removeClass('active')
    });
    $('.img-a3').click(function(){
        like3=1;
        localStorage.removeItem('like3');
        localStorage.setItem('like3', like3);
        $('.like3').addClass('active');
        $('.like-non3').addClass('active')
    });
    $('.img-a__like3').click(function(){
        like3=0;
        localStorage.removeItem('like3');
        localStorage.setItem('like3', like3);
        $('.like3.active').removeClass('active');
        $('.like-non3.active').removeClass('active')
    });
    $('.img-a2').click(function(){
        like2=1;
        localStorage.removeItem('like2');
        localStorage.setItem('like2', like2);
        $('.like2').addClass('active');
        $('.like-non2').addClass('active')
    });
    $('.img-a__like2').click(function(){
        like2=0;
        localStorage.removeItem('like2');
        localStorage.setItem('like2', like2);
        $('.like2.active').removeClass('active');
        $('.like-non2.active').removeClass('active')
    });
    $('.img-a1').click(function(){
        like1=1;
        localStorage.removeItem('like1');
        localStorage.setItem('like1', like1);
        $('.like1').addClass('active');
        $('.like-non1').addClass('active')
    });
    $('.img-a__like1').click(function(){
        like1=0;
        localStorage.removeItem('like1');
        localStorage.setItem('like1', like1);
        $('.like1.active').removeClass('active');
        $('.like-non1.active').removeClass('active')
    });
    $('.art__moree').click(function(){
        $('.all-article').addClass('active');
        $('.article-click1').addClass('none-active');
        $('.article-click2').addClass('active')
    });
    $('.art__moree2').click(function(){
        $('.all-article.active').removeClass('active');
        $('.article-click1.none-active').removeClass('none-active');
        $('.article-click2.active').removeClass('active')
    });
    $('.plusi-premium').addClass('active');
    $('.plusi-exclusiv.active').removeClass('active');
    $('.premium-name').addClass('active');
    $('.exclusiv-name.active').removeClass('active');
    $('.premium-name').click(function(){
        $('.plusi-premium').addClass('active');
        $('.premium-name').addClass('active');
        $('.exclusiv-name.active').removeClass('active');
        $('.plusi-exclusiv.active').removeClass('active');
    });
    $('.exclusiv-name').click(function(){
        $('.exclusiv-name').addClass('active');
        $('.premium-name.active').removeClass('active');
        $('.plusi-exclusiv').addClass('active');
        $('.plusi-premium.active').removeClass('active');
    });
    $('.s15-map__a').click(function(){
        $('.s15-map__bg').addClass('none-active');
    });
});

if(localStorage.getItem('like12')){
    var tempLike12 = localStorage.getItem('like12');
    if(tempLike12==1){
        $(document).ready(function(){
            $('.like12').addClass('active');
            $('.like-non12').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like12.active').removeClass('active');
            $('.like-non12.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like11')){
    var tempLike11 = localStorage.getItem('like11');
    if(tempLike11==1){
        $(document).ready(function(){
            $('.like11').addClass('active');
            $('.like-non11').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like11.active').removeClass('active');
            $('.like-non11.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like10')){
    var tempLike10 = localStorage.getItem('like10');
    if(tempLike10==1){
        $(document).ready(function(){
            $('.like10').addClass('active');
            $('.like-non10').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like10.active').removeClass('active');
            $('.like-non10.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like9')){
    var tempLike9 = localStorage.getItem('like9');
    if(tempLike9==1){
        $(document).ready(function(){
            $('.like9').addClass('active');
            $('.like-non9').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like9.active').removeClass('active');
            $('.like-non9.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like8')){
    var tempLike8 = localStorage.getItem('like8');
    if(tempLike8==1){
        $(document).ready(function(){
            $('.like8').addClass('active');
            $('.like-non8').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like8.active').removeClass('active');
            $('.like-non8.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like7')){
    var tempLike7 = localStorage.getItem('like7');
    if(tempLike7==1){
        $(document).ready(function(){
            $('.like7').addClass('active');
            $('.like-non7').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like7.active').removeClass('active');
            $('.like-non7.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like6')){
    var tempLike6 = localStorage.getItem('like6');
    if(tempLike6==1){
        $(document).ready(function(){
            $('.like6').addClass('active');
            $('.like-non6').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like6.active').removeClass('active');
            $('.like-non6.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like5')){
    var tempLike5 = localStorage.getItem('like5');
    if(tempLike5==1){
        $(document).ready(function(){
            $('.like5').addClass('active');
            $('.like-non5').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like5.active').removeClass('active');
            $('.like-non5.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like4')){
    var tempLike4 = localStorage.getItem('like4');
    if(tempLike4==1){
        $(document).ready(function(){
            $('.like4').addClass('active');
            $('.like-non4').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like4.active').removeClass('active');
            $('.like-non4.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like3')){
    var tempLike3 = localStorage.getItem('like3');
    if(tempLike3==1){
        $(document).ready(function(){
            $('.like3').addClass('active');
            $('.like-non3').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like3.active').removeClass('active');
            $('.like-non3.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like2')){
    var tempLike2 = localStorage.getItem('like2');
    if(tempLike2==1){
        $(document).ready(function(){
            $('.like2').addClass('active');
            $('.like-non2').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like2.active').removeClass('active');
            $('.like-non2.active').removeClass('active');
        });
    }
}
if(localStorage.getItem('like1')){
    var tempLike1 = localStorage.getItem('like1');
    if(tempLike1==1){
        $(document).ready(function(){
            $('.like1').addClass('active');
            $('.like-non1').addClass('active');
        });
    }
    else{
        $(document).ready(function(){
            $('.like1.active').removeClass('active');
            $('.like-non1.active').removeClass('active');
        });
    }
}

$(document).ready(function(){
    $('#s14-form').submit(function(){
        var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
    });
});
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots: true,
        slidesToShow: 1,
        //кол-во слайдов пролистываемое
        slidesToScroll: 1,
        //скорость пролистывания слайда
        speed: 2500,
        autoplay: true,
        //скорость автопролистывания
        autoplaySpeed: 2500
    });
});
$(document).ready(function(){
    $('.slider2').slick({
        arrows:false,
        dots: true,
        slidesToShow: 1,
        //кол-во слайдов пролистываемое
        slidesToScroll: 1,
        //скорость пролистывания слайда
        speed: 2500,
        autoplay: true,
        //скорость автопролистывания
        autoplaySpeed: 2500
    });
});
$(document).ready(function(){
    $('.slider3').slick({
        arrows:false,
        dots: true,
        slidesToShow: 1,
        //кол-во слайдов пролистываемое
        slidesToScroll: 1,
        //скорость пролистывания слайда
        speed: 1500
    });
});
