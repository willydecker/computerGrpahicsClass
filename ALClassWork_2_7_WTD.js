class Queue{
	constructor(){
		var items = [];
		this.enqueue = function(element){ //puts element into stack
			items.push(element);
		}
		this.dequeue = function(){ //pulls fifo from stack
			var element = items.shift();
			return(element);
		}
		this.showAll = function(){ //shows the queue as is
				console.log(items);
		}
		this.front = function(){
			var element = items[0];
			return(element);
		}

	}//end construct
}//end queue

class PriorityQueue{
	constructor(){
		var items = [];
        this.isEmpty = function(){
        	var empty = false;
        	if(items.length==0){
        		empty = true;
        	}
        	return(empty);
        }

		function makePriorityObject(value, priority){ //makes an object with value and priority 
				this.element = value;
				this.priority = priority;
			}

		this.enqueue = function(element, priority){
			var objWithPriority = new makePriorityObject(element, priority);

			if(this.isEmpty()){
				items.push(objWithPriority); //empty queue no need to check
			}
			else{
				var added = false; //check to see if it got added
				for(var i=0;i<items.length;i++){
					if(objWithPriority.priority < items[i].priority){
					// 	//array.splice(index, howmany, item1, ....., itemX)
					// 	//howmany - how many items to delete - is optional
						items.splice(i,0,objWithPriority);
						added = true;
						break;
					}
				}
				if(added==false){
					//not added which means priority of item is > all items in queue
					items.push(objWithPriority);
				}
			}
		}

		this.show = function(){
			console.log(items);
		}

		this.dequeue = function(){
			var element = items.shift(); //return item from first in array
		}
	}
}

var myQueue = new Queue();
myQueue.enqueue(12);
myQueue.enqueue(35);
myQueue.enqueue(58);

myQueue.showAll();

var element = myQueue.dequeue();
console.log(element);
var element = myQueue.dequeue();
console.log(element);

myQueue.showAll();

var myPriorityQ = new PriorityQueue();
myPriorityQ.enqueue("Will", 1);
myPriorityQ.enqueue("Ryan", 3);
myPriorityQ.enqueue("Tyler", 2);

myPriorityQ.show();