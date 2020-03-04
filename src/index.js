//******************* IMPORTS MODULES ********************* 
import './styles.css';
import {Todo, TodoList} from './classes' //por default toma el archivo index.js
import { crearTodoHtml } from './js/componentes';

//********************************************************* 

export const todoList= new TodoList();

//las dos instrucciones hacen lo mismo
//todoList.todos.forEach(todo =>  crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);

console.log(todoList);
//todoList.todos[0].imprimirClase();

//const tarea1 = new Todo('Aprender JavaScript');
//const tarea2 = new Todo('Terminar PWD');

//todoList.nuevoTodo(tarea1);
//todoList.nuevoTodo(tarea2);
//console.log(todoList);
//crearTodoHtml(tarea1);


//loca storage y session storage
//localStorage.setItem('mi-key','abci23');
//sessionStorage.setItem('mi-key','abci23');

