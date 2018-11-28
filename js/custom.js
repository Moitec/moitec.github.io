$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7051978300',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '7051978300.1677ed0.9814b42d4b13475fa71b58d71fcb972c',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});