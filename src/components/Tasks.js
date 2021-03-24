import Task from "./Task"

const Tasks=(props)=>{
    return (
        <>
        {props.tasks.map((task)=>(
            <Task key={task.id} text={task.text} day={task.day} reminder={task.reminder} onDelete={props.onDelete}
            />
        ))}
        </>
    )
}

export default Tasks