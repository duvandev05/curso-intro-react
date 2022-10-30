import React from "react";
import {ReactComponent as CheckMark} from './check-mark-circle-line-icon.svg';
import {ReactComponent as DeleteMark} from './recycle-bin-line-icon.svg';
import './TodoIcon.css';

const iconTypes={
    "check": color =>(
        <CheckMark className="Icon-svg Icon-svg--check" fill={color} />        
        ),
    "delete": color =>(
        <DeleteMark className="Icon-svg Icon-svg--delete" fill={color}/>
        ),
};

function TodoIcon({type, color='gray', onClick}){  

    return (
        <span 
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
         {iconTypes[type](color)}   
        </span>
    );
};

export { TodoIcon };
