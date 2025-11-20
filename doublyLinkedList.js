class Node {
    constructor(data, next, prev){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addData(data){
        let newData = new Node(data);
        if(!this.head){
            this.head = newData;
            this.tail = newData;
            return;
        }
        this.tail.next = newData;
        newData.prev = this.tail;
        this.tail = newData;
    }

    addDataAtTheBeginning(data){
        let newData = new Node(data);
        if(!this.head){
            this.head = newData;
            this.tail = newData;
            return;
        }
        this.head.prev = newData;
        newData.next = this.head;
        this.head = newData;
    }

    removeData(data){
        if(!this.head) return;
        let current = this.head;
        while(current){
            if(data == current.data){
                if(current == this.head){
                    this.head = current.next;
                    if(this.head) this.head.prev = null; 
                }
                else if(current == this.tail){
                    current.prev.next = null;
                    this.tail = current.prev;
                }
                else{
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                console.log(`"${data}" has been removed successfully.`);
                return;
            }
            current = current.next;
        }
            console.log(`"${data}" not found!`);
    }

    insertAfter(target, data){
        let current = this.head;
        while(current && current.data !== target){
            current = current.next;
        }
        if(!current){
            console.log(`"${target}" not found!`);
            return;
        }
        let newData = new Node(data);
        newData.next = current.next;
        newData.prev = current;
        current.next = newData;
        if(newData.next){
            newData.next.prev = newData;
        }else{
            this.tail = newData;
        }
    }

    findMiddleElement(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(`The middle element is: "${slow.data}"`);
    }

    findSpecificElement(k){
        let ahead = this.head;
        for(let i = 0; i < k; i++){
            ahead = ahead.next;
        }
        let behind = this.head;
        while(ahead){
            ahead = ahead.next;
            behind = behind.next;
        }
        console.log(`The last ${k}th element is: "${behind.data}"`);
    }

    removeDuplicates(){
        let current = this.head;
        while(current && current.next){
            if(current.data == current.next.data){
                current.next = current.next.next;
            }
            else{
                current = current.next
            }
        }
    }

    reverseList(){
        let current = this.head;
        let previous = null;
        while(current){
            let nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }
        this.head = previous;
    }

    swapElements(){
        if(!this.head || !this.head.next) return this.head;
        let previous = null;
        let current = this.head;
        let dummy = current.next;
        while(current && current.next){
            if(previous !== null){
                previous.next = current.next;
            }
            previous = current;
            let nextNode = current.next.next;
            current.next.next = current;
            current.next = nextNode;
            current = nextNode;
        }
        this.head = dummy;
    }

    twinSumDoublyList(){
        let first = this.head;
        let last = this.tail;
        let current = this.head;
        let count = 0;
        let ans = -Infinity;
        while(current){
            count++;
            current = current.next;
        }
        for(let i = 0; i < count / 2; i++){
            ans = Math.max(ans, first.data + last.data);
            first = first.next;
            last = last.prev;
        }
        console.log(`Max twin sum is: "${ans}"`);
    }

    twinSum(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        let previous = null;
        let current = slow;
        while(current){
            let nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }
        let pointer = this.head;
        while(pointer.next !== slow){
            pointer = pointer.next;
        }
        pointer.next = previous;
        let curr = this.head;
        let ans = -Infinity;
        while(previous){
            ans = Math.max(ans, curr.data + previous.data);
            previous = previous.next;
            curr = curr.next;
        }
        console.log(`Max twin sum is: "${ans}"`);
    }

    twinSumEasy(){
        let fast = this.head;
        let slow = this.head;
        let previous = null;
        let dummy = this.head;
        let ans = -Infinity;
        while(fast && fast.next){
            fast = fast.next.next;
            let nextNode = slow.next;
            slow.next = previous;
            previous = slow;
            slow = nextNode;
        }
        this.head = previous;
        dummy.next = slow;
        while(slow){
            ans = Math.max(ans, slow.data + previous.data);
            slow = slow.next;
            previous = previous.next;
        }
        console.log(`Max twin sum is: "${ans}"`);
    }

    findThePlace(target){
        let count = 0;
        let current = this.head;
        while(current && current.data !== target){
            count++;
            current = current.next;
        }
        if(!current){
            console.log(`"${target}" not found!`);
            return;
        }
        console.log(`"${target}" is at ${count + 1}th place in the list.`);
    }

    reverseBetween2(left, right) {
        if (!this.head || left === right) return this.head;
        let current = this.head;
        let previous = null;
        for(let i = 1; i < left; i++){
            previous = current;
            current = current.next;
        }
        let tail = current;
        let connection = previous;
        for(let i = 0; i < right - left + 1; i++){
            let nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }
        tail.next = current;
        if(connection == null){
            this.head = previous;
        }else{
            connection.next = previous;
        }
        return this.head;
    }

    mostExpenses(){
        if (!this.head || !this.head.next) return null;
        let first = -Infinity;
        let second = -Infinity;
        let current = this.head;
        while(current){
            if(current.data > first){
                second = first;
                first = current.data;
            }
            else if(current.data > second){
                second = current.data;
            }
            current = current.next;
        }
        console.log(`First: ${first}, Second: ${second}`);
    }

    printAllData(){
        let datas = [];
        let current = this.head;
        let count = 0;
        while(current){
            datas.push(current.data);
            count++;
            current = current.next;
        }
        console.log(datas.join(" -> "));
        console.log(`Size of the list is: ${count}`);
    }
}


let newDoublyList = new DoublyLinkedList();

newDoublyList.addData(10);
newDoublyList.addData(20);
newDoublyList.addData(30);
newDoublyList.addData(31);
newDoublyList.addData(50);
newDoublyList.addData(60);
newDoublyList.addData(70);
newDoublyList.addData(80);

newDoublyList.addDataAtTheBeginning(5);
newDoublyList.addDataAtTheBeginning(1);

// // newDoublyList.removeData(31);
// // newDoublyList.removeData(35);
// // newDoublyList.removeData(60);

newDoublyList.insertAfter(5, 7);
newDoublyList.insertAfter(31, 37);
newDoublyList.insertAfter(60, 65);
newDoublyList.insertAfter(70, 75);
newDoublyList.insertAfter(80, 85);

// newDoublyList.insertAfter(43, 54);

// newDoublyList.findMiddleElement();

// newDoublyList.findSpecificElement(2);

// newDoublyList.removeDuplicates();

// newDoublyList.reverseList();

// newDoublyList.swapElements();

// newDoublyList.twinSumDoublyList();
// newDoublyList.twinSum();
// newDoublyList.twinSumEasy();

// newDoublyList.findThePlace(8);

// newDoublyList.reverseBetween(2, 6);
// newDoublyList.reverseBetween2(1, 2);

newDoublyList.mostExpenses();

newDoublyList.printAllData();


