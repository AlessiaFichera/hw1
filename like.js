function onResponse(response){
    return response.json();
}
function onJSON(json){
    console.log(json);
    let gl = document.querySelector("#galleria_like");
    let gi = document.querySelector("#galleria_like_acquapark");

    gl.innerHTML = "";
    gi.innerHTML = "";

    for(let i=0; i<json.length; i++){
      const div = document.createElement("div");
      div.classList.add("foto");
      const img = document.createElement("img");
      img.src = json[i].Url_immagine;
      const p = document.createElement("p");
      p.textContent = json[i].nome_attrazione;
      const a = document.createElement("a");
      a.dataset.id = json[i].id;
      let img2 = document.createElement("img");
      img2.src = "immagini/close.png";
      let img3 = document.createElement("img");
      img3.src = "immagini/close_blu.png";
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(a);
      a.addEventListener("click", eliminalike);

      if (json[i].id <= 12) {
        gl.appendChild(div);
        a.appendChild(img2);
      } else {
        gi.appendChild(div);
        a.appendChild(img3);
      }
    }
}

function eliminalike(event) {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    console.log(id);
    let formData = new FormData();
    formData.append('id', id);
    fetch("rimuovi_like.php", {
        method: 'POST',
        body: formData
    }).then(aggiornalike);
}
function aggiornalike() {
    fetch("like_attrazione.php").then(responseAggiorna).then(onJSON);
}
function responseAggiorna(response){
    return response.json();
}

function visualizzaLike(){
    fetch("like_attrazione.php").then(responseAggiorna).then(onJSON);
}
visualizzaLike();

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

  