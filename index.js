document.addEventListener('DOMContentLoaded', function() {
    const getCurrentDay = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[new Date().getDay()];
    };

    const getCurrentTimeUTC = () => {
        let date = new Date();
        let formatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        return formatter.format(date);
    };

    document.querySelector('.day-data-info').textContent = getCurrentDay();

    document.querySelector('.time-data-info').textContent = getCurrentTimeUTC();
});
