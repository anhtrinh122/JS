var today = new Date();
var hourNow = today.getHours();
var minutesNow = today.getMinutes();
var greeting;

if (hourNow < 12) {
    greeting = 'Chào buổi sáng';
    className = 'morning';
}
else if(hourNow < 18) {
    greeting = 'Chào buổi chiều';
    className = 'afternoon';
}
else {
    greeting = 'Chào buổi tối';
    className = 'evening';
}

document.write('<h2>' + greeting + '</h2>');
document.write('<h2>' + hourNow + ':' + minutesNow + '</h2>');
var greetingElement = document.getElementById('greeting');
greetingElement.className = className;