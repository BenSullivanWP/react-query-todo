import { Checkbox, FormControlLabel } from "@mui/material"
import useUpdateTodo from "./useUpdateTodo"

export default function Todo({ todo }) {

    const {mutate: mutateTodo } = useUpdateTodo()

    return (
        <div>
            {
            // TODO: Update the completed status of the todo item with reactquery
            }
            <FormControlLabel
                control={<Checkbox defaultChecked={todo.completed} onChange={() => mutateTodo(todo.id, {})} />}
                label={todo.todo}
            />
        </div>
    )
}
