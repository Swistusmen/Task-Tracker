import Button from "./Button"

const Header = (props) => {
    return (
        <header>
            <Button onClick={props.onAdd} color={props.showAdd? "grey":"green"} text={props.showAdd?"Close":"Add"}/>
        </header>
    )
}

export default Header

