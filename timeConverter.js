function timeConvertor(time) {
    var PM = time.match('PM') ? true : false

    console.log(PM)
    
    time = time.split(':')
    console.log(time);

    var min = time[1]
    
    if (PM) {
        var hour = 12 + parseInt(time[0],10)
        console.log(hour)
        var sec = time[2].replace('PM', '')
    } else {
        var hour = 12 - parseInt(time[0],10)
        var sec = time[2].replace('AM', '')       
    }
    
    console.log(hour + ':' + min + ':' + sec)
}
timeConvertor('12:45:05PM');