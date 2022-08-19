const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'; //END POINT

const formCadastroEvento = document.querySelector('#cadastro-evento');

formCadastroEvento.addEventListener('submit', async (event) => { 
event.preventDefault(); //evitar que a pagina seja recarregada

const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const inputBanner = document.querySelector("#banner");


const fullDateTime = new Date(inputData.value);

const novoEventoObj = {
    "name": inputNome.value,
    "poster": inputBanner.value,
    "attractions": inputAtracoes.value.split(","),
    "description": inputDescricao.value,
    "scheduled": fullDateTime.toISOString(),
    "number_tickets": inputLotacao.value
};

console.log(novoEventoObj);


//convertendo objeto para JSON
    const novoEventoJSON = JSON.stringify(novoEventoObj); 


//conexão com API para cadastrar novo evento
    const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events`,{ 
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
        body: novoEventoJSON
    }).then((response) => {
        return response.json();
    }).then((responseOBJ) => {
        console.log(responseOBJ);
        window.location.href = ("./admin.html");
    });
    
});