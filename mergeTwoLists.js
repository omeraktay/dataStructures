class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    print() {
        let current = this.head;
        let values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" → "));
    }
}


function mergeTwoLists(l1, l2) {
    let dummy = new LinkedList(0);
    let current = dummy;
    while(l1 && l2){
        if(l1.value < l2.value){
            current.next = l1;
            l1 = l1.next;
        }else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next
    }
    current.next = l1 || l2;
    return dummy.next;
}
function mergeTwoLists(l1, l2) {
    let dummy = new Node(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
}




let newDoublyList = new LinkedList();

newDoublyList.add(10);
newDoublyList.add(20);
newDoublyList.add(30);
newDoublyList.add(40);


let newList = new LinkedList()
newList.add(15);
newList.add(20);
newList.add(25);
newList.add(35);
newList.add(45);
newList.add(55);


console.log("List1:");
newDoublyList.print();

console.log("List2:");
newList.print();

let mergedHead = mergeTwoLists(newDoublyList.head, newList.head);
let mergedLists = new LinkedList();
mergedLists.head = mergedHead;
console.log("Merged List:");
mergedLists.print();




