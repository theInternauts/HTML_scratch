/* 
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */
function ListItem(item){
    this.name = item.name;
    this.price = item.price;    
}

ListItem.prototype.clone = function(){
	return new ListItem(this);
}

function StoreList(){
    this.list = [];
}

StoreList.prototype.add = function(item){
    this.list.push(item);
}

function GroceryList(){
    this.total = 0;
    this.list = [];
 }

GroceryList.prototype.add = function(item){
    this.total += item.price;
    this.list.push(item);
};

GroceryList.prototype.re_calculate = function(){
    this.total = 0;
    for(var i=0; i<this.list.length; i++)
    {
        this.total += this.list[i].price;
    }
    return this.total;
};

GroceryList.prototype.remove =  function(name){
    var found = false;
    for(var i=0; i<this.list.length; i++)
    {
        mark = this.list[i] 
        if(mark.name == name && !found){
	    	found = true;
	    	this.total -= mark.price;
	        mark.destroy;
	        this.list[i] = this.list[i+1];
        }
        
    }
    if(found){
        this.list.pop();
    }
    return found;
};


var app = (function(){
    
    return {
        
    }
}());