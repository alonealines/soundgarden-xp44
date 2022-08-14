const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/";

const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");
const inputForm = document.getElementById("form");
const id = new URLSearchParams(window.location.search).get("id");

async function listarEvento() {
  const options = {
    method: "GET",
    redirect: "follow",
    headers: { "Content-Type": "application/json" },
  };

  const resposta = await fetch(`${SOUND_URL}/events/${id}`, options);

  const conteudo = await resposta.json();
  inputNome.value = conteudo.name;
  inputBanner.value = conteudo.poster;
  inputAtracoes.value = conteudo.attractions;
  inputDescricao.value = conteudo.description;
  inputData.value = conteudo.scheduled.slice(0, 16);
  inputLotacao.value = conteudo.number_tickets;
}
listarEvento();

form.onsubmit = async (evento) => {
  evento.preventDefault();

  const optionsDel = {
    method: "DELETE",
    body: JSON.stringify(apagarEvento),
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  };

  // const btn = () => {
  //   btn.document
  //     .getElementsByClassName("btn")
  //     .RemoveEventListener("click", listener, false);
  // };

  const resposta = await fetch(`${SOUND_URL}/events/${id}`, optionsDel);
  if (resposta.status == 204) {
    alert("Evento excluido!");
    window.location.pathname == "/SoundGarden/excluir-evento.html"
      ? `${window.location.origin}/SoundGarden/admin.html`
      : `${window.location.origin}/admin.html`;
  }
};

