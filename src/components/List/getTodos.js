export const getTodos = async () => {
    const data = await fetch('http://localhost:3001/todos')
    const todos = await data.json()
    return todos
}
