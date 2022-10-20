function ago(){
    return {
        getDateDifferenceInSeconds,
        getString
    }

    function getString(date1, date2){
        if(!date2){
            date2 = new Date(Date.now())
            if((date1 - date2) > 0){
                throw new Error("Given date should be before current date")
            }
        }
        
        let SECONDS_IN_A_MINUTE = 60
        let SECONDS_IN_AN_HOUR = SECONDS_IN_A_MINUTE * 60
        let SECONDS_IN_A_DAY = SECONDS_IN_AN_HOUR * 24
        let SECONDS_IN_A_MONTH = SECONDS_IN_A_DAY * 30
        let SECONDS_IN_A_YEAR = SECONDS_IN_A_MONTH * 12

        let seconds = getDateDifferenceInSeconds(date1, date2)

        if(seconds < SECONDS_IN_A_MINUTE){
            return `${seconds} ${seconds === 1 ? "second":"seconds"} ago`
        }
        if(seconds < SECONDS_IN_AN_HOUR){
            let minutes = Math.floor(seconds / SECONDS_IN_A_MINUTE)
            return `${minutes} ${minutes === 1 ? "minute":"minutes"} ago`
        }
        if(seconds < SECONDS_IN_A_DAY){
            let hours = Math.floor(seconds / 60 / 60)
            return `${hours} ${hours === 1 ? "hour":"hours"} ago`
        }
        if(seconds < SECONDS_IN_A_MONTH){
            let days = Math.floor(seconds / 60 / 60 / 24)
            return `${days} ${days === 1 ? "day":"days"} ago`
        }
        if(seconds < SECONDS_IN_A_YEAR){
            let months = Math.floor(seconds / SECONDS_IN_A_MONTH)
            return `${months} ${months === 1 ? "month":"months"} ago`
        }
        if(seconds >= SECONDS_IN_A_YEAR){
            let years = Math.floor(seconds / SECONDS_IN_A_YEAR)
            return `${years} ${years === 1 ? "year":"years"} ago`
        }
        return 1
    }

    function getDateDifferenceInSeconds(date1, date2){
        let dateDifferenceInMilliseconds = date1 - date2
        return Math.floor(Math.abs(dateDifferenceInMilliseconds / 1000))
    }
}

module.exports = ago