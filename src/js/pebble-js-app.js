API_ROOT = 'http://192.168.0.32:8000'
Pebble.addEventListener('ready', function () {
    doTimeline();
});

var doTimeline = function () {
    Pebble.getTimelineToken(function (token) {
        sendToken(token);
    }, function (error) {
        console.log('Error getting the timeline token: ' + error);
    });
};

var sendToken = function (token) {
    var request = new XMLHttpRequest();
    request.open('GET', API_ROOT + '/subscribe/' + token, true);
    request.onload = function () {
        console.log('sent token. response: ' + request.responseText);
    };
    request.send();
};
