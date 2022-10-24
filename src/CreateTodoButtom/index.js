import React from "react";
import './CreateTodoButtom.css';

function CreateTodoButtom(props){
   const onClickButtom = () =>{
    props.setOpenModal(true);
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