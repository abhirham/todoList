import {firestore} from '../firebase';
import Task, {taskConverter} from '../models/task';

const tasksCollectionRef = firestore.collection('tasks').withConverter(taskConverter);

export const addTodo = task => tasksCollectionRef.add(new Task(task, false));

export const tasksStream = () => tasksCollectionRef;

export const updateTodo = task => tasksCollectionRef.doc(task.id).set(task);

export const deleteTodo = task => tasksCollectionRef.doc(task.id).delete();