var screenTimestamps = [];
var clipTimestamps = [];
var vid = null;

var selected = 0;

$('.clickable.choice').click(function() {
    if (selected < 3) {
        selected++;
        var currSelect = "#select" + selected;
        $(this).children().clone().appendTo(currSelect);
        $(currSelect).removeClass('half');
    }
})

function setTime(ele, sec) {
    ele[0].currentTime = sec;
}

function endVideo() {
    // console.log($('#videoPlayer')[0].currentTime);
    $('#overlay').show();
    // console.log(screenTimestamps);
    // console.log(clipTimestamps);
}

$('#saveScreen').click(function() {
    console.log(vid.currentTime());
    screenTimestamps.push(startTime = vid.currentTime());
})

$('#saveClip').click(function() {
    console.log(vid.currentTime());
    clipTimestamps.push(startTime = vid.currentTime());
})

$('#vidOn').click(function() {
    $('#caps').hide();
    $('#vids').show();
})

$('#capOn').click(function() {
    $('#vids').hide();
    $('#caps').show();
})

$('#mainImg').click(function() {
    $('#mainImg').hide();
    vid.play();
})

$('#shareButton').click(function() {
    $('#scoreboardImg').show();
})

videojs("videoPlayer").ready(function() {
    vid = this;

    vid.on("ended", endVideo);
});