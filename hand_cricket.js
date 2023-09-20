import Queue from './Queue.js'

const queueForCricket = new Queue();
let interval;
// This method will be called when we click "---THROW NEXT---" button
window.changeNext = function changeNext(){
    // Since this function is in module scope when I called in onclick it shows an error 
    // To change this to global scope explicitly I used window 

    // making it throw numbers with specific interval
    interval = setInterval(() => {
        const image =  document.getElementById("image");
    
        // Got Score with file name
        const previousScore = image.src[image.src.length - 5];
        
        // Updating total score
        const sumElement = document.getElementById('sum');
        const currentScore = parseInt(sumElement.textContent);
        sumElement.textContent =currentScore +  parseInt(previousScore);
    
        console.log(queueForCricket.queueLength());
        if(queueForCricket.queueLength() == 6){
            queueForCricket.dequeue();
            queueForCricket.enqueue(previousScore);
        }else{
            queueForCricket.enqueue(previousScore);
        }
    
        // updating image with random numbers
        const number  = Math.floor(Math.random() * 6) + 1;
        image.src = 'images/hand-cricket'+number+'.png';
    
        // updating scoreRecorder
        const scoreRecorder = document.getElementById('scoreRecorder');
        scoreRecorder.textContent = '';
        queueForCricket.forEachElements((element) => {
            const scoreCard = document.createElement('div');
            scoreCard.className = 'score';
            scoreCard.innerText = element;
            scoreRecorder.appendChild(scoreCard);
        });
    }, 2000);
}

// This method will be called when we click "---RESET---" button
window.reset = function reset(){
    scoreRecorder.textContent = '';
    document.getElementById('image').src = 'images/hand-cricket0.png';
    document.getElementById('sum').textContent = 0;
    
    // clear Interval and queue
    clearInterval(interval);
    queueForCricket.clear();
}