import Button from "./Button"

const MyFun=()=>{
    console.log("Hello")
}

const Header = (props) => {
    return (
        <header>
            <h1>Task Tracker {props.title}</h1>
            <Button onClick={MyFun} color="green" text="Add"/>
        </header>
    )
}

export default Header

