$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var mail = $('#mail');
    var heart = $('#heart');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    heart.click( function() {
        close();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
        mail.addClass('slide').removeClass("no-slide");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
        mail.addClass('no-slide').removeClass('slide')
    }
   
});