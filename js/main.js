// JavaScript principal con jQuery
$(document).ready(function() {
    console.log('Portafolio cargado');
    
    // Smooth scrolling para los enlaces de navegación
    $('.navbar-nav .nav-link').on('click', function(e) {
        const target = $(this).attr('href');
        if (target.startsWith('#')) {
            e.preventDefault();
            const targetSection = $(target);
            if (targetSection.length) {
                $('html, body').animate({
                    scrollTop: targetSection.offset().top - 70
                }, 800);
            }
        }
    });
    
    // Animación de aparición al hacer scroll
    $(window).on('scroll', function() {
        $('.skill-card, .interest-item, .contact-item').each(function() {
            const elementTop = $(this).offset().top;
            const windowTop = $(window).scrollTop();
            const windowHeight = $(window).height();
            
            if (elementTop < windowTop + windowHeight - 100) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
    
    // Inicializar elementos con opacidad 0 para animación
    $('.skill-card, .interest-item, .contact-item').css('opacity', '0');
    
    // Efecto hover en botones
    $('.hero-btn').on('mouseenter', function() {
        $(this).css('transform', 'translateY(-3px)');
    }).on('mouseleave', function() {
        $(this).css('transform', 'translateY(0)');
    });
});