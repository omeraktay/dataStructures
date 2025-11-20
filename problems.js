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
        this.size = 0;
    }
    addData(data){
        let newData = new Node(data);
        if(!this.head){
            this.head = newData;
            this.tail = newData;
            this.size++;
            return;
        }
        this.tail.next = newData;
        newData.prev = this.tail;
        this.tail = newData;
        this.size++;
    }

    addDataAtTheBeginning(data){
        let newData = new Node(data);
        if(!this.head){
            this.head = newData;
            this.tail = newData;
            this.size++;
            return;
        }
        newData.next = this.head;
        this.head.prev = newData;
        this.head = newData;
        this.size++;
    }

    removeData(data){
        let current = this.head;
        while(current){
            if(current.data == data){
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
                this.size--;
                console.log(`"${data}" was deleted successfully.`)
                return;
            }
            current = current.next;
        }
        console.log(`"${data}" not found!`)
    }

    insertAfter(target, data){
        let current = this.head;
        while(current && current.data != target){
            current = current.next;
        }
        if(!current){
            console.log(`${target} not found!`);
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
        this.size++;
    }

    findMiddleElement(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(`Middle element is: ${slow.data}`);
    }

    findSpecificElement(k){
        let first = this.head;
        let second = this.head;
        for(let i = 0; i < k; i++){
            second = second.next;
        }
        while(second){
            second = second.next;
            first = first.next;
        }
        console.log(`${k}th element from the end is: ${first.data}`);
    }

    removeDuplicates(){
        let current = this.head;
        while(current && current.next){
            if(current.data == current.next.data){
                current.next = current.next.next;
            }
            else{
                current = current.next;
            }
        }
    }

    reverseList(){
        let previous = null;
        let current = this.head;
        while(current){
            let nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }
        this.head = previous;
    }

    swapElements(){
        if(!this.head || !this.head.next){
            return this.head;
        }
        let current = this.head;
        let previous = null;
        let dummy = current.next;
        while(current && current.next){
            if(previous){
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
        let current = this.head;
        let first = this.head;
        let last = this.tail;
        let sum = -Infinity;
        let count = 0;
        while(current){
            count++;
            current = current.next;
        }
        for(let i = 0; i < count / 2; i++){
            sum = Math.max(sum, first.data + last.data)
            first = first.next;
            last = last.prev;
        }
        console.log(sum);
    }

    twinSum(){
        let slow = this.head;
        let fast = this.head;
        let count = 0;
        while(fast && fast.next){
            count++;
            slow = slow.next;
            fast = fast.next.next;
        }
        let current = slow;
        let previous = null;
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
        let sum = -Infinity;
        let first = this.head;
        // let second = this.head;
        // for(let i = 0; i < count ; i++){
        //     second = second.next;
        // }
        // for(let i = 0; i < count ; i++){
        //     sum = Math.max(sum, second.data + first.data);
        //     second = second.next;
        //     first = first.next;
        // }
        while(previous){
            sum = Math.max(sum, previous.data + first.data);
            previous = previous.next;
            first = first.next; 
        }
        console.log(sum);
    }

    twinSumEasy(){
        let fast = this.head;
        let slow = this.head;
        let dummy = this.head;
        let previous = null;
        let ans = 0;
        while(fast && fast.next){
            fast = fast.next.next;
            let temp = slow.next;
            slow.next = previous;
            previous = slow;
            slow = temp;
        }
        // dummy.next = slow;
        // this.head = previous
        while(slow){
            ans = Math.max(ans, previous.data + slow.data);
            previous = previous.next;
            slow = slow.next;
        }
        console.log(ans);
    }

        reverseBetween2(left, right) {
        if (!this.head || left === right) return this.head;

        let previous = null;
        let curr = this.head;

        // 1️⃣ Move curr to the left position, tracking previous
        for (let i = 1; i < left; i++) {
            previous = curr;
            curr = curr.next;
        }

        // Mark important pointers
        let connection = previous;   // Node before reversal starts
        let tail = curr;         // First node of the reversed part (will become tail later)

        // 2️⃣ Reverse sub-list
        for (let i = 0; i < right - left + 1; i++) {
            let next = curr.next;
            curr.next = previous;
            previous = curr;
            curr = next;
        }

        // 3️⃣ Reconnect:
        if (connection) {
            connection.next = previous;
        } else {
            this.head = previous; // IMPORTANT: if left was 1, new head is previous
        }

        tail.next = curr;
        return this.head;
    }

    printAllData(){
        let current = this.head;
        let datas = [];
        let count = 0;
        while(current){
            datas.push(current.data);
            current = current.next;
            count++
        }
        console.log(datas.join(" -> "));
        console.log(`Size of the list: ${count}`);
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

newDoublyList.insertAfter(5, 7);
newDoublyList.insertAfter(31, 37);
newDoublyList.insertAfter(60, 65);
newDoublyList.insertAfter(70, 75);

// newDoublyList.findMiddleElement();

// newDoublyList.findSpecificElement(7);

newDoublyList.removeDuplicates();

// newDoublyList.swapElements();
// newDoublyList.reverseList();

// newDoublyList.twinSumDoublyList();
newDoublyList.twinSum();
// newDoublyList.twinSumEasy();

newDoublyList.printAllData();


