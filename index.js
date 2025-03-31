console.log("Script Loaded");
// Update text when exiting fullscreen
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        fullscreenDiv.textContent = "Fullscreen";
    }
});

function updateDateTime() {
    const timeDisplay = document.querySelector(".time-display");
    const dateDisplay = document.querySelector(".date-display");

    const now = new Date();

    // Format time (HH:MM)
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    timeDisplay.textContent = `${hours}:${minutes}`;

    // Format date (Day Abbreviation DD MMM YYYY)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayName = days[now.getDay()];
    const day = now.getDate().toString().padStart(2, "0");
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    dateDisplay.textContent = `${dayName} ${day} ${month} ${year}`;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to set immediately