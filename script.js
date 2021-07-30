// Login Box area
const loginbtn = document.getElementById("loginbtn");

loginbtn.addEventListener('click', function (event) {
    const welcomePage = document.getElementById("welcomePage");
    welcomePage.style.display = "none";
    const trasenctionArea = document.getElementById("Transiction-area");
    trasenctionArea.style.display = "block";

})


// Transaction AREA

// deposit
const addDeposit = document.getElementById("addDeposit");
addDeposit.addEventListener("click", function () {
    // Taking input from Html Input form
    const depositAmount = document.getElementById("depositAmount").value;
    const rcvValue = parseFloat(depositAmount);
    console.log(rcvValue);
    updateMoney("showDeposit", rcvValue);
    updateMoney("show", rcvValue);
    document.getElementById("depositAmount").value = "";


})



// withdraw
const withdrawAmount = document.getElementById("withdraw");
withdrawAmount.addEventListener("click", function () {
    const withdrawNumber = document.getElementById("withdrawAmount").value;
    const makeAmount = parseFloat(withdrawNumber);
   updateMoney("showWithdraw", makeAmount);
   updateMoney("show", -1*makeAmount);
   document.getElementById("withdrawAmount").value = "";

})


// update function
function updateMoney(id, depositAmount) {
    // taking input from HTML Tag
    const currentShowingAmount = document.getElementById(id).innerText;
    const makeShowingAmount = parseFloat(currentShowingAmount);
    const total = depositAmount + makeShowingAmount;
    document.getElementById(id).innerText = total;

}