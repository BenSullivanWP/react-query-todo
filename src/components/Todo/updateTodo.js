export const updateTodo = async (todo) => {
    console.log(todo)
    const data = await fetch(`https://dummyjson.com/todos/${todo.id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            completed: todo.completed,
        })
    })
    const new_todo = await data.json()
    return new_todo
}
