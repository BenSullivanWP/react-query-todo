import { useQuery } from "@tanstack/react-query"
import { getUserTodos } from "./getUserTodos"
import Todo from "../Todo/Todo"

export default function UserList({ userId }) {
    // TODO: This query is not updating based on the main Todos list. 
    const { data: userTodos } = useQuery({ queryKey: ['users', userId], queryFn: () => getUserTodos(userId) })

    return (
        <>
            <hr />
            Hello, {userId}
            {userTodos?.todos.map(todo => <Todo todo={todo} />)}
        </>
    )
}
