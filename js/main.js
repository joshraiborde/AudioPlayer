var audio;



$('#pause').hide()

function initAudio(element) {
    var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = elment.attr('artist');

    
    audio = new Audio('media/' + song);

    if(!audio.currentTime){
        $('#duration').html('0.00');
    }

    $('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);

    

    ${'img.cover'}.attr('src','img/covers/'+ cover);
}