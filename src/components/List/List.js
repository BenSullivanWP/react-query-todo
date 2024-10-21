import { useQuery } from "@tanstack/react-query"
import { getTodos } from "./getTodos"
import Todo from "../Todo/Todo"

export default function List() {
    // TODO: for next time create user lists
    // TODO: for next time invalidate the query cache
    // TODO: for next time get the changes to persist through refreshes

    const { data: todos, isLoading: todosLoading, isError: todosError } = useQuery({ queryKey: ['todos'], queryFn: getTodos })

    if (todosLoading) return <span>Loading...</span>
    if (todosError) return <span>Errored...</span>

    return (
        <>
            {todos.map(todo => <Todo todo={todo} />)}
        </>
    )
}
