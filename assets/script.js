/*
* var - variavel de escopo global, sendo escopo como se fossem as fronteiras do código
* let - variavel de escopo local, podendo ser acessado uma única vez
* const - variavel de escopo global, porem com um valor que nao pode ser mudado 
* ao longo do programa
*/

// JS é Case Sensitive, ou seja, reconhece letras maiúsculas e minúsculas

/*
* é possível acessar um item:
* por Tag: getElementByTagName()
* por Id: getElementById()
* por Nome: getElementsByName()
* por Classe: getElementsByClassName()
* por Seletor: querySelector() - melhor prática para acessar o DOM no JS
*/

/* 
* criando variaveis e referenciando os valores dos inputs que as mesmas receberão 
* através do DOM 
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') //é preciso colocar # qnd uso o querySelector
let assunto= document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let img = document.querySelector('#img')

// aumentando o campo do input do formulário

nome.style.width = '23%'
email.style.width = '23%'

// utilizando funções

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){ //value - valor no campo de nome; length - tamanho;
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = ("Nome válido!")
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){ // validando caso não haja o @ no email do user
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'

    } 
    else{
        txtEmail.innerHTML = ("E-mail válido!")
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha o formulário corretamente!')
    }
}

function imgZoom(){
    img.style.width = '1000rem'
    img.style.width = '1000rem'
}

function imgNormal(){
    img.style.width = '300rem'
    img.style.width = '200rem'

}
