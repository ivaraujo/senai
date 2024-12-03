let msgTexto = document.querySelector("#texto");
let caixaTexto = document.querySelector("#mensagem");
let botao = document.querySelector("#botao");


botao.addEventListener('click',function mensagem(){
    if(msgTexto.value == ""){
        caixaTexto.innerHTML = 
    "Por favor, preecha a caixa de texto!";
    }
    else{
        caixaTexto.innerHTML = 
        "Olá, "+msgTexto.value+"! Bem-vindo ao meu app.";
    }
    
});