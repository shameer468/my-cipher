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
    var vdoCipherCode = '<iframe src="https://player.vdocipher.com/v2/?otp=20160313versASE3232AbEdJtrAeYZiYjc1xBZKNXoQ65UibdvnPKIdJHMfvfzGl&playbackInfo=eyJ2aWRlb0lkIjoiOWExYTQyYjA1MDhhNDg2MzhkMjc4NDc3NjQwZWJiM2QifQ==" style="border:0;height:360px;width:640px;max-width:100%" allowFullScreen="true" allow="encrypted-media"></iframe>';
    
    // Container mein daalo
    $('#videoContainer').html(vdoCipherCode);
    
});
    // Console message
    console.log('jQuery kaam kar raha hai!');
});