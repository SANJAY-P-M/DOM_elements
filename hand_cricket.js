import Queue from './Queue.js'

var queueForCricket = new Queue();

// This method will be called when we click "---THROW NEXT---" button
window.changeNext = function changeNext(){
    // Since this function is in module scope when I called in onclick it shows an error 
    // To change this to global scope explicitly I used window 
    let image =  document.getElementById("image");

    // Got Score with file name
    let previousScore = image.src[image.src.length - 5];
    console.log(queueForCricket.queueLength());
    if(queueForCricket.queueLength() == 6){
        queueForCricket.dequeue();
        queueForCricket.enqueue(previousScore);
    }else{
        queueForCricket.enqueue(previousScore);
    }

    // updating image with random numbers
    let number  = Math.floor(Math.random() * 5) + 1;
    image.src = 'images/hand-cricket'+number+'.png';

    // updating scoreRecorder
    let scoreRecorder = document.getElementById('scoreRecorder');
    while (scoreRecorder.firstChild) {
        scoreRecorder.removeChild(scoreRecorder.firstChild);
    }
    queueForCricket.forEachElements((element) => {
        let scoreCard = document.createElement('div');
        scoreCard.className = 'score';
        scoreCard.innerText = element;
        scoreRecorder.appendChild(scoreCard);
    });
}

// This method will be called when we click "---RESET---" button
window.reset = function reset(){
    while (scoreRecorder.firstChild) {
        scoreRecorder.removeChild(scoreRecorder.firstChild);
    }
    document.getElementById('image').src = 'images/hand-cricket0.png';
}