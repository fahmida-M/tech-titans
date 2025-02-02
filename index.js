document.getElementById("generateOtp").addEventListener("click", function() {
    let phoneNumber =
document.getElementById("phone").Value;

    if (phoneNumber .length === 10) {
localStorage.setItem("userPhone",phoneNumber);
            window.location.href = "otp.html";

document.getElementById("otpMessage").in
nerText = "OTP sent to " + phoneNumber;
document.getElementById("otpMessage").style.color = "green";
    }else {

document.getElementById("otpMessage").in
nerText = "Enter a valid 10-digit phoneNumber!";

document.getElementById("otpMessage").style.color = "red";
    }
});