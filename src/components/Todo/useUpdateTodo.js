import { useMutation } from "@tanstack/react-query"
import { updateTodo } from "./updateTodo"

const useUpdateTodo = () => {
    // The Variable is the ID
    return useMutation({ mutationFn: updateTodo, onSuccess: (data, variable) => console.log(data, variable) })
}

export default useUpdateTodo
