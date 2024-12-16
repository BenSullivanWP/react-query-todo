import { useQuery } from "@tanstack/react-query"
import { getUserTodos } from "./getUserTodos"
import Todo from "../Todo/Todo"

export default function UserList({ userId }) {
    const { data: userTodos } = useQuery({ queryKey: ['users', userId], queryFn: () => getUserTodos(userId) })

    return (
        <>
            <hr />
            Hello, {userId}
            {userTodos?.map(todo => <Todo key={`user-${todo.id}`} todo={todo} />)}
        </>
    )
}
