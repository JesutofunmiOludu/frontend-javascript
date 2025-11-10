function isDirector(employee: Director | Teacher): employee is Director{
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher){
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else{
        return employee.workTeacherTasks();
    }

}

export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}
