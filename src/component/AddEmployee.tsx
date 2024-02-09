import { useState } from "react";
import { IEmployee } from "./Employee.type";

type Props = {

    onBackBtnClickHandle : () => void,
    onSubmitClickHandle : (data: IEmployee) => void
}

const AddEmployee = (props : Props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const {onBackBtnClickHandle, onSubmitClickHandle} = props

    const onFirstNameChangeHandle = (e: any) => {
        setFirstName(e.target.value)
    }

    const onLastNameChangeHandle = (e: any) => {
        setLastName(e.target.value)
    }

    const onSubmitBtnClickHandle = (e: any) => {

        e.preventDefault();
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName
        }
        onSubmitClickHandle(data);
        onBackBtnClickHandle();
    }

    return <>
        <form onSubmit={onSubmitBtnClickHandle}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" value={firstName} onChange={onFirstNameChangeHandle}/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text" value={lastName} onChange={onLastNameChangeHandle}/>
        
            <button type="submit">Add</button>
            <button onClick={onBackBtnClickHandle}>Back</button>
        </form>
    </>;
};

export default AddEmployee;

export enum ChangePage{
    list,
    add,
    edit
}