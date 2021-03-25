import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {useState, useEffect } from 'react'

function App() {
  const [showAddTask,setShowAddTask]= useState(false)
  const [tasks, setTasks]=useState([])

useEffect(()=>{
  const getTasks= async()=> {
    const tasksFromServer=await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
},[])

const fetchTasks= async()=> {
  const res=await fetch("http://localhost:5000/tasks")
  const data=await res.json()

  return data
}

const deleteTask=async (id)=> {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: `DELETE`,
  })
  setTasks(tasks.filter((task)=>task.id!==id))
}

const addTask= async (task)=>{
  const res= await fetch("http://localhost:5000/tasks",{
    method: "POST" ,
     headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(task)
  })

  const data= await res.json()
  setTasks([...tasks, data])
}

/*
const addTask=(task)=>{
  const id= Math.floor(Math.random()*1000)+1 
  const newTask= {id, ...task}
  setTasks([...tasks,newTask])
}
*/
//figure out how does it work
/*
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
*/
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id? {...task, reminder:!task.reminder}:task))
}

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
      />: "There is no tasks to show"}
    </div>
  )
}


export default App;
