import './Home.css'
import { useState } from 'react';
import totalEmployeeList, { IEmployee } from './Employee.type';
import EmployeeList from './EmployyeList';
import AddEmployee, { ChangePage } from './AddEmployee';
import EditEmployee from './EditEmployee';

const Home = () => {

    const [employeeList, setEmployeeList] = useState(
        totalEmployeeList as IEmployee[]);

    const [showPage, setShowPage] = useState(ChangePage.list);
    const [dataEdit, setDataEdit] = useState({} as IEmployee);

    const onAddEmployeeHandle = () => {

        setShowPage(ChangePage.add)
    }

    const showListPage = () => {

        setShowPage(ChangePage.list)
    }

    const addEmployee = (data: IEmployee) => {
        setEmployeeList([...employeeList, data]);
    }

    const editEmployee = (data: IEmployee) => {
        
        const filterData = employeeList.filter(x => x.id === data.id)[0];
        const indexOfRecord = employeeList.indexOf(filterData);
        const tempData = [...employeeList];
        tempData[indexOfRecord] = data;
        setEmployeeList(tempData);
    }

    const deleteEmployee = (data: IEmployee) => {
        const updatedList = employeeList.filter(employee => employee !== data);
        setEmployeeList(updatedList);
    }

    const editDataEmployee = (data: IEmployee) => {
        setShowPage(ChangePage.edit)
        setDataEdit(data)
    }

    return <>

        
        <h1>React CRUD</h1><br/><br/>

        {showPage === ChangePage.list && (
           <> 
                <button onClick={onAddEmployeeHandle}>Add Employee</button><br/>

                <EmployeeList 
                    list={employeeList} 
                    onClickDeleteHandle={deleteEmployee}
                    editEmployee={editDataEmployee}/>
            </>
        )}

        {showPage === ChangePage.add && 
            <AddEmployee onBackBtnClickHandle={showListPage} onSubmitClickHandle={addEmployee}/>
        }

        {showPage === ChangePage.edit &&
            <EditEmployee data={dataEdit} onBackBtnClickHandle={showListPage} onEditDataHandle={editEmployee}/>
        }



    </>
}

export default Home;