






function updateTimer(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    // тут еще все в кучу слепить нужно и повесить как то на текст контенкт
    // нужно попробовать через вальюэ
    // seconds.textContent = `${x}`}

}

function pad(value) {
    return String(value).padStart(2,'0')
}