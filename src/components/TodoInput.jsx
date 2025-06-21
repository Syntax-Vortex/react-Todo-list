import { useState } from "react";

export function TodoInput(props){
    const { handleAddingTodos } = props;

    const [inputValue, setInputValue] = useState('');

    return(
        <div className="input-container">
            <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Add Task"></input>
            <button onClick={()=>{
                if(!inputValue) {return}
                handleAddingTodos(inputValue);
                setInputValue('');
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}