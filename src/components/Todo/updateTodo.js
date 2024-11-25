export const updateTodo = async (todo) => {
    console.log(todo)
    const data = await fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    })
    const new_todo = await data.json()
    return new_todo
}
