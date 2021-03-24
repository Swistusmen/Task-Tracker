import Task from "./Task"

const Tasks=(props)=>{
    return (
        <>
        {props.tasks.map((task)=>(
            <Task key={task.id} text={task.text}></Task>
        ))}
        </>
    )
}

export default Tasks