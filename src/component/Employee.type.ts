export interface IEmployee{
    
    id : string,
    firstName : string,
    lastName : string,

}

const totalEmployeeList : IEmployee[] = [{

    id: new Date().toJSON().toString(),
    firstName: "Ciao",
    lastName: "Pippo",
}];

export default totalEmployeeList;