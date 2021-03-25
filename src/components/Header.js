import Button from "./Button"

const Header = (props) => {
    return (
        <header>
            <Button onClick={props.onAdd} color="green" text="Add"/>
        </header>
    )
}

export default Header

