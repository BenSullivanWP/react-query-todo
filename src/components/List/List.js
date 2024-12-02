import { useInfiniteQuery } from "@tanstack/react-query"
import { getTodosPage } from "./getTodosPage"
import Todo from "../Todo/Todo"
import { Box } from "@mui/material"

export default function List() {
    // TODO: for next time try and use QueryObserver to solve the userlist query invalidation
    // https://tanstack.com/query/v3/docs/framework/react/reference/QueryObserver
    // TODO: Convert tyhe user list to reach out to the end point for individual Todo IDs
    // TODO: Add pagination to the todo list
    // TODO: infinite queries/scroll for lazy loading of todos
    const {
        data: todos,
        error: todosError,
        isLoading: todosLoading,
        hasNextPage,
        fetchNextPage,
        lastPage
    } = useInfiniteQuery({
        queryKey: ['todos'],
        queryFn: getTodosPage,
        getNextPageParam: (lastPage, pages) => { console.log("LAST PAGE: ", lastPage, "PAGES: ", pages) },
    })

    if (todosLoading) return <span>Loading...</span>
    if (todosError) return <span>Errored...</span>

    return (
        <>
            {todos.pages.map((group, i) => (
                <Box key={i}>
                    {group.data.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
                </Box>
            ))}
            {console.log("NEXT PAGE?", hasNextPage)}
            {/* {console.log("TODOS LIST: ", todos)}
            {todos ? todos?.pages[0]?.data?.map(todo => <Todo key={todo.id} todo={todo} />) : null} */}
            <button onClick={() => fetchNextPage()}>Next</button>
        </>
    )
}
