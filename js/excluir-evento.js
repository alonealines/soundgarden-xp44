const form = document.querySelector("form");


const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/events";


const findID = () => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  return id;
};


const exibirDetalhesEvento = async () => {
  const dadosEvento = await fetch("SOUND_URL" + "/" + findID(), {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  console.log(dadosEvento);

  const inputNome = document.getElementById("nome");
  const inputAtracoes = document.getElementById("atracoes");
  const inputDescricao = document.getElementById("descricao");
  const inputData = document.getElementById("data");
  const inputLotacao = document.getElementById("lotacao");
  const inputBanner = document.getElementById("banner");

  inputNome.value = dadosEvento.name;
  inputAtracoes.value = dadosEvento.attractions;
  inputBanner.value = dadosEvento.poster;
  inputDescricao.value = dadosEvento.description;
  inputData.value = dadosEvento.scheduled;
  inputLotacao.value = dadosEvento.number_tickets;
};
exibirDetalhesEvento();

const btnExcluirEvento = document.querySelector(".btn.btn-danger");
btnExcluirEvento.addEventListener =
  ("onClick",
  async (event) => {
    event.preventDefault();
    

    const resposta = await fetch("SOUND_URL" + "/" + findID(), {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response;
      })
      .then((responseOBJ) => {
        //console.log(responseOBJ);
        window.location.replace("admin.html?acao=edit");
      });
      alert("Evento excluído");
  });

  