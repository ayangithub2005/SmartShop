document.querySelector("form").addEventListener("submit", goForOTP)

function goForOTP(event){
    event.preventDefault();

    let usrCardNo = document.querySelector("#CardNo").value;
    let usrName = document.querySelector("#NameOnCard").value;
    let usrCVV = document.querySelector("#Cvv").value;
    let usrDOE = document.querySelector("#Doe").value;

    if(usrCardNo == 123456781234 && usrCVV == 123){
        alert("Authentication Successful!");
        window.location.href="./otp.html";  // ✅ fixed path + lowercase
    } else {
        alert("WRONG CREDENTIALS!");
        window.location.reload();
    }
}
