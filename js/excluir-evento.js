const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/";

const inputForm = document.querySelector("form");


const excluirEvento = async () => {
  const respostaExcluir = await fetch(`${SOUND_URL}/events/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  })
 
  }
  excluirEvento();
  
  const btnExcluirEvento = document.querySelector(".btn.btn-danger");
btnExcluirEvento.onsubmit = (evento) => {
  evento.preventDefault();
  alert('Evento excluído');  
};
console.log(btnExcluirEvento);

