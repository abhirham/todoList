class Task {
    constructor(task, completed, id) {
        this.task = task;
        this.completed = completed;
        this.id = id;
    }


    toggleTask() {
        this.completed = !this.completed;
    }
}

export const taskConverter = {
    toFirestore: function(task) {
        return {
            task: task.task,
            completed: task.completed
        }
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Task(data.task, data.completed, snapshot.id);
    }
}

export default Task;