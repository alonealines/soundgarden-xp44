const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const listarEventos = async () => {

    const eventos = await fetch(SOUND_URL, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }




    }).then((resposta) => {
        return resposta.json();
    });

    console.log(eventos)

    const eventList = document.querySelector('#all-events')

    let htmlEventos = "";

    eventos.forEach(evento => {
      htmlEventos += `
            <article class="evento card p-5 m-3">
              <h2>${evento.name}</h2>
              <h4>${evento.attractions.join(', ')}</h4>
              <a href="#" class="btn btn-primary">reservar ingresso</a>
            </article>
      `; 
  })
  eventList.innerHTML = htmlEventos;
}

  listarEventos();