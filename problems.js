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
        let newTask = new Node(task)
        if(!this.head){
            this.head = newTask;
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
        if(!this.head){
            this.head = newTask;
            return;
        }
        if(index == 0){
            newTask.next = this.head;
            this.head = newTask;
            return;
        }
        if(index > this.size){
            this.addTaskAtTheEnd(task);
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }
        previous.next = newTask;
        newTask.next = current;
        this.size++;
    }

    updateTask(oldTask, newTask){
        let current = this.head;
        while(current){
            if(current.task === oldTask){
                current.task = newTask;
                console.log(`Task updated: "${oldTask}" → "${newTask}"`);
                return;
            }
            current = current.next;
        }
        console.log(`Task "${oldTask}" not found.`);
    }

    removeTask(task){
        if(task == this.head.task){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next && current.next.task !== task){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
        }
    }

    printtasks(){
        let current = this.head;
        let tasks = "";
        while(current){
            tasks += current.task + " -> " ;
            current = current.next;
        }
        console.log(tasks + "null")
    }
}

let taskList = new TaskList();

taskList.addTaskAtTheEnd("Your first task");
taskList.addTaskAtTheEnd("Your second task");
taskList.addTaskAtTheEnd("Your third task");
taskList.addTaskAtTheEnd("Your 5th task");
taskList.addTaskAtTheEnd("Your 6th task");

taskList.insertAt("This is your 4th task.", 3)
taskList.updateTask("This is your 4th task.", "Your 4th task")
taskList.removeTask("Your 6th task")

taskList.printtasks();