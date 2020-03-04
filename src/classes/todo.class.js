export class Todo{
    
    //esto se hace para poder recuperar los metodos cuando se transforma a formato JSON, y al recuperarlo puedas usar
    //los metodos que tiene una clase, ya que sin estos en formato JSON se piede los metodos
    static fromJson({id,tarea,completado,creado}){
        const tempTodo= new Todo(tarea);
        
        tempTodo.id=id;
        tempTodo.completado=completado;
        tempTodo.creado=creado;
        return tempTodo;
    }

    constructor(tarea){
        this.tarea      = tarea;
        this.id         = new Date().getTime();//132132132
        this.completado = false;
        this.creado     = new Date();
    }

    imprimirClase(){
        console.log(`${this.tarea} - ${this.id} `);
    }
}