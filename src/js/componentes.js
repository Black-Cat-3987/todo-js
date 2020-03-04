import { Todo } from "../classes";
import { todoList} from "../index";

//Referncias al html
const divTodoList=document.querySelector('.todo-list');
const txtInput=document.querySelector('.new-todo');
const btnBorrar=document.querySelector('.clear-completed');
const ulFiltros=document.querySelector('.filters');
const anchorFiltros=document.querySelectorAll('.filtro');


//METODOS
export const crearTodoHtml=(todo)=>{
    const htmlTodo=`<li class="${(todo.completado) ? 'completed':''}" data-id="${todo.id}">
                        <div class="view">
                            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked':''}>
                            <label>${todo.tarea}</label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="Create a TodoMVC template">
                    </li>`;

    const div=document.createElement('div');//se hace esto para crear el elemento html
    div.innerHTML=htmlTodo;
    //como es un objecto div, este tiene adentro el objecto que queremos agregarar que es el primer hijo que tiene
    divTodoList.append(div.firstElementChild);
    
    return div.firstElementChild;

}

//EVENTOS
txtInput.addEventListener('keyup',(event)=>{

    //console.log(event);
    if(event.keyCode===13 && txtInput.value.length>0)
    {
        const nuevoTodo=new Todo(txtInput.value);

        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);

        txtInput.value='';
        
    }

});

//hace referncia al contenedor que tiene el listado de elementos
divTodoList.addEventListener('click',(event)=>{

    const nombreElemento= event.target.localName;//input, label , button
    const todoElemento= event.target.parentElement.parentElement;//para obtener el li
    const todoId=todoElemento.getAttribute('data-id');//regresamos el id del elemento

    if(nombreElemento.includes('input')) {//dio click en el CHECK, para indicar si la tarea esta completada
        
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    }else if(nombreElemento.includes('button')) {//dio click en el BOTTON, para borrar el elemento
        
            todoList.eliminarTodo(todoId);
            divTodoList.removeChild(todoElemento);
    
        }
   //console.log(todoList);

});

//borra todos los elementos que han sido completados
btnBorrar.addEventListener('click',(event)=>{

    todoList.eliminarCompletados();

    //va del mayor al menor
    for(let i=divTodoList.children.length-1; i>=0; i-- ){
        
        //recuperamos un hijo del listado
        const elemento= divTodoList.children[i];

        //si este elemento tiene la clase completed, lo eliminamos
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }


});

ulFiltros.addEventListener('click',(event)=>{
    console.log(event.target.text);
    
    const filtro=event.target.text;
    
    if(!filtro) {return;} //si es undefined que no haga nada

    anchorFiltros.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');


    for(const elemento of divTodoList.children)
    {
        elemento.classList.remove('hidden');
        const completado=elemento.classList.contains('completed');
        
        switch(filtro){

            case 'Pendientes':
                    if(completado)
                    {
                        elemento.classList.add('hidden');
                    }

                break;
            case 'Completados':
                    if(!completado)
                    {
                        elemento.classList.add('hidden');
                    }

                break;                

        }
    }

});
