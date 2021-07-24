document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
      document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
  alert("Obrigadx! Dados registrados!")
}
  else{ 
  alert("Preencha os campos nome, e-mail e telefone, por favor") 
      }
}

