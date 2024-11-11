export const getUserTodos = async (id) => {
    const data = await fetch(`https://dummyjson.com/todos/user/${id}`)
    const todo = await data.json()
    return todo
}
