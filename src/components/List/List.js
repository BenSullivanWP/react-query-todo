import { useEffect } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getTodosPage } from "./getTodosPage"
import Todo from "../Todo/Todo"

export default function List() {
    // TODO: for next time try and use QueryObserver to solve the userlist query invalidation
    // https://tanstack.com/query/v3/docs/framework/react/reference/QueryObserver
    // TODO: Convert tyhe user list to reach out to the end point for individual Todo IDs
    // TODO: Add pagination to the todo list
    // TODO: infinite queries/scroll for lazy loading of todos
    const { data: todos, isLoading: todosLoading, isError: todosError } = useInfiniteQuery({
        queryKey: ['todos'],
        queryFn: () => getTodosPage(1)
    })

    useEffect(() => {
        console.log("TODOS: ", todos)
    }, [todos])

    if (todosLoading) return <span>Loading...</span>
    if (todosError) return <span>Errored...</span>

    return (
        <>
            {console.log("TODOS LIST: ", todos)}
            {todos ? todos?.pages[0]?.map(todo => <Todo key={todo.id} todo={todo} />) : null}
        </>
    )
}
