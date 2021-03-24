import Task from "./Task"

const Tasks=(props)=>{
    return (
        <>
        {props.tasks.map((task)=>(
            <Task id={task.id} text={task.text} day={task.day} reminder={task.reminder} onDelete={props.onDelete} onToggle={props.onToggle}
            />
        ))}
        </>
    )
}

export default Tasks