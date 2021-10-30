var audio;

// hide the pause button

$('#pause').hide();

// initalize audio
initAudio($('#playlist li:first-child'));

// initializer function
function initAudio(element){
	var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

    // create audio object
    audio = new Audio('media/' + song);

    if(!audio.currentTime){
		$('#duration').html('0.00');
	}

    $('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);

    // insert the cover image

    $('img.cover').attr('src','images/covers/' + cover);
    

    $('#playlist li').removeClass('active');
    element.addClass('active')
}

// playbutton
$('#play').click(function(){
    audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});