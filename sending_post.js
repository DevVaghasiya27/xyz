const createTodo = async (todo) => {
    let option = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', option)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
        title: 'Dev1',
        body: 'Vaghasiya1',
        usedId: 233,
    }
    let todo1 = await createTodo(todo)
    console.log(todo1)
    // for our id 101
    console.log(await getTodo(101))
    // for random id 50
    console.log(await getTodo(50))
}

mainFunc()