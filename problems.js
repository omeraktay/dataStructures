// To-Do List: Add a task at the end of the list. 
//             Insert a task at a specific position.
//             Updata a task.
//             Remove a task.
//             Display all the tasks.
class Node{
    constructor(task, next = null){
        this.task = task;
        this.next = next;
    }
}

class TaskList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    addTaskAtTheEnd(task){
        let newTask = new Node(task);
        if(!this.head){
            this.head = newTask;
            this.size++;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newTask;
        this.size++;
    }

    insertAt(task, index){
        let newTask = new Node(task);
        if(index > this.size){
            this.addTaskAtTheEnd(task);
            return;
        }
        if(index <= 1){
            newTask.next = this.head;
            this.head = newTask;
            this.size++;
            return;
        }
        let current = this.head;
        let count = 0;
        let previous;
        while(count < index){
            previous = current;
            current = current.next;
            count++;
        }
        newTask.next = current;
        previous.next = newTask;
        this.size++;
    }

    uptadeTask(oldTask, newTask){
        let current = this.head;
        while(current){
            if(current.task === oldTask){
                current.task = newTask;
                console.log(`"${oldTask}" updated to: "${newTask}"`);
                return;
            }
            current = current.next;
        }
        console.log(`${oldTask} not found!`);
    }

    deleteTask(task){
        if(!this.head) return;
        if(task == this.head.task){
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        while(current.next && current.next.task != task){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
            this.size--;
            console.log(`"${task}" deleted.`)
            return;
        }
        console.log(`${task} not found!`)
    }

    printAllTasks(){
        let current = this.head;
        let tasks = '';
        while(current){
            tasks += current.task + " -> ";
            current = current.next;
        }
        console.log(tasks + "null");
        console.log(`Size of the list is: ${this.size}`);
    }
}

let taskList = new TaskList();

taskList.addTaskAtTheEnd("Your first task.");
taskList.addTaskAtTheEnd("Your second task.");
taskList.addTaskAtTheEnd("Your third task.");
taskList.addTaskAtTheEnd("Your 5th task.");
taskList.addTaskAtTheEnd("Your 6th task.");

taskList.insertAt("This is your 4th task.", 3)
taskList.insertAt("This is a temp task!", 4)

taskList.uptadeTask("This is your 4th task.", "Your 4th task.")

taskList.deleteTask("This is a temp task!")

taskList.printAllTasks();