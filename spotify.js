document.addEventListener('DOMContentLoaded', function() {
  const searchImage = document.getElementById('search');
  searchImage.addEventListener('click', search);
});
const container = document.getElementById('results');

function search(event){

    const form_data = new FormData(document.querySelector("#ricerca form"));
    console.log(form_data.get('search'));
    
    //fetch a file php
    fetch("uso_spotify.php?q="+encodeURIComponent(form_data.get('search'))).then(searchResponse).then(searchJson);

    //visualizzo i contenuti
    container.innerHTML = '';

    event.preventDefault();
}

function searchResponse(response)
{
    //console.log(response);
    return response.json();
}

function searchJson(json) {
  console.log('JSON ricevuto');
  // Leggi il numero di risultati
  const results = json.albums.items;
  let num_results = results.length;
  // Mostriamone al massimo 10
  if(num_results > 10)
      num_results = 10;
  // Processa ciascun risultato
  for(let i = 0; i < num_results; i++) {
      // Leggi il documento
      const album_data = results[i];
      // Leggiamo info
      const title = document.createElement("p");
       title.textContent = album_data.name;
      const selected_image = album_data.images[0].url;
      const album = document.createElement('div');

      const div = document.createElement('div');
      div.classList.add('image');

      const img = document.createElement("img");
      img.src = selected_image;

      
      

      div.appendChild(img);
      div.appendChild(title);
      container.appendChild(div);
      // Modale al click
      img.addEventListener('click', apriModale);
  }
}




function apriModale(event) {
    const modale = document.getElementById('modale');
	
	const image = document.createElement('img');
	
	image.id = 'immagine_post';
	
	image.src = event.currentTarget.src;
	
	modale.appendChild(image);
	
	modale.classList.remove('hidden');
    modale.addEventListener('click',chiudiModale);
	
	document.body.classList.add('no-scroll');
}


function chiudiModale() {
	
		//aggiungo la classe hidden 
		modale.classList.add('hidden');
		//prendo il riferimento dell'immagine dentro la modale
		img = modale.querySelector('img');
		//e la rimuovo 
		img.remove();
		//riabilito lo scroll
		document.body.classList.remove('no-scroll');
	
}


const cerca = document.querySelector("form");
const errore = document.getElementById("errore");

cerca.addEventListener("submit",search);

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
          case 'clear ':
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

