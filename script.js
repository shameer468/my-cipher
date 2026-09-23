$(document).ready(function() {
    
    // Button click par message dikhana
    $('#myBtn').click(function() {
        $('#message').text('Aapne button click kar diya! 🎉');
        $('#message').css('color', 'green');
    });
    
    // Nav link click par smooth scroll
    $('nav a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
    $(document).ready(function() {
    
    // Naya VdoCipher embed code
    
    // Container mein daalo
    $('#videoContainer').html(vdoCipherCode);
    
});
    // Console message
    console.log('jQuery kaam kar raha hai!');
});
