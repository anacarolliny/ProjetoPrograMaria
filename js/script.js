document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  var nome = form1.nome.value;
  var email = form1.email.value;
  var telefone = form1.telefone.value;


  if (nome == "") {
    alert('Preencha o campo com seu nome');
    form1.nome.focus();
   
  }

  if (email == "") {
    alert('Preencha o campo com seu email');
    form1.email.focus();
    
  }

  if (telefone == "") {
    alert('Preencha o campo com sua senha');
    form1.telefone.focus();
    
  }
  else
  {
    alert("Prontinho! Você receberá as informações por email");
  }

}
  
/*Funções do Site que irão necessitar de Javascript

 - Regras de intereção com o usuário
 1.Envia o formulário somente se os campos nome e email estiverem preenchidos.
 2.Se um dos campos não estiver preenchido, não envia o formulário.

 Algoritmo :
 se os campos de nome e email estiverem preenchidos 
  envie dados
 senao
  peça a usuaria que preencha os campos nome e email 
  if ( campos de nome estiver preenchido e email estiver preenchido){
    envie os dados
  }else{
    peça usuaria que preencha os campos nome e email
  }

  campo de nome Operador && = E e campo de email == true >> dados enviados

  Portugues - pegue o elemento html que tem o id nome lá na minha página 
  Javascript - document.getElementByID("nome")

  document : a pagina html(index)
  getElementByID : pegar o elemento por id
  ("nome do id") : é o elemento que ele tem que pegar por id   

if(document.getElementById("nome").value estiver diferente de vazio && document.getElementById("email").value estiver diferente de ""){
  envie os dados ***
}else{
  peça a usuária que preencha os campos nome e email ***
}
agora falta ter a ação em Javascript

document.getElementById("nome").value = javascript pega o valor que tem nesse id que está no documento html
.value pega o valor

meu algorimo pede que eu teste o que estiver preenchido que tambem serve pra diferente de vazio, agora o algoritmo vai ter que usar operadores relacionais que testam o igual == ou diferente !=

assim o javascript consegue testar se o valor do campo nome e email é diferente de =""(vazio)

if(document.getElementById("nome").value !="" && document.getElementById("email").value !="" {

}else{

}

lembrando que eu quero que essa verificacao aconteça quando eu preencher os campos e clique no botao enviar ai sim o codigo do javascript tem que rodar
pra isso o javascript precisa ficar sabendo que o botao foi clicado
toda vez que o botao é clicado ele cria um evento para o javascript, e esse evento é ouvido por ele e como ele ouve ? com o comando EventListener ( Ouvidor de Eventos )

O EventListener precisa de 3 informações:
1. De onde virá o evento (Do botão)
2. Qual evento ele deve ouvir (Quando clicar no botão)
3. O que ele deve fazer quando o evento acontecer (Fazer a verificação dos campos)

em javascript escrevemos assim :

dequemviráoevento.addEventListener("Evento"), oquedevefazer)

O “jeitão” de usar o Listener: de onde virá o evento, seguido de ponto, o nome do método addEventListener, abrir parenteses, incluir o nome do evento entre aspas, vírgula para separar, indicação do que deve ser feito.


Todo esse codigo é chamado de função porque é um trecho especifico de uma parte de ação do meu site e para que ela seja chamada chamamos com o function

Depois de todo a função montada para o ouvidor do javascript nós devemos linkalo com noss html

  */








