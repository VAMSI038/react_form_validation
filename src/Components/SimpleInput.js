import React from "react";
import { useState} from "react";
const SimpleInput = () => {
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [inputAgeIsTouched,setInputAgeIsTouched]=useState(false);
    const [inputNameIsTouched,setInputNameIsTouched]=useState(false);
    const inputNameIsValid=inputName.trim() !=='';
    const inputNameIsInvalid= (!inputNameIsValid && inputNameIsTouched);
    const inputAgeIsValid=inputAge.trim() !=='';
    const inputAgeIsInvalid=(!inputAgeIsValid && inputAgeIsTouched);

    let formIsValid=false;
    if(inputNameIsValid && inputAgeIsValid){
        formIsValid=true;
    }

    const nameHandler = (event) => {
        setInputName(event.target.value);
    };
    const nameBlurHandler =(event)=>{
        setInputName(event.target.value);
        setInputNameIsTouched(true);
    };
    const ageHandler = (event) => {
        setInputAge(event.target.value);
    };
    const ageBlurHandler=(event)=>{
        setInputAge(event.target.value);
        setInputAgeIsTouched(true);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        setInputNameIsTouched(true);
       
        if(!inputNameIsValid ||!inputAgeIsValid){
            formIsValid=false;
            return;
        }
        const UserData = {
            name: inputName,
            age: inputAge

        };
        console.log(UserData);
        setInputName('');
        setInputNameIsTouched(false);
        setInputAge('');
        setInputAgeIsTouched(false);
        formIsValid=false;

    };
    

    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" value={inputName} onChange={nameHandler} onBlur={nameBlurHandler}/>
                {inputNameIsInvalid && <p className="error-text">Enter Name</p>}
            </div>
            <div className="form-control">
                <label>Age</label>
                <input type="number" id="age" value={inputAge} onChange={ageHandler} onBlur={ageBlurHandler}/>
                {inputAgeIsInvalid &&<p className="error-text">Enter Age</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};
export default SimpleInput;