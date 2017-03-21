class PriorityQueue{

	constructor(){
		var items = [];

        this.isEmpty = function(){
        	var empty = false;
        	if(items.length==0)
        	{
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

			if(this.isEmpty())
			{
				items.push(objWithPriority); //empty queue, no need to check priority
			}
			else
			{
				//queue not empty so walk through queue and insert object per priority
				//arrange objects with increasing priority from first element to last
				//items with lower priority number are highest priority, i.e. 1 has more priority than 2
				//remember this is a FIFO stack so items are removed from the first
				var added = false; //check to see if it got added
				for(var i=0;i<items.length;i++)
				{
					if(objWithPriority.priority < items[i].priority)
					{
					// 	//array.splice(index, howmany, item1, ....., itemX)
					// 	//howmany - how many items to delete - is optional
						items.splice(i,0,objWithPriority);
						added = true;
						break;
					}
				}
				if(added==false)
				{
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


var myPriorityQ = new PriorityQueue();
myPriorityQ.enqueue("Jack",5);
myPriorityQ.enqueue("John", 4);

myPriorityQ.show();