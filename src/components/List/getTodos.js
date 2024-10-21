export const getTodos = async () => {
    const data = await fetch('https://dummyjson.com/todos')
    const { todos } = await data.json()
    return todos
}
