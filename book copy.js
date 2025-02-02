// Function to open the booking modal
function openBooking() {
    document.getElementById("bookingBox").style.display = "flex";
}

// Function to close the booking modal
function closeBooking() {
    document.getElementById("bookingBox").style.display = "none";
}

// Event listener for form submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let name = document.getElementById("patientName").value;
    let date = document.getElementById("appointmentDate").value;

    if (name && date) {
        alert("Appointment booked for ${name} on ${date}");
        closeBooking();
    } else {
        alert("Please fill in all fields.");
    }
});

