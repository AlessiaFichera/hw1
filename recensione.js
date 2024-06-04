document.addEventListener('DOMContentLoaded', (event) => {
    function onJSON(json) {
        let ul = document.querySelector("#lista_recensioni");
        ul.innerHTML = "";
        for (let i = 0; i < json.length; i++) {
            const li = document.createElement("li");
            const p1 = document.createElement("p");
            p1.textContent = "Scritta da: " + json[i].username_recensione;
            const p2 = document.createElement("p");
            p2.textContent = "Ha visitato il parco giorno: " + json[i].Data;
            const p3 = document.createElement("p");
            if (Array.isArray(json[i].parco)) {
                let parcoText = "Parchi visitati: ";
                let parchiVisitati = [];

                for (let j = 0; j < json[i].parco.length; j++) {
                    if (json[i].parco[j] == "1")
                        parchiVisitati.push("Acquapark");
                    else if (json[i].parco[j] == "2")
                        parchiVisitati.push("Themepark");
                    else if (json[i].parco[j] == "3")
                        parchiVisitati.push("Parco della Preistoria");
                }

                parcoText += parchiVisitati.join(", ");
                p3.textContent = parcoText;
            } else {
                let parcoText = "Parco visitato: ";
                if (json[i].parco == "1")
                    parcoText += "Acquapark";
                else if (json[i].parco == "2")
                    parcoText += "Themepark";
                else if (json[i].parco == "3")
                    parcoText += "Parco della Preistoria";

                p3.textContent = parcoText;
            }
            const p4 = document.createElement("p");
            p4.textContent = "Recensione: " + json[i].recensione;
            const p5 = document.createElement("p");
            if (json[i].esperienza == "4")
                p5.textContent = "Tornerai al Parco? Non penso proprio";
            else if (json[i].esperienza == "5")
                p5.textContent = "Tornerai al Parco? Forse";
            else if (json[i].esperienza == "6")
                p5.textContent = "Tornerai al Parco? Certamente";
            const a = document.createElement("a");
            a.textContent = "Elimina";
            a.href = "#"; 
            a.dataset.id_recensione = json[i].id;
            a.addEventListener("click", eliminaRecensione);
            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);
            li.appendChild(p4);
            li.appendChild(p5);
            li.appendChild(a);
            ul.appendChild(li);
        }
    }
    function responseData(response) {
      return response.json();
  }
  
  document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();
      Data_corrente();
  });
 
 

      function eliminaRecensione(event) {
        event.preventDefault();
        const id_recensione = event.currentTarget.dataset.id_recensione;
        fetch("elimina_recensione.php?id_recensione=" + id_recensione)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                if (json.success) {
                    aggiornaRecensioni();
                    document.querySelector('.recensione p').textContent = "";
                } else {
                  document.querySelector('.recensione p').textContent = "Non puoi elimare la recensione di un altro utente!";
                }
            });
    }
    

    function responseAggiorna(response) {
        return response.json();
    }

    function aggiornaRecensioni() {
        fetch("recensione_get.php").then(responseAggiorna).then(onJSON);
    }

    function responseAggiungi() {
        aggiornaRecensioni();
    }

    function aggiungiRecensione(event) {
      const data_corrente = new Date();
      const data_recensione = new Date(document.querySelector('input[name="Data"]').value);
      if (data_recensione > data_corrente) {
          document.querySelector('#errore').textContent = "Non puoi inserire una recensione per un giorno futuro!";

      }
      else{
        document.querySelector('#errore').textContent = "";
      const form = document.querySelector("form");
      const form_data = { method: 'post', body: new FormData(form) };
  
      fetch("aggiungi_recensione.php", form_data).then(responseAggiungi);
      }
    }

    aggiornaRecensioni();

    document.querySelector("form").addEventListener("submit", aggiungiRecensione);
});
document.addEventListener('DOMContentLoaded', function() {
    function cambiaImmagine() {
      const image = document.querySelector('#logo-etnaland');
      image.src = 'immagini/logo-etnaland2.png';
    }
    function ripristinaImmagine() {
      const image = document.querySelector('#logo-etnaland');
      image.src = 'immagini/logo-etnaland1.png';
    }
    const image = document.querySelector('#logo-etnaland');
    image.addEventListener('mouseenter', cambiaImmagine);
    image.addEventListener('mouseleave', ripristinaImmagine);
  });
  function createDropdownMenu(linkSelector, overlaySelector, opacityValue) {
    const link = document.querySelector(linkSelector);
    let overlay = document.querySelector(overlaySelector);
  
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);
    }
  
    let isMouseOver = false;
  
    link.addEventListener('mouseover', () => {
      overlay.style.opacity = opacityValue;
    });
  
    link.addEventListener('mouseout', () => {
      if (!isMouseOver) {
        overlay.style.opacity = '0';
      }
    });
  
    overlay.addEventListener('mouseover', () => {
      isMouseOver = true;
      overlay.style.opacity = opacityValue;
    });
  
    overlay.addEventListener('mouseout', () => {
      isMouseOver = false;
      overlay.style.opacity = '0';
    });
  }
  createDropdownMenu('.them', '.overlay', '1');
  createDropdownMenu('.acqua', '.overlay2', '1');
  createDropdownMenu('.cal1', '.overlay3', '1');
  createDropdownMenu('.cal2', '.overlay4', '1');
  createDropdownMenu('.intestazione1', '.overlay5', '1');
  createDropdownMenu('.prei', '.overlay6', '1');
  
  
  document.addEventListener('DOMContentLoaded', function() {
    getWeatherInBelpasso();
});

