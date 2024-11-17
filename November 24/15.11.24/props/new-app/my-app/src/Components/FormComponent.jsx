const FormComp= (props)=>{

const updateChoise = (e)=>{
     console.log(e.target.innerText);
     props.setUserChoise(e.target.innerText)
     props.setDidUserSubmit(true)
}

    return(
    <div className="container-form">
    <span onClick={updateChoise}>1</span>  
    <span onClick={updateChoise}>2</span>  
    <span onClick={updateChoise}>3</span>  
    <span onClick={updateChoise}>4</span>  
    <span onClick={updateChoise}>5</span>  
    </div>
)}

export default FormComp