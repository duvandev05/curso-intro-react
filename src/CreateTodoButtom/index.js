import React from "react";
import './CreateTodoButtom.css';

function CreateTodoButtom(props){
   const onClickButtom = () =>{
    props.setOpenModal(prevState => !prevState);
   }
   
    return(
        <button
         className="CreateTodoButton"
         onClick={onClickButtom}
         >
            +
        </button>
    );
}

export { CreateTodoButtom};