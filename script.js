'use strict';

const btnSubmit = document.getElementById('submitMail');
// console.log(btnSubmit);
// console.log(mailAdress);
// mailAdress = mailAdress.value
// console.log(mailAdress);

function emailVerif(e){
    e.preventDefault();
    
    let mailAdress = document.getElementById('email').value;
    // console.log(mailAdress);
    if (mailAdress.includes('@')){
        // console.log("object");
        let mailInput = document.getElementById('email');let warningIcon = document.getElementById('iconWarning')
        let error = document.getElementById('error')
        mailInput.style.border="1px solid red";
        warningIcon.style.display='none';
        error.style.display='none';
        mailInput.style.border="1px solid hsl(0deg 36% 70% / 50%)";
    }
    else
    {
        let mailInput = document.getElementById('email');
        let warningIcon = document.getElementById('iconWarning')
        let error = document.getElementById('error')
        mailInput.style.border="1px solid red";
        warningIcon.style.display='block';
        error.style.display='block';

    }

}

btnSubmit.addEventListener('click', emailVerif);

function responsive(){
    let img = document.createElement('img');
    img.src = "./images/hero-mobile.jpg";
    // console.log(img);

    let divHeader = document.getElementsByClassName('header');
    divHeader = divHeader[0];
    // console.log(divHeader);

    divHeader.insertAdjacentElement('afterend',img);

    let imgRemove = document.getElementById('img');
    imgRemove.remove();
}

if (screen.width <=375){
    responsive();
}