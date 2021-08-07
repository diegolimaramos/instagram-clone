let inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', validaLogin);

let inputPassword = document.querySelector('#password');
inputPassword.addEventListener('keyup', validaLogin);

let btnEntrar = document.querySelector('#btnEntrar');
btnEntrar.addEventListener('click', entrar);

email.focus();


function validaLogin(){
    let valueEmail = inputEmail.value;
    let valuePassword = inputPassword.value;
    
    if(valueEmail.length != '' && valuePassword.length != ''){
        btnEntrar.removeAttribute('disabled');
        btnEntrar.classList.add('active');
    } else{
        btnEntrar.classList.remove('active');
        btnEntrar.setAttribute('disabled', 'disabled');
    }
}

function entrar(e){
    e.preventDefault();

    window.location.href = "loading.html";
}