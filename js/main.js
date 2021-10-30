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

// pausebutton
$('#pause').click(function(){
    audio.pause();
	$('#pause').hide();
	$('#play').show();
});

// stopbuttton
$('#stop').click(function(){
    audio.pause();
    audio.currentTime = 0;
	$('#pause').hide();
	$('#play').show();
    $('#duration').fadeOut(400);
});


// time duration
function showDuration() {
    $(audio).bind('timeupdate', function(){
        // get hours and minutes
        var s = parseInt(audio.currentTime % 60);
        var m = parseInt((audio.currentTime) / 60) % 60;

        //  add 0 if less thean 10
        if(a < 10){
            s = '0' + s;
        }
        $('#duration')/html(m + '.' + s);
        var value = 0;
        if(audio.currentTime > 0){
            value = Math.floor((100 / audio.duration) * audio.currentTime);
        }

        $()
    })
}