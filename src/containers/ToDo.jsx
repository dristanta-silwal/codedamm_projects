import React, { useState } from 'react'

let globalID = 0

const ToDo = () => {
    const [task, setTask] = useState("")
    const [todos, setToDos] = useState([])

    function createToDo(event) {
        event.preventDefault()
        // console.log(task);
        setToDos(oldToDos => {
            setTask('')
            return [...oldToDos, { todo: task, id: globalID++ }]
        })
    }

    // function tryCheckForEnterKey(e) {
    //     if (e.keyCode === 13) {
    //         createToDo()
    //     }
    // }

    function deleteItem(itemID) { 
        // console.log(itemID)
        setToDos(oldToDos => oldToDos.filter(item => item.id !== itemID))
    }

    return (
        <div className='text-center fix_height'>
            <h1 className='text-4xl font-mono my-4'>To Do App</h1>
            <form onSubmit={createToDo}>
                <input
                    // onKeyDown={tryCheckForEnterKey}
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
                <button type='submit' className='bg-gray-600 text-zinc-400'>Create ToDos</button>
            </form>
            <ul>
                {todos.map((item) => {
                    return <div key={item.id} className="question flex m-4 lg:mx-20 justify-between  ">
                        <li className='text-lg font-bold font-mono m-2'>{item.todo}</li>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </div>
                })}
            </ul>
        </div>
    )
}

export default ToDo