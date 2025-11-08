document.querySelector("#submit").addEventListener("click", placeOrder);
document.querySelector("input+p").addEventListener("click", resendOTP);

let cartArr = JSON.parse(localStorage.getItem('cartData')) || [];

function resendOTP(){
    window.location.reload();
    alert("One-time Password (OTP) is being sent to your registered mobile number!");
}

function placeOrder(){
    let Otp = document.querySelector("#otP").value;

    if(Otp == 123){
        alert("Order Placed Successfully! Thank You.");
        
        cartArr = [];
        localStorage.setItem("cartData", JSON.stringify(cartArr));

        // ✅ Correct redirect path for Vercel
        window.location.href = "./index.html";

    } else {
        alert("Entered Wrong One-time Password (OTP)!");
        document.querySelector("#otP").value = "";
    }
}
