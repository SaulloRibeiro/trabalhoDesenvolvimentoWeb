
let containerInputs = document.getElementsByClassName("container-inputs");
let containerEmail = containerInputs[0];
let containerSenha = containerInputs[1];

let elementoEmail = document.getElementById("emailID");
let elementoSenha = document.getElementById("senhaId");

let msgsError = document.getElementsByTagName("P");
let msgErrorEmail = msgsError[0];
let msgErrorSenha = msgsError[1];


function validarEmail(){
    let regx = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    
    let isVerdadeiro = regx.test(elementoEmail.value);

    if(isVerdadeiro){
        msgErrorEmail.style.display = "none";
        containerEmail.style.border = "1px solid rgb(179, 178, 178)";
    }
    else{
        msgErrorEmail.style.display = "block";
        containerEmail.style.border = "1px solid red";
    }

    return isVerdadeiro;
}


function verificarCampoSenha(){
    let senha = elementoSenha.value.trim();

    if(senha.length > 0){
        msgErrorSenha.style.display = "none";
        containerSenha.style.border = "1px solid rgb(179, 178, 178)";
    }
    else{
        msgErrorSenha.style.display = "block";
        containerSenha.style.border = "1px solid red";
    }

    return senha.length > 0;
}


function verificarFormulario(){
    let btnEntrar = document.getElementById("logar");

    if(validarEmail() && verificarCampoSenha()){
        btnEntrar.disable = false;
    }
    else{
        btnEntrar.disable = true;
    }
}
















function mostrarOuEsconderSenha(){
    let iconeOlho = document.getElementById("olho");

    if(elementoSenha.type === "password"){
        iconeOlho.className = "fa-solid fa-eye";
        elementoSenha.setAttribute("type", "text");
    }
    else{
        iconeOlho.className = "fa-regular fa-eye-slash";
        elementoSenha.setAttribute("type", "password");
    }
}




