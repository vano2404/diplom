function timer (){

    let deadLine = "2019-12-18";

    let getTimeRemaning = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor((t /(1000 * 60 * 60 * 24))),
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours = Math.floor((t/(1000*60*60)));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }
    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            days = timer.querySelector('#days');
            console.log(days.textContent);
            let hours = timer.querySelector('#hours');
            console.log(hours.textContent);
            let minutes = timer.querySelector('#minutes');
            console.log(minutes.textContent);
            let seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock(){
            let t = getTimeRemaning(endtime);
            if (t.hours < 10){
                t.hours = '0' + t.hours;
            }
                if (t.minutes < 10) {
                    t.minutes = '0' + t.minutes;
                }
                    if (t.seconds < 10){
                        t.seconds = '0' + t.seconds;
                    }
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if(t.total <= 0){
                clearInterval(timeInterval);
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            }
        }
    }
    setClock('timer',deadLine);
}
// module.exports = timer;
export default timer;