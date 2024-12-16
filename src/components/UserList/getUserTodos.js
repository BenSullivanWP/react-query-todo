export const getUserTodos = async (id) => {
    const data = await fetch(`http://localhost:3001/todos?userId=${id}`)
    const todo = await data.json()
    return todo
}
