import { Checkbox, FormControlLabel } from "@mui/material"
import useUpdateTodo from "./useUpdateTodo"

export default function Todo({ todo }) {

    const { mutate: mutateTodo } = useUpdateTodo()
    const handleChange = (event) => {
        mutateTodo({ ...todo, completed: event.target.checked })
    }

    return (
        <div>
            <FormControlLabel
                control={<Checkbox checked={todo.completed} onChange={handleChange} />}
                label={todo.todo}
            />
        </div>
    )
}
