// Write your solution in this file
let employee = { name:"Sam"}
function updateEmployeeWithKeyAndValue(employee,key, value) {
    const updatedEmployee={...employee};
    updatedEmployee[key] = value;
    return updatedEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(emloyee, key, value){
    employee[key]=value;
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}