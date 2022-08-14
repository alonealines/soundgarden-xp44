const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/"

const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");

// QueryString
// Tratamento de Caracteres Especiais

const preencherCampos = (data) => {

  const{name, poster, attractions, description, scheduled, number_tickets} = data

  inputNome.value = name;
  inputAtracoes.value = attractions;
  inputDescricao.value = description;
  inputData.value = scheduled;
  inputLotacao.value = number_tickets;
  inputBanner.value = poster;
}

const getEventoPorID = (id) => {
  fetch(`${SOUND_URL}/events/${id} `)
  .then((response) => response.json())
  .then(preencherCampos);
}
