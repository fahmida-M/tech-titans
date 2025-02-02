document.addEventListener("DOMContentLoaded", () => {
    // Sample doctor data
    const doctor = {
        name: "Dr.Muhammad Musthafa",
        speciality: "Chief Intervational Cardiologist",
        available: true
    };

    document.getElementById("doctorName").textContent = doctor.name;
    document.getElementById("speciality").textContent = doctor.speciality;
    const availabilitySpan = document.getElementById("availability");

    if (doctor.available) {
        availabilitySpan.textContent = "Available";
        availabilitySpan.classList.add("available");
    } else {
        availabilitySpan.textContent = "Not Available";
        availabilitySpan.classList.add("unavailable");
        document.getElementById("bookBtn").disabled = true;
    }
});