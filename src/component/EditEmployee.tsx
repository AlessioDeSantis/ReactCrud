import { IEmployee } from "./Employee.type"
import { useState } from "react"

type Props = {
    onBackBtnClickHandle : () => void,
    onEditDataHandle : (data: IEmployee) => void,
    data: IEmployee
}

const EditEmployee = (props: Props) => {

    const {data, onBackBtnClickHandle, onEditDataHandle} = props

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);

    const onFirstNameChangeHandle = (e: any) => {
        setFirstName(e.target.value)
    }

    const onLastNameChangeHandle = (e: any) => {
        setLastName(e.target.value)
    }

    const onSubmitBtnClickHandle = (e: any) => {

        e.preventDefault();
        const updateData: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName
        }
        onEditDataHandle(updateData);
        onBackBtnClickHandle();
    }


    return <>
        <form onSubmit={onSubmitBtnClickHandle}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" value={firstName} onChange={onFirstNameChangeHandle}/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text" value={lastName} onChange={onLastNameChangeHandle}/>
        
            <button type="submit">Edit</button>
            <button onClick={onBackBtnClickHandle}>Back</button>
        </form>
    </>
}

export default EditEmployee