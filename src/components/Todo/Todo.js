import { Checkbox, FormControlLabel } from "@mui/material"
import useUpdateTodo from "./useUpdateTodo"

export default function Todo({ todo }) {

    const { mutate: mutateTodo } = useUpdateTodo()

    return (
        <div>
            {
                // TODO: Update the completed status of the todo item with reactquery
            }
            <FormControlLabel
                control={<Checkbox defaultChecked={todo.completed} onChange={(event) => {
                    console.log("Completed value: ", event.target.value)
                    todo = {...todo, completed: event.target.value == "on" }
                    mutateTodo(todo)
                }} />}
                label={todo.todo}
            />
        </div>
    )
}
