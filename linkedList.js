var LinkedList = function(){
    this.head = null;
    this._length = 0;
};

var Node = function(val){
    this.val = val;
    this.next = null;
};

LinkedList.prototype.insert = function(val){
    let node = new Node(val);
    if(this.isEmpty()){
        this.head = node;
        this._length++;
        return node;
    } else {
        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = node;
        this._length++;
    }
    return node;
};

LinkedList.prototype.printEach = function(){
    if(this.isEmpty()){
        throw new Error("Empty List!");
    } else {
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        };
    };
};

LinkedList.prototype.isEmpty = function(){
    return this.head === null;
};

LinkedList.prototype.print = function(){
    if(this.isEmpty()){
        throw new Error("List is Empty");
    }

    var output = "Head -> "
    let current = this.head;

    while(current){
        output += current.val;
        output += " -> ";
        current = current.next;
    }
    output += "null"
    return console.log(output);
};

LinkedList.prototype.finfByVal = function(val){
    if(this.isEmpty()){
        throw new Error("List is Empty!");
    }

    let current = this.head;

    while(current){
        if(current.val === val){
            return console.log(current);
        }
        current = current.next;
    }

    return false;
}

LinkedList.prototype.insertAt = function(val, idx){
    if(!this.head){
        throw new Error("List is Empty");
    } else if (idx === 0){
        throw new Error("Cannot insert at idx Zero")
    } else if (idx === 1){
        this.head = this.prepend(val);
        return this.print();
    } else if (idx > this._length){
        this.insert(val);
        return this.print();
    }
    let node = new Node(val);
    let current = this.head;
    let previous = this.head
    let count = 1;

    while(current && count <= idx){
        current = current.next;
        count++;
    }
    count = 1;
    while(previous && count <= (idx-1)){
        previous = previous.next;
        count++;
    }

    previous.next = node;
    node.next = current;

    return this.print();
}

LinkedList.prototype.prepend = function(val){
    let node = new Node(val);
    if(!this.head){
        this.head = node;
    }
    let current = this.head;
    this.head = node;
    node.next = current;
    return node;
}

LinkedList.prototype.deleteAtIdx = function(idx){
    if(!this.head){
        throw new Error("List is Empty");
    } else if (idx === 0 || !idx){
        throw new Error("Cannot Delete Nonexistent Element");
    } else if (idx > this._length){
        throw new Error("Cannot Delete Nonexistent Element");
    } else if (idx === 1){
        this.head = this.head.next;
        return this.print();
    }

    let current = this.head;
    let previous = this.head;
    let del = this.head;
    let count = 1;

    while(current && count < (idx+1)){
        current = current.next;
        count++;
    }
    count = 1;

    while(del && count < idx){
        del = del.next;
        count++;
    }
    count = 1;

    while(previous && count < (idx-1)){
        previous = previous.next;
        count++;
    }
    
    previous.next = current;
    del.next = null;

    return this.print();
}

LinkedList.prototype.exists = function(val){
    if(!this.head){
    throw new Error("List is Empty")
    } else if (!val){
        throw new Error("Exists needs a value to search for")
    }else if(this.head.val === val){
        return console.log(true);
    }

    let current = this.head;

    while(current){
        if(current.val === val){
            return console.log(true);
        }

        current = current.next;
    }

    return console.log(false);
}

var myList = new LinkedList();
myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.prepend(0);
myList.insertAt(4, 1);
myList.exists(1);