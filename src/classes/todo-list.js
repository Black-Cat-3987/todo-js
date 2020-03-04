import { Todo } from "./todo.class";

export class TodoList{
  
    constructor(){
        //this.todos=[];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {

        //REGRESA UN ARREGLO CON TODOS LOS ELEMENTOS MENOS EL QUE TIENE EL ID QUE SE QUIERE ELEIMINAR
        //ESTO LO HACE DEBIDO AL FILTRO YA QUE CON ESTE, PIDE TODO LOS ELEMENTOS QUE NO TENGA EL ID QUE SE VA ELIMINAR
        this.todos=this.todos.filter(todo=> todo.id != id);
        
        this.guardarLocalStorage();

    }

    marcarCompletado(id){

        for(const todo of this.todos){            
            if(todo.id == id)
            {
                todo.completado=!todo.completado;
                break;
            }
        }
        this.guardarLocalStorage();
    }

    eliminarCompletados(){
        //regresa todos los que no estan completados, decartando los completados usando el filtro y la negacion 
        //en el campo completado
        this.todos=this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        //solo se alamacena valores de tipo string
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage(){

        /*
        if(localStorage.getItem('todo'))
        {
            this.todos=JSON.parse(localStorage.getItem('todo'));
        }else{
            this.todos=[];
        }
        */
        this.todos=(localStorage.getItem('todo')) 
                    ? JSON.parse(localStorage.getItem('todo')) 
                    : [];

        //Estas dos lineas son lo mismo solo se simplifico ya que el mismo 
        //objeto es el parametro de la funcion a enviar
        //this.todos=this.todos.map(obj => Todo.fromJson(obj));
        this.todos=this.todos.map(Todo.fromJson);


    
    }

}