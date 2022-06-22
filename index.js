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
function hoursWorkedOnDate(employeeRecord, dateWorked){
let employeeTimeInEvent = employeeRecord.timeInEvents.find( (employeeRecord) =>{return employeeRecord.date === dateWorked})
let employeeTimeOutEvent = employeeRecord.timeOutEvents.find((employeeRecord)=>{return employeeRecord.date === dateWorked})
return (employeeTimeOutEvent.hour - employeeTimeInEvent.hour) / 100
}

function wagesEarnedOnDate(employeeRecord, dateWorked){
    let earnedWages = hoursWorkedOnDate(employeeRecord, dateWorked) * employeeRecord.payPerHour
    return parseFloat(earnedWages.toString())
}

function allWagesFor(employeeRecord){
    let DatestobePaid = employeeRecord.timeInEvents.map((employeeRecord)=>{return employeeRecord.date})
    let pay = DatestobePaid.reduce((data, date)=>{return data + wagesEarnedOnDate(employeeRecord,date)}, 0)
return pay
}
function calculatePayroll(arrayOfEmployeeRecords){return arrayOfEmployeeRecords.reduce((data, record)=>{
        return data + allWagesFor(record)}, 0)
}