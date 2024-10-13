function padWithZeros(number) {
    return number < 10 ? '0' + number : number;
}

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // Set your target date manually
    const targetDate = new Date('December 31, 2023 23:59:59').getTime();

    const x = setInterval(function () {
        const now = new Date().getTime(),
            distance = targetDate - now;

        // Update countdown values with padded zeros
        document.getElementById("days").innerText = padWithZeros(Math.floor(distance / day));
        document.getElementById("hours").innerText = padWithZeros(Math.floor((distance % day) / hour));
        document.getElementById("minutes").innerText = padWithZeros(Math.floor((distance % hour) / minute));
        document.getElementById("seconds").innerText = padWithZeros(Math.floor((distance % minute) / second));

        // Stop the countdown when it reaches 0
        if (distance < 0) {
            clearInterval(x);
            console.log('Countdown has reached 0.');
        }
    }, 1000);
})();
