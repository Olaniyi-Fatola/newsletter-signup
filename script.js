const emailForm = document.forms["emailForm"];
const emailInput = document.getElementById("emailInput");
const valid = document.getElementById("valid");
const emailPattern = /^[A-Za-z\._\-0-9]*[@]{A-Za-z]*[\.][a-z]{2,4}$/;


        emailForm.addEventListener('submit', function(e){
            e.preventDefault();

            
            let emailValue = emailInput.value;
            localStorage.setItem('email-Value', emailValue);
    
            window.location.href = 'success.html';
        });

        let subscribe = document.getElementById("Subscribe");

        subscribe.onclick = function errorMessage(){

            let emailValue = emailInput.value;
            if(emailValue.match(emailPattern)){
                valid.className = "";
                emailInput.className = "";
            }
            else{
                emailInput.className = "error";
                valid.className = "error";
            }};