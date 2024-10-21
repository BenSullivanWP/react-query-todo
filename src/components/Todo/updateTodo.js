export const updateTodo = async (id) => {
    const data = await fetch(`https://dummyjson.com/todos/${id}`, {
        headers: {'Content-Type': 'application/json',
            body: JSON.stringify({}) // TODO: This actually needs to update the todo
        }
    })
    const todo = await data.json()
    return todo
}
