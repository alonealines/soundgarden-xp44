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

const deletarEvento = async () => {

const resposta = await fetch('https://xp41-soundgarden-api.herokuapp.com/events/' + findID(), { 
  method: "DELETE",
  mode: "cors",
  headers: {
      "Content-type": "application/json"
  },
})

  .then(response => response)
          .then(result => { window.location.href = './admin.html'})
          .catch(error => alert(`O evento ${nome} não foi excluido!`));
          alert('O evento foi excluido!');
};

deletarEvento()