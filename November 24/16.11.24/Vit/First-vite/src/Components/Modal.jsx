
const Modal = ({statusOpen,children})=>{
console.log(statusOpen);

    return (statusOpen? (
        <div >{children}</div>
    ):alert("lkjhigyutf")
  )
}

export default Modal