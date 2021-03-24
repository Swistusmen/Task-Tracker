import Proptypes from "prop-types"

const Button=(props)=>{
    return(
        <button onClick={props.onClick} style={{backgroundColor: props.color}} className="btn">
            {props.text}
        </button>
    );
}

Button.defaultProps= {
    color: "grey",
    text: "Button"
}

Button.propTypes={
    text: Proptypes.string,
    color: Proptypes.string,
    onClick: Proptypes.func
}

export default Button