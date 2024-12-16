import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTodo } from "./updateTodo"


const useUpdateTodo = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateTodo,
        onSuccess: (variables) => {
            queryClient.invalidateQueries({ queryKey: ['todos'], exact: true })
            queryClient.invalidateQueries({ queryKey: ['users', variables.userId] })
        }
    })
}

export default useUpdateTodo
