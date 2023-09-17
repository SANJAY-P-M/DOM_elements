export default class Queue{
    constructor(){
        this.array = [];
    }
    enqueue(element){
        this.array.push(element);
    }
    dequeue(){
        return this.array.shift();
    }
    // To create Elements with items in queue we use this method ,
    // Making this method separate will ensure the entire queue is not accessible but only the elements

    forEachElements(doThis){
        this.array.forEach(doThis);
    }

    queueLength(){
        return this.array.length
    }
}