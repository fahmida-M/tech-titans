document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading

    let userProfile = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        bloodGroup: document.getElementById("bloodGroup").value,
        weight: document.getElementById("weight").value,
        photo: document.getElementById("photo").files[0] ? URL.createObjectURL(document.getElementById("photo").files[0]) : null
    };

    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    alert("Profile Saved!");
});
