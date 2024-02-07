var myHeading = document.querySelector('h1');
myHeading.textContent = 'Dream Shop';
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/two.jpg') {
        myImage.setAttribute('src', 'image/one.jpg');
    } else {
        myImage.setAttribute('src', 'image/two.jpg');
    }
};
