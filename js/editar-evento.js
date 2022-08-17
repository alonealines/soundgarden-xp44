const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const findID = () => {

  const url = new URL(window.location.href);
  const id = url.searchParams.get('id');

  return id;
}

const exibirDetalhesEvento = async () => {
  const dadosEvento =
      await fetch('https://xp41-soundgarden-api.herokuapp.com/events/' + findID(), {
          method: "GET",
          mode: "cors",
          headers: {
              "Content-Type": "application/json"
          }
      }).then((response) => response.json());

  console.log(dadosEvento);

  const inputNome = document.querySelector("#nome");
  const inputAtracoes = document.querySelector("#atracoes");
  const inputDescricao = document.querySelector("#descricao");
  const inputData = document.querySelector("#data");
  const inputLotacao = document.querySelector("#lotacao");
  const inputBanner = document.querySelector("#banner");

  inputNome.value = dadosEvento.name;
  inputAtracoes.value = dadosEvento.attractions.join(', ');
  inputBanner.value = dadosEvento.poster;
  inputDescricao.value = dadosEvento.description;
  inputData.value = dadosEvento.scheduled;
  inputLotacao.value = dadosEvento.number_tickets;
}

exibirDetalhesEvento();

// selecionando formulario
const formEditarEvento = document.querySelector('#cadastro-evento');
//capturando evento de envio do formulario
formEditarEvento.addEventListener('submit', async (event) => {  //quando executar o submit, faz essa função

  event.preventDefault(); //evitar que a pagina seja recarregada

const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const inputBanner = document.querySelector("#banner");

//alert(inputNome.value);

const fullDateTime = new Date(inputData.value);

const eventoAtualizadoObj = {
    "name": inputNome.value,
    "poster": inputBanner.value,
    "attractions": inputAtracoes.value.split(","),
    "description": inputDescricao.value,
    "scheduled": fullDateTime.toISOString(),
    "number_tickets": inputLotacao.value
};

console.log(eventoAtualizadoObj);


//convertendo objeto para JSON
    const eventoAtualizadoJSON = JSON.stringify(eventoAtualizadoObj); 


//conexão com API para cadastrar novo evento
// salvando resposta na const
    const resposta = await fetch(SOUND_URL + "/" + findID(), { //fetch serve para fazer conexão com API
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
        body: eventoAtualizadoJSON
    }).then((response) => {
        return response.json();
    }).then((responseOBJ) => {
        // console.log(responseOBJ);
        window.location.replace = ("./admin.html?acao=edit");

    });

  });