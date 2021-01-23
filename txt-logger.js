const fs = require("fs");

var txt = {
    log: function ({
        title: title,
        log: log
    }) {
        var ndate = new Date()
        var date = `${ndate.getMonth() >= 9 ? ndate.getMonth() : "0"+ndate.getMonth()}/${ndate.getDay()+1 >= 9 ? ndate.getDay()+1 : "0"+(ndate.getDay()+1)}/${ndate.getFullYear()} - ${ndate.getHours() >= 9 ? ndate.getHours() : "0"+ndate.getHours()}:${ndate.getMinutes() >= 9 ? ndate.getMinutes() : "0"+ndate.getMinutes()}:${ndate.getSeconds() >= 9 ? ndate.getSeconds() : "0"+ndate.getSeconds()}.${ndate.getMilliseconds() >= 9 ? ndate.getMilliseconds() : "0"+ndate.getMilliseconds()}`
        if (!log) return console.log("ERR : This log does not contain information about its nature")
        if (!title) return console.log();
        else {
            fs.readFile('./log.txt', (err, result) => {

                if(result == undefined){
                    nlog = `${date} | ${title}: ${log}\n`;
                    fs.writeFile('./log.txt', nlog, () => {
                        console.log('New log writed')
                    })
                    return;
                }

                var nlog = result + `${date} | ${title}: ${log}\n`

                fs.writeFile('./log.txt', nlog, () => {
                    console.log('New log writed')
                })

            })
        }
    }
}
exports.log = txt.log;