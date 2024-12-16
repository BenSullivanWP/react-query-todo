import { useInfiniteQuery } from "@tanstack/react-query"
import { getTodosPage } from "./getTodosPage"
import Todo from "../Todo/Todo"
import { Box } from "@mui/material"

export default function List() {
    const {
        data: todos,
        error: todosError,
        isLoading: todosLoading,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: ['todos'],
        queryFn: ({ pageParam = 1 }) => getTodosPage(pageParam),
        getNextPageParam: (lastPage) => lastPage.next,
    })

    if (todosLoading) return <span>Loading...</span>
    if (todosError) return <span>Errored...</span>

    return (
        <>
            {todos.pages?.map((group, i) => (
                <Box key={i}>
                    {/* This was breaking out pagination */}
                    {group.data?.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
                </Box>
            ))}
            {hasNextPage && <button onClick={() => fetchNextPage()}>Next</button>}
        </>
    )
}
