

const Button = ({count,setCount,children})=>{
console.log(children.props.children[1]);

    return(
    <button onClick={() => setCount((count) => count + 1)}>
    {children}
    </button>
    )
}

export default Button