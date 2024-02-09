import './Home.css';
import { IEmployee } from './Employee.type';
import { useState } from 'react';
import Modal from './EmployeeModal';

type EmployeeProps = {

    list: IEmployee[],
    onClickDeleteHandle: (data: IEmployee) => void,
    editEmployee: (data: IEmployee) => void
}

const EmployeeList = (props: EmployeeProps) => {

    const {list, onClickDeleteHandle, editEmployee} = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null)

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data)
        setShowModal(true)
    }

    const onCLoseModal = () => {
        setShowModal(false)
    }

    return <>
        
        <h2>This is Employee List</h2>
        <br/>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {list.map(employee => {
            
            return (
                <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>
                        <button className="btn btn-delete" onClick={() => viewEmployee(employee)}>View</button>
                        <button className="btn btn-update" onClick={() => editEmployee(employee)}>Update</button>
                        <button className="btn btn-delete" onClick={() => onClickDeleteHandle(employee)}>Delete</button>
                    </td>
            </tr>
            );
            })}
       
            </tbody>
        </table>
        {showModal && dataToShow !== null && (<Modal onClose={onCLoseModal} data={dataToShow}/>)}
    </> 
}

export default EmployeeList;