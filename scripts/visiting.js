export function visitingFill() {


  //VISITING SECTION
  const cardsContainer = document.getElementById("cards"),
    cardsArr = [
      {
        source: "royal-palace",
        name: "Royal Palace"
      },
      {
        source: "denon-wing",
        name: "Denon Wing"
      },
      {
        source: "colonnade-perrault",
        name: "Colonnade Perrault"
      },
      {
        source: "greek-hall",
        name: "Greek Hall"
      },
      {
        source: "mona-lisa",
        name: "Mona Lisa"
      },
      {
        source: "night-palace",
        name: "Night Palace"
      }
    ];

  const fillCards = () => {
    for (let i = 0; i < cardsArr.length; i++) {
      cardsContainer.innerHTML += `<div>
      <a href="pages/tours/tour${i + 2}.html" target="_blank" class="card">
        <img src="assets/img/virtual-tours/${cardsArr[i].source}.jpg" 
          alt="${cardsArr[i].name}"
          width="440"
          height="285"
          loading="lazy"
        >
          <h3 class="cards__heading forum-font-32 underline-subtitle">${cardsArr[i].name}</h3>
          <p class="cards__description roboto-font-22-black">360° Virtual Tour <br>
            <span class="cards__description--small">Google Street Panorama View</span>
          </p>
        </a>
      </div>`;
    }
  };

  window.onload = fillCards();

  
}