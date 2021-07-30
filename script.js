const loginbtn = document.getElementById("loginbtn");

loginbtn.addEventListener('click',function(event){
    const welcomePage=document.getElementById("welcomePage");
    welcomePage.style.display="none";
    const trasenctionArea=document.getElementById("Transiction-area");
    trasenctionArea.style.display="block";

})