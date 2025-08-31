let emailForm = document.forms["emailForm"];
        let emailInput = document.getElementById("emailInput");
        let validError = document.getElementById("validError");
        let emailPattern = /^[A-Za-z\._\-0-9]*[@]{A-Za-z]*[\.][a-z]{2,4}$/;


        emailForm.addEventListener('submit', function(e){
            e.preventDefault();

            
            let emailValue = emailInput.value;
            localStorage.setItem('email-Value', emailValue);
    
            window.location.href = '../page-two/success.html';
        });

        let subscribe = document.getElementById("Subscribe");

        subscribe.onclick = function errorMessage(){

            let emailValue = emailInput.value;
            if(emailValue.match(emailPattern)){
                validError.innerHTML = "";  
            }
            else{
                emailInput.style.border = "0.1em solid #ff6257";
                validError.innerHTML = "Valid email required";
            }};