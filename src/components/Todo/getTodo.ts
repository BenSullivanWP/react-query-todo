export const getTodo = async (id: string) => {
    const data = await fetch(`https://dummyjson.com/todos/${id}`)
    const todo = await data.json()
    return todo
}

