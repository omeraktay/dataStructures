class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addNodeAtTheEnd(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.size++;
    }

    addNodeAtTheBeginnign(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }

    removeNode(value){
        let current = this.head;
        while(current){
            if(current.value == value){
                // Remove the first element
                if(current == this.head){
                    this.head = current.next;
                    if(this.head) this.head.prev = null;
                }
                // Remove the last element
                else if(current == this.tail){
                    this.tail = current.prev;
                    this.tail.next = null;
                }
                // Remove from middle
                else{
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return;
            }
            current = current.next;
        }
        console.log(`${value} not found!`);
    }

    insertAfter(target, newValue){
        let current = this.head;
        while(current && current.value !== target){
            current = current.next;
        }
        if(!current){
            console.log(`${target} not found!`);
            return;
        }
        let newNode = new Node(newValue);
        newNode.next = current.next;
        newNode.prev = current;
        current.next = newNode;
        if(newNode.next){
            newNode.next.prev = newNode;
        } else{
            this.tail = newNode;
        }
        this.size++;
    }

    printForward(){
        let current = this.head;
        let values = [];
        while(current){
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
        console.log(this.size);
    }

    printBacward(){
        let current = this.tail;
        let values = [];
        while(current){
            values.push(current.value)
            current = current.prev;
        }
        console.log(values.join(" <- "));
    }
}


let newDoublyList = new DoublyLinkedList();

newDoublyList.addNodeAtTheEnd(10);
newDoublyList.addNodeAtTheEnd(20);
newDoublyList.addNodeAtTheEnd(30);
newDoublyList.addNodeAtTheEnd(40);
newDoublyList.addNodeAtTheEnd(60);

newDoublyList.addNodeAtTheBeginnign(5);
newDoublyList.removeNode(20);
newDoublyList.insertAfter(20, 25);
newDoublyList.insertAfter(40, 50);

newDoublyList.printForward();
newDoublyList.printBacward();