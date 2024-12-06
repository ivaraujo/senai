let codBarras = document.querySelector("#codbarras");
let nomeProdutos = document.querySelector("#nomep");
let marcaProdutos = document.querySelector("#marcap");
let precoProdutos = document.querySelector("#precop");
let volumeProdutos = document.querySelector("#volumep");
let mercadoProdutos = document.querySelector("#mercadop");
const cadastro = document.querySelector("#register");

cadastro.addEventListener('click',function cadastrar(){
    alert(codBarras.value);
    alert(nomeProdutos.value);        
});