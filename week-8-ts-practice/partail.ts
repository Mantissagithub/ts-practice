interface Todo{
    title : string;
    description : string;
    id : number;
    done : boolean;
}

type UpdateInputTodo = Partial<Todo>

function updateTodo(UpdateInputTodonfo : UpdateInputTodo){}

updateTodo({
    title: "go to gym"
})