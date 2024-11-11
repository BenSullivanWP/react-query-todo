import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { updateTodo } from "./updateTodo"


const useUpdateTodo = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateTodo,
        onSuccess: (incoming_data) => {
            queryClient.setQueryData(['todos'], (data) => {
                data.splice(incoming_data.id - 1, 1, incoming_data)
                return data
            })
        }
    })
}

export default useUpdateTodo
