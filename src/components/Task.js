import { FaTimes} from 'react-icons/fa'

const Task=(props)=>{
    return (
        <div className="task">
            <h3> {props.text} <FaTimes style={{
                color: 'red',
                cursor: "pointer"
            }} onClick={()=>props.onDelete(props.key)}/></h3>
            <p>{props.day}</p>
            <p>{props.reminder==true?"remind": "don't remind"}</p>
        </div>
    )
}

export default Task