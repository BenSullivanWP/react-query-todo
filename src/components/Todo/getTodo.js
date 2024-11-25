export const getTodo = async (id) => {
    const data = await fetch(`http://localhost:3001/todos/${id}`)
    const todo = await data.json()
    return todo
}

