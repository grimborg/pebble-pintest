var API_ROOT = 'https://grimborg-pinserver.herokuapp.com';

var sendToken = function (token) {
    var request = new XMLHttpRequest();
    request.open('GET', API_ROOT + '/subscribe/' + token, true);
    request.onload = function () {
        console.log('sent token. response: ' + request.responseText);
    };
    request.send();
};

var doTimeline = function () {
    Pebble.getTimelineToken(function (token) {
        sendToken(token);
    }, function (error) {
        console.log('Error getting the timeline token: ' + error);
    });
};

Pebble.addEventListener('ready', function () {
    doTimeline();
});


