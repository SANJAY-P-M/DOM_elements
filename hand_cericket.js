import Queue from './Queue'

var queue = new Queue();

// This method will be called when we click "---THROW NEXT---" button
function changeNext(){
    // Jammed in building this part 
    let image =  document.getElementById("image");

    let previousNumber = image.src[imagePath.length - 5];
    queue.enqueue(previousNumber);
    let number  = Math.floor(Math.random() * 5) + 1;
    image.src = 'images/hand-cricket'+number+'.png';
    queue.forEachElements((element) => document.getElementById("scoreRecorder").appendChild(document.createElement(div)));
}

// This method will be called when we click "---RESET---" button
function reset(){
    document.getElementById('image').src = 'images/hand-cricket0.png';
}