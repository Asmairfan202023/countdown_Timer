// // countdown.ts
const targetSeconds = 600; // 10 minutes
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
function displayCountdown(totalSeconds) {
    let remainingSeconds = totalSeconds;
    const intervalId = setInterval(() => {
        if (remainingSeconds <= 0) {
            console.log("Countdown complete!");
            clearInterval(intervalId);
            return;
        }
        console.log(`Time left: ${formatTime(remainingSeconds)}`);
        remainingSeconds -= 1;
    }, 1000);
}
// Run the countdown
displayCountdown(targetSeconds);
export {};
