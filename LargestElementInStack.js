/**
 * You want to be able to access the largest element in a stack.
 */

function Stack(){

	// initialize an empty stacks
	this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item){
	 this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function(){
	 if(!this.items.length){
	 	return null;
	 }

	 return this.items.pop();
};

// see what the last item is 
Stack.prototype.peek = function(){
	 if(!this.items.length){
	 	return null;
	 }

	 return this.items[this.items.length -1];
};


/**
 * [MaxStack description]
 */
function MaxStack(){
	this.items = new Stack();
	this.maxStack = new Stack();
}

// Return Largest Element in Stack
MaxStack.prototype.push = function(item){

	this.items.push(item);

	if(!this.maxStack.peek() || item >= this.maxStack.peek()){
		this.maxStack.push(item);
	}
}

// Return Largest Element in Stack
MaxStack.prototype.pop = function(){

	var item = this.items.pop();

	if(item === this.maxStack.peek()){
		this.maxStack.pop();
	}

	return item;
}

// Return Largest Element in Stack
MaxStack.prototype.getMax = function(){
	return this.maxStack.peek();
}

