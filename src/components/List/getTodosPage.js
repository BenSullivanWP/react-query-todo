export const getTodosPage = async (page) => {
    const data = await fetch(`http://localhost:3001/todos?_page=${page}&_per_page=5`)
    const todos = await data.json()
    return todos
}
