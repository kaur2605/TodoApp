type Todo = {
 title: string;
 description: string;
 id:number;
 complete: boolean;
}
type ToggleComplete = (selectedTodo: Todo) => void;
type AddNote = (newTitle: string, newDesc:string) => void;
type RemoveNote = (id: number) => void;