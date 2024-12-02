export const getUserTodos = async (id) => {
    // TODO: make a users end point in json-server
    const data = await fetch(`http://localhost:3001/todos?userId=${id}`)
    const todo = await data.json()
    return todo
}
