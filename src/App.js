import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {useState } from 'react'

function App() {
  const name= 'First attempt'
  const [tasks, setTasks]=useState([
    {
        id: 1,
        text: "Doctors appointment",
        day: "26.06.2021",
        reminder: true,
    },
    {
        id: 2,
        text: "Shopping",
        day: "26.06.2021",
        reminder: false,
    },
    {
        id: 3,
        text: "Gardening",
        day: "27.06.2021",
        reminder: true
    }
])

const addTask=(task)=>{
  console.log(task)
}

//figure out how does it work
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id? {...task, reminder:!task.reminder}:task))
}

  return (
    <div className="container">
      <Header title={name}/>
      <AddTask onAdd={addTask}/>
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
      />: "There is no tasks to show"}
    </div>
  )
}


export default App;
