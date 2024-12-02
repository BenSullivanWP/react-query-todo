import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTodo } from "./updateTodo"


const useUpdateTodo = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateTodo,
        onSuccess: (variables) => {
            // TODO: Might want to take a look at monitoring both of these separately so we're not making a huge call to the index endpoint
            queryClient.invalidateQueries({ queryKey: ['todos'], exact: true })
            queryClient.invalidateQueries({ queryKey: ['users', variables.userId] })
        }
    })
}

export default useUpdateTodo
