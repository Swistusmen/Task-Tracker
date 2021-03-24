import Header from "./components/Header"
import Task from "./components/Tasks"
import {useState } from 'react'

function App() {
  const name= 'Brad'
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
        dat: "27.06.2021",
        reminder: true
    }
])

  return (
    <div className="container">
      <Header title={name}/>
      <Task tasks={tasks}/>
    </div>
  )
}


export default App;
