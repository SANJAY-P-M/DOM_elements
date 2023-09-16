function changeNext(){
    var image =  document.getElementById("image");
    var imagePath = image.src;
    var previousNumber = imagePath[imagePath.length - 5];
    let number  = Math.floor(Math.random() * 5) + 1;
    image.src = 'images/hand-cricket'+number+'.png';
    var scoreRecoder = document.getElementById('scoreRecorder');
    console.log(scoreRecoder.childNodes);
}
function reset(){
    document.getElementById('image').src = 'images/hand-cricket0.png';
}