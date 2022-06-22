// Your code here
function createEmployeeRecord(testEmployee){
    let employeeObject = {}
    for(let item of testEmployee )
    {
        employeeObject["firstName"] = testEmployee[0]
        employeeObject["familyName"]  = testEmployee[1]
        employeeObject["title"] = testEmployee[2]
        employeeObject["payPerHour"] = testEmployee[3]
    }
    employeeObject["timeInEvents"] = [ ]
    employeeObject["timeOutEvents"] = [ ]
return employeeObject
}
function createEmployeeRecords(myArray){
    let arrayToBeReturned = []
    myArray.forEach(element => {
            arrayToBeReturned.push(createEmployeeRecord(element))    
    });
 return arrayToBeReturned       
}

function createTimeInEvent(eRecordWithoutTimeIn,dateStamp = "YYYY-MM-DD HHMM"){
    let[siku, wakati] = dateStamp.split(" ")
    eRecordWithoutTimeIn.timeInEvents.push({
    type : "TimeIn",
    hour : parseInt(wakati),
    date :  siku
})
 return  eRecordWithoutTimeIn
}
function createTimeOutEvent(eRecordWithoutTimeOut,dateStamp = "YYYY-MM-DD HHMM"){
    let [siku, wakati] = dateStamp.split(" ")
    eRecordWithoutTimeOut.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(wakati),
        date : siku
    })

return eRecordWithoutTimeOut
}

function hoursWorkedOnDate(employeeWorkedHours){
     return(employeeWorkedHours.timeOutEvents[0].hour - employeeWorkedHours.timeInEvents[0].hour)/100
}
function wagesEarnedOnDate(employeeWorkedHours){
    return hoursWorkedOnDate(employeeWorkedHours) * employeeWorkedHours["payPerHour"]
}
function allWagesFor(employeeRecords){
    let dates = employeeRecords.timeInEvents.map((employee)=>{ return employee.date})
    let payment = dates.reduce((data)=>{return data + wagesEarnedOnDate(employeeRecords)}, 0)
return payment
}