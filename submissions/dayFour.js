//function will create a recurring alarm based on an input time in format hh:mm 
function setAlarm(alarmTime){
    let alarm = new Date();
    let [hour, minute] = alarmTime.split(":");
    alarm.setHours(hour);
    alarm.setMinutes(minute);
    let now = new Date();
    if(alarm < now){
        alarm.setDate(alarm.getDate() + 1);
    }
    let timeTillAlarm = alarm - now;
    console.log(timeTillAlarm)
    setTimeout(() => {
        console.log("Alarm Time!")
        setInterval(() => {
            console.log("Alarm Time!")
        } ,86400000)
    }, timeTillAlarm)
}

setAlarm("10:05")