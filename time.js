// main.js

// Function to update the clock
function updateClock() {
    const clockElement = document.getElementById("event-clock");
    const now = new Date();
    
    // Format time as HH:MM AM/PM
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const timeString = `${hours}:${minutes} ${ampm}`;
    
    clockElement.innerHTML = timeString;
}

// Function to update the date
function updateDate() {
    const dateElement = document.getElementById("event-date");
    const now = new Date();
    
    // Format date as "Month Day, Year"
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);
    
    dateElement.innerHTML = date;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock and date immediately
updateClock();
updateDate();