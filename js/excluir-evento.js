const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/";

const inputNome = document.querySelector("nome");
const inputAtracoes = document.querySelector("atracoes");
const inputDescricao = document.querySelector("descricao");
const inputData = document.querySelector("data");
const inputLotacao = document.querySelector("lotacao");
const inputForm = document.querySelector("form");


const excluirEvento = async () => {
  const respostaExcluir = await fetch(`${SOUND_URL}/events/${id}`, {
    method: "DEL",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  })
 
  }
  excluirEvento();
  
  const btnExcluirEvento = document.querySelector(".btn.btn-danger");
btnExcluirEvento.onsubmit = (evento) => {
  evento.preventDefault();
  
};
console.log(btnExcluirEvento);
console.log(alert("Evento Excluído"));  
  
