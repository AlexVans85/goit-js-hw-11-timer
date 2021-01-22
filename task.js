// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

// const secs = Math.floor((time % (1000 * 60)) / 1000);


// console.log(presentTime);


// setInterval(() => {
// const targetDate = new Date('Jul 17, 2021')
// const time = targetDate - presentTime;
// const x = pad(Math.floor((time % (1000 * 60)) / 1000));
// seconds.textContent = `${x}`}
//     // console.log(time)}
//     , 1000)

// const seconds = document.querySelector('.value')
// // console.log(seconds);

// function pad(value) {
//     return String(value).padStart(2,'0')
// }




const countertDownTimer = {
    
timer(){
    const targetDate = new Date('Jul 17, 2021');
    setInterval(() => {
        const currentTime = Date.now();
        const time = targetDate - currentTime;

        updateTimer(time)
        
    }, 1000);
}
}

countertDownTimer.timer()

function updateTimer(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));    
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    const daysTimer = document.querySelector('[data-value="days"]')
    const hoursTimer = document.querySelector('[data-value="hours"]')
    const minsTimer = document.querySelector('[data-value="mins"]')
    const secsTimer = document.querySelector('[data-value="secs"]')

    daysTimer.textContent = `${days}`;
    hoursTimer.textContent = `${hours}`;
    minsTimer.textContent = `${mins}`;
    secsTimer.textContent = `${secs}`;

}

function pad(value) {
    return String(value).padStart(2,'0')
}