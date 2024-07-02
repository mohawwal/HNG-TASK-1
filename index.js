function updateCurrentDay() {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.querySelector('[data-testid="currentDay"]').textContent = days[today.getDay()];
}

function updateCurrentTimeInUTC() {
    const now = new Date().toUTCString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = now;
}

setInterval(() => {
    updateCurrentDay();
    updateCurrentTimeInUTC();
}, 1000);