function getWeatherInBelpasso() {
    fetch('meteo.php')
        .then(response => {
            if (response.status !== 200) {
                console.error('Si è verificato un problema. Codice di stato:', response.status);
                return;
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                updateWeatherDisplay(data);
            }
        })
        .catch(error => {
            console.error('Si è verificato un errore durante la richiesta meteo:', error);
        });
}

function updateWeatherDisplay(data) {
    const weatherInfo = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');

    if (weatherInfo) {
        weatherInfo.textContent = `- Temperatura: ${data.main.temp}°C, Condizioni: ${data.weather[0].description}`;
    }


    if (weatherIcon) {
      let iconSrc;
      switch (data.weather[0].main.toLowerCase()) {
          case 'clear':
              iconSrc = "immagini/sole.png";
              break;
          case 'clouds':
              iconSrc = 'immagini/nuvoloso.png';
              break;
          case 'rain':
              iconSrc = "immagini/pioggia.png";
              break;
          default:
              iconSrc = "immagini/close.png";
              break;
      }
      weatherIcon.src = iconSrc;
  }
}

// Funzione zoom su immagini
function applyZoomEffect(elementId, scale) {
  document.getElementById(elementId).style.transform = "scale(" + scale + ")";
}
function addZoomEvents(elementId) {
  document.getElementById(elementId).addEventListener("mouseenter", function() {
    applyZoomEffect(elementId, 1.1);
  });
  document.getElementById(elementId).addEventListener("mouseleave", function() {
    applyZoomEffect(elementId, 1);
  });
}
addZoomEvents("cal");
addZoomEvents("cal1");
addZoomEvents("cal2");
addZoomEvents("cal3");
addZoomEvents("cal4");
addZoomEvents("cal5");
addZoomEvents("ita");
addZoomEvents("ing");
addZoomEvents("bottone");

//spostare immagine verso l'alto
function moveImageUp(elementId) {
  var translateY = "-10px";
  document.getElementById(elementId).style.transform = "translateY(" + translateY + ")";
}

function resetImagePosition(elementId) {
  document.getElementById(elementId).style.transform = "translateY(0)";
}

function addImageEvents(elementId) {
  document.getElementById(elementId).addEventListener("mouseenter", function() {
    moveImageUp(elementId);
  });
  document.getElementById(elementId).addEventListener("mouseleave", function() {
    resetImagePosition(elementId);
  });
}

addImageEvents("social");
addImageEvents("calendario");
addImageEvents("shop");
addImageEvents("photoland");
addImageEvents("newsletter");
addImageEvents("primacompri");

// bottone che scorre verso l'alto
var goToTopButton = document.getElementById("bottone");
goToTopButton.addEventListener("click", function() {
 
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

//Menù a tendina
document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.getElementById("close"); 

  mobileMenuToggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("attivo");
  });

  closeBtn.addEventListener("click", function() {
    mobileMenu.classList.remove("attivo");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  getWeatherInBelpasso();
});

const accountLink = document.querySelector("#account");
const area_personale = document.querySelector(".area_personale");

accountLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (area_personale.style.opacity === '1') {
        area_personale.style.opacity = '0';
    } else {
        area_personale.style.opacity = '1';
    }
});
