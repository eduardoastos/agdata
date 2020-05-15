(function (initCode) {
    initCode(window.jQuery, window, document);
}
    (function ($, window, document) {
        $(function () {

            // Âncoras de Navegação do menu Versão Desktop 
            $(".navigation-desktop__links p, .navigation-desktop__links button, .home__desktop--button, .home__mobile--button").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
            })

            // Âncora de Retorno ao topo do Site
            $("#arrow-to-top").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
            })

            // --------> // Menu Responsivo <--------

            // Âncoras de Navegação do menu Versão Mobile
            $(".navigation-mobile__menu--links li a").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
                $(".navigation-mobile").removeClass("active");
                $(".menu-hamburguer").removeClass("disabled");
            })

            //Os 2 próximos trechos de código podem ser feitos em um único trecho <---------------
            // Botão para Abrir menu
            $("#button-mobile").click(function () {
                $(".navigation-mobile").addClass("active");
                $(".menu-hamburguer").addClass("disabled");
                event.stopPropagation();
            });
                
            // Botão para Fechar menu
            $("#button-mobile-closed").click(function () {
                $(".navigation-mobile").removeClass("active");
                $(".menu-hamburguer").removeClass("disabled");
            })

            // Botão para Abrir menu
            $(".navigation-mobile").click(function () {
                $(".navigation-mobile").removeClass("active");
                $(".menu-hamburguer").removeClass("disabled");
                event.stopPropagation();
            })

            // Impede que o evento de click fora do menu se progague pelos elementos filhos no DOM, suprimindo o evento de fechar.
            $(".navigation-mobile__menu").click(function () {
                console.log("Click!");  
                event.stopPropagation();
            })


            // Fecha o Menu e a Janela de vídeo, caso ocorra click fora de algum dos dois quando ativos.
            $(document).click(function () {
                // $(".navigation-mobile").removeClass("active");
                // $(".menu-hamburguer").removeClass("disabled");
                $("#m_video-play").removeClass("video-play").addClass("disabled");
                $("#m_quinta-sessao").removeClass("disabled").addClass("quinta-sessao");
                $("#m_quinta-sessao-desktop").removeClass("disabled").addClass("quinta-sessao-desk");
            })
            

            // Alterna entre a exibição do vídeo e da seção na Versão Mobile.
            $("#play_video, #control-img-play-mobile").click(function(){
                $("#m_video-play").removeClass("disabled").addClass("video-play");
                $("#m_quinta-sessao").removeClass("quinta-sessao").addClass("disabled");
                $(".video-play-intern").attr("controls", "true");  
                event.stopPropagation();
                $(".video-play-intern").on('ended',function(){
                        $("#m_video-play").removeClass("video-play").addClass("disabled");
                        $("#m_quinta-sessao").removeClass("disabled").addClass("quinta-sessao");
                })              
            })

            // Alterna entre a exibição do vídeo e da seção na Versão Desktop.
            $("#play_video-desktop, #control-img-play-desktop").click(function(){
                $("#m_video-play").removeClass("disabled").addClass("video-play");
                $("#m_quinta-sessao-desktop").removeClass("quinta-sessao-desk").addClass("disabled");
                $(".video-play-intern").attr("controls", "true");  
                event.stopPropagation();
                $(".video-play-intern").on('ended',function(){
                        $("#m_video-play").removeClass("video-play").addClass("disabled");
                        $("#m_quinta-sessao-desktop").removeClass("disabled").addClass("quinta-sessao-desk");
                })              
            })

            // Navegação nos carousels através do deslize na Versão Mobile (Swipe Touch JS)
            $("#carousel-example-generic00, #carousel-example-generic4, #carousel-example-generic2").swipe( {
                swipe:function(event, direction, distance, duration, fingerCount, fingerData) {    
                    if(direction=='left'){
                        $(this).carousel('next');
                    }else if(direction=='right'){
                        $(this).carousel('prev');
                    }    
                }
            });     
           
            //Aqui dá pra usar sim o switch. Todos os ifs podem ser substituídos por switch  <------------
            // Inicio da Navegação por sessões e Animações            
            $.scrollify({
                section: ".sessao",
                InterstitialSection: ".sessao, .footer",
                scrollSpeed: 200,
                setHeights: false,
                before: function (section) {   
                    
                    // Controle de Navegação da Primeira Seção
                    if (section === 0) {                        
                        $("#arrow-to-top").removeClass("arrow__up").addClass("disabled");
                        // $("#m-logo-mobile").removeClass("disabled").addClass("navigation-desktop__logo-mobile");
                        $("#m-logo-desktop").removeClass("disabled").addClass("navigation-desktop__logo-desktop");
                        $("#m-icon-shop").removeClass("disabled").addClass("navigation-desktop__shop--img");
                        $(".m-paragraph-home").removeClass("disabled").addClass("home__desktop--paragraph");
                        $(".m-paragraph-home-mobile").removeClass("disabled").addClass("home__mobile--paragraph");
                        $("#m-title-home-mobile").removeClass("disabled").addClass("home__mobile--tile");
                        $("#m-title-home-desktop").removeClass("disabled").addClass("home__desktop--title");
                        $(".m-button-desktop").removeClass("disabled").addClass("home__desktop--button");
                        $(".m-button-mobile").removeClass("disabled").addClass("home__mobile--button");
                        $(".m-facebook").removeClass("disabled").addClass("facebook");
                        $(".m-instagram").removeClass("disabled").addClass("instagram");
                        $(".m-youtube").removeClass("disabled").addClass("youtube");
                        $(".m-linkedin").removeClass("disabled").addClass("linkedin");
                        $(".m-twitter").removeClass("disabled").addClass("twitter");
                        $("#m-agency").removeClass("disabled").addClass("navigation-desktop__links--agency");
                        $("#m-video").removeClass("disabled").addClass("navigation-desktop__links--video");
                        $("#m-services").removeClass("disabled").addClass("navigation-desktop__links--services");
                        $("#m-technology").removeClass("disabled").addClass("navigation-desktop__links--technology");
                        $("#m-contact").removeClass("disabled").addClass("navigation-desktop__links--contact-button");
                    } else {
                        $("#arrow-to-top").removeClass("disabled").addClass("arrow__up");
                        // $("#m-logo-mobile").removeClass("navigation-desktop__logo-mobile").addClass("disabled");
                        $("#m-logo-desktop").removeClass("navigation-desktop__logo-desktop").addClass("disabled");
                        $("#m-icon-shop").removeClass("navigation-desktop__shop--img").addClass("disabled");
                        $(".m-paragraph-home").removeClass("home__desktop--paragraph").addClass("disabled");
                        $(".m-paragraph-home-mobile").removeClass("home__mobile--paragraph").addClass("disabled");
                        $("#m-title-home-mobile").removeClass("home__mobile--tile").addClass("disabled");
                        $("#m-title-home-desktop").removeClass("home__desktop--title").addClass("disabled");                        
                        $(".m-button-desktop").removeClass("home__desktop--button").addClass("disabled");
                        $(".m-button-mobile").removeClass("home__mobile--button").addClass("disabled");
                        $(".m-facebook").removeClass("facebook").addClass("disabled");
                        $(".m-instagram").removeClass("instagram").addClass("disabled");
                        $(".m-youtube").removeClass("youtube").addClass("disabled");
                        $(".m-linkedin").removeClass("linkedin").addClass("disabled");
                        $(".m-twitter").removeClass("twitter").addClass("disabled");
                        $("#m-agency").removeClass("navigation-desktop__links--agency").addClass("disabled");
                        $("#m-video").removeClass("navigation-desktop__links--video").addClass("disabled");
                        $("#m-services").removeClass("navigation-desktop__links--services").addClass("disabled");
                        $("#m-technology").removeClass("navigation-desktop__links--technology").addClass("disabled");
                        $("#m-contact").removeClass("navigation-desktop__links--contact-button").addClass("disabled");
                    }

                    // Controle de Navegação da Segunda Seção
                    if (section === 1) {                        
                        $("#control-one-desk-div").removeClass("disabled").addClass("about-desktop__div-one");
                        $("#control-two-desk-div").removeClass("disabled").addClass("about-desktop__div-two");
                        $("#control-three-desk-div").removeClass("disabled").addClass("about-desktop__div-three");
                        $("#control-four-desk-div").removeClass("disabled").addClass("about-desktop__div-four");
                        $("#control-image-about-desktop").removeClass("disabled").addClass("about__image-desktop");
                        $("#control-image-about-mobile").removeClass("disabled").addClass("about-mobile__image");
                        $("#control-div-one-mobile").removeClass("disabled").addClass("about-mobile__div-intern");                        
                        $("#control-div-two-mobile").removeClass("disabled").addClass("about-mobile__div-intern--two");                        
                        $("#control-div-three-mobile").removeClass("disabled").addClass("about-mobile__div-intern--three");                        
                        $("#control-div-four-mobile").removeClass("disabled").addClass("about-mobile__div-intern--four");                         
                        $("#control-about-div-intern-one").removeClass("disabled").addClass("about-mobile__div-intern__one");
                        $("#control-about-div-intern-two").removeClass("disabled").addClass("about-mobile__div-intern__two");     
                        $("#control-content-about").removeClass("disabled").addClass("about__top-text");
                    } else {
                        $("#control-one-desk-div").removeClass("about-desktop__div-one").addClass("disabled");
                        $("#control-two-desk-div").removeClass("about-desktop__div-two").addClass("disabled");
                        $("#control-three-desk-div").removeClass("about-desktop__div-three").addClass("disabled");
                        $("#control-four-desk-div").removeClass("about-desktop__div-four").addClass("disabled");
                        $("#control-image-about-desktop").removeClass("about__image-desktop").addClass("disabled");
                        $("#control-image-about-mobile").removeClass("about-mobile__image").addClass("disabled");
                        $("#control-div-one-mobile").removeClass("about-mobile__div-intern").addClass("disabled");                        
                        $("#control-div-two-mobile").removeClass("about-mobile__div-intern--two").addClass("disabled");                        
                        $("#control-div-three-mobile").removeClass("about-mobile__div-intern--three").addClass("disabled");                        
                        $("#control-div-four-mobile").removeClass("about-mobile__div-intern--four").addClass("disabled"); 
                        $("#control-about-div-intern-one").removeClass("about-mobile__div-intern__one").addClass("disabled");
                        $("#control-about-div-intern-two").removeClass("about-mobile__div-intern__two").addClass("disabled"); 
                        $("#control-content-about").removeClass("about__top-text").addClass("disabled");
                    }

                    // Controle de Navegação da Terceira Seção
                    if (section === 2) {                        
                        $(".controladorbox1").removeClass("disabled").addClass("design-desktop__extern-first--box-one");
                        $(".controladorbox2").removeClass("disabled").addClass("design-desktop__extern-first--box-two");
                        $(".controladorbox3").removeClass("disabled").addClass("design-desktop__extern-first--box-three");

                        // Primeiro Contador
                        var max_number = 5000000;

                        var padding_zeros = '';
                        for (var i = 0, l = max_number.toString().length; i < l; i++) {
                            padding_zeros += '0';
                        }

                        var padded_now, numberStep = function (now, tween) {
                            var target = $(tween.elem),
                                rounded_now = Math.round(now);

                            var rounded_now_string = rounded_now.toString()
                            padded_now = padding_zeros + rounded_now_string;
                            padded_now = padded_now.substring(rounded_now_string.length);

                            target.prop('number2', rounded_now).text(padded_now);
                        };

                        var use_max_power = $('');
                        $('#titulo-contador1').ready(function () {
                            $('#titulo-contador1').animateNumber({
                                number: max_number,
                                numberStep: numberStep
                            }, 2000);
                        });
                        $('#titulo-contador1-desk').ready(function () {
                            $('#titulo-contador1-desk').animateNumber({
                                number: max_number,
                                numberStep: numberStep
                            }, 2000);
                        });

                        //   Segundo Contador
                        var max_number2 = 2600;

                        var padding_zeros2 = '';
                        for (var j = 0, n = max_number2.toString().length; j < n; j++) {
                            padding_zeros2 += '0';
                        }

                        var padded_now2, numberStep2 = function (now2, tween2) {
                            var target = $(tween2.elem),
                                rounded_now2 = Math.round(now2);

                            var rounded_now_string2 = rounded_now2.toString()
                            padded_now2 = padding_zeros2 + rounded_now_string2;
                            padded_now2 = padded_now2.substring(rounded_now_string2.length);

                            target.prop('number2', rounded_now2).text(padded_now2);
                        };

                        var use_max_power2 = $('');
                        $('#titulo-contador2').ready(function () {
                            $('#titulo-contador2').animateNumber({
                                number: max_number2,
                                numberStep2: numberStep
                            }, 2000);
                        });
                        $('#titulo-contador2-desk').ready(function () {
                            $('#titulo-contador2-desk').animateNumber({
                                number: max_number2,
                                numberStep2: numberStep
                            }, 2000);
                        });

                        //   Terceiro Contador
                        var max_number3 = 300000;

                        var padding_zeros3 = '';
                        for (var k = 0, m = max_number2.toString().length; k < m; k++) {
                            padding_zeros3 += '0';
                        }

                        var padded_now3, numberStep2 = function (now3, tween3) {
                            var target = $(tween3.elem),
                                rounded_now3 = Math.round(now3);

                            var rounded_now_string3 = rounded_now3.toString()
                            padded_now3 = padding_zeros3 + rounded_now_string3;
                            padded_now3 = padded_now3.substring(rounded_now_string3.length);

                            target.prop('number2', rounded_now3).text(padded_now3);
                        };

                        var use_max_power3 = $('');
                        $('#titulo-contador3').ready(function () {
                            $('#titulo-contador3').animateNumber({
                                number: max_number3,
                                numberStep3: numberStep
                            }, 2000);
                        });

                    } else {
                        $(".controladorbox1").removeClass("design-desktop__extern-first--box-one").addClass("disabled");
                        $(".controladorbox2").removeClass("design-desktop__extern-first--box-two").addClass("disabled");
                        $(".controladorbox3").removeClass("design-desktop__extern-first--box-three").addClass("disabled");
                    }

                    // Controle de Navegação da Quarta Seção
                    if (section === 3) {                        
                        $(".control-h1-section-4").removeClass("disabled").addClass("titulo-quarta-sessao-desk");
                        $(".control-p-section-4").removeClass("disabled").addClass("p-quarta-sessao-desk");
                        $(".control-img-section-4").removeClass("disabled").addClass("imagem-quarta-sessao-desk-intern");
                        $(".bar1").animate({
                            width: "90%"
                        }, 2000);
                        $(".bar2").animate({
                            width: "77%"
                        }, 2000);
                        $(".bar3").animate({
                            width: "63%"
                        }, 2000);
                        $(".bar4").animate({
                            width: "45%"
                        }, 2000);
                        $("#control-titulo-sessao").removeClass("disabled").addClass("titulo-quarta-sessao");
                        $("#control-p-sessao").removeClass("disabled").addClass("p-quarta-sessao");
                    } else {
                        $(".manipulador04").removeClass("quarta-opcao").addClass("disabled");
                        $(".control-h1-section-4").removeClass("titulo-quarta-sessao-desk").addClass("disabled");
                        $(".control-p-section-4").removeClass("p-quarta-sessao-desk").addClass("disabled");
                        $(".control-img-section-4").removeClass("imagem-quarta-sessao-desk-intern").addClass("disabled");
                        $(".bar1").animate({
                            width: "0%"
                        }, 10);
                        $(".bar2").animate({
                            width: "0%"
                        }, 10);
                        $(".bar3").animate({
                            width: "0%"
                        }, 10);
                        $(".bar4").animate({
                            width: "0%"
                        }, 10);
                        $("#control-titulo-sessao").removeClass("titulo-quarta-sessao").addClass("disabled");
                        $("#control-p-sessao").removeClass("p-quarta-sessao").addClass("disabled");
                    }

                    // Controle de Navegação da Quinta Seção
                    if (section === 4) {                        
                        $(".manipulador05").removeClass("disabled").addClass("quinta-opcao");
                        $(".control-p-section-5").removeClass("disabled").addClass("p-quinta-sessao-desk");
                        $(".control-h3-section-5").removeClass("disabled").addClass("h3-quinta-sessao-desk");
                        $(".control-button-section-5").removeClass("disabled").addClass("button-quinta-sessao-desk");
                        $(".control-img-play").removeClass("disabled").addClass("img-play");
                        $("#control-img-play-mobile").removeClass("disabled").addClass("img-play-mobile");
                        $("#control-h3-quinta-sessao").removeClass("disabled").addClass("h3-quinta-sessao");
                        $("#control-p-quinta-sessao").removeClass("disabled").addClass("p-quinta-sessao");
                        $("#play_video").removeClass("disabled").addClass("button-quinta-sessao");                        
                    } else {
                        $(".manipulador05").removeClass("quinta-opcao").addClass("disabled");
                        $(".control-p-section-5").removeClass("p-quinta-sessao-desk").addClass("disabled");
                        $(".control-h3-section-5").removeClass("h3-quinta-sessao-desk").addClass("disabled");
                        $(".control-button-section-5").removeClass("button-quinta-sessao-desk").addClass("disabled");
                        $(".control-img-play").removeClass("img-play").addClass("disabled");
                        $("#control-img-play-mobile").removeClass("img-play-mobile").addClass("disabled");
                        $("#control-h3-quinta-sessao").removeClass("h3-quinta-sessao").addClass("disabled");
                        $("#control-p-quinta-sessao").removeClass("p-quinta-sessao").addClass("disabled");
                        $("#play_video").removeClass("button-quinta-sessao").addClass("disabled");
                    }

                    // Controle de Navegação da Sexta Seção
                    if (section === 5) {
                        $("#m-animate-one-our").removeClass("disabled").addClass("first-animated-our");
                        $("#m-animate-two-our").removeClass("disabled").addClass("second-animated-our");
                        $("#m-animate-three-our").removeClass("disabled").addClass("third-animated-our");
                        $("#m-animate-four-our").removeClass("disabled").addClass("fourth-animated-our");
                        $("#m-animate-five-our").removeClass("disabled").addClass("fifth-animated-our");
                        $("#m-animate-six-our").removeClass("disabled").addClass("sixth-animated-our");
                        $("#m-animate-h2-our").removeClass("disabled").addClass("h2-sexta-sessao");
                        $("#m-animate-h1-our").removeClass("disabled").addClass("h1-sexta-sessao-desk");
                        $("#m-animate-img-our").removeClass("disabled").addClass("img-sexta-sessao-desk");                      
                        $("#control-h2-sexta-sessao").removeClass("disabled").addClass("h2-sexta-sessao");
                        $("#control-h1-sexta-sessao").removeClass("disabled").addClass("h1-sexta-sessao");
                        $("#control-animation-one").removeClass("disabled").addClass("animation__one");
                        $("#control-animation-two").removeClass("disabled").addClass("animation__two");
                        $("#control-animation-three").removeClass("disabled").addClass("animation__three");
                        $("#control-animation-four").removeClass("disabled").addClass("animation__four");
                        $("#control-animation-five").removeClass("disabled").addClass("animation__five");
                    } else {
                        $("#m-animate-one-our").removeClass("first-animated-our").addClass("disabled");
                        $("#m-animate-two-our").removeClass("second-animated-our").addClass("disabled");
                        $("#m-animate-three-our").removeClass("third-animated-our").addClass("disabled");
                        $("#m-animate-four-our").removeClass("fourth-animated-our").addClass("disabled");
                        $("#m-animate-five-our").removeClass("fifth-animated-our").addClass("disabled");
                        $("#m-animate-six-our").removeClass("sixth-animated-our").addClass("disabled");
                        $("#m-animate-h2-our").removeClass("h2-sexta-sessao").addClass("disabled");
                        $("#m-animate-h1-our").removeClass("h1-sexta-sessao-desk").addClass("disabled");
                        $("#m-animate-img-our").removeClass("img-sexta-sessao-desk").addClass("disabled");
                        $("#control-h2-sexta-sessao").removeClass("h2-sexta-sessao").addClass("disabled");
                        $("#control-h1-sexta-sessao").removeClass("h1-sexta-sessao").addClass("disabled");
                        $("#control-animation-one").removeClass("animation__one").addClass("disabled");
                        $("#control-animation-two").removeClass("animation__two").addClass("disabled");
                        $("#control-animation-three").removeClass("animation__three").addClass("disabled");
                        $("#control-animation-four").removeClass("animation__four").addClass("disabled");
                        $("#control-animation-five").removeClass("animation__five").addClass("disabled");
                    }                    
                }
            });
        })
    }));


