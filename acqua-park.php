<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: login.php");
    exit;
}
    
?>
<!DOCTYPE html>
<html>
    <head>
    
      <title>Etnaland Acquapark</title>
      <link rel="icon" href="immagini/download.png" type="image/png">
      <link rel="stylesheet" href="acqua-park.css" />
      <script src="acqua-park.js" defer></script>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta charset="utf-8">
    </head>
    <body>
    
      <header>
      <nav class="nav1">
          <a href="https://etnaland.eu/it/PD/25/Chi-siamo.html" class="intestazione"><b>Chi Siamo</b></a> | 
          <a href="https://etnaland.eu/it/PD/4/Come-arrivare.html" class="intestazione"><b>Come Arrivare</b></a> | 
          <a href="#"class="intestazione1"><b>Media & Press ▾</b></a> | 
          <div class="overlay5">
            <a href="">News</a>
            <a href="">Premi Area</a>
            <a href="">Premi e riconoscimenti</a>
            <a href="">Newssletter</a>
            </div>
            <a href="https://etnaland.eu/it/PD/36/Lavora-con-noi.html"class="intestazione"><b>Lavora con noi</b></a> | 
            <a href="https://etnaland.eu/it/PD/39/Contatti.html"class="intestazione"><b>Contatti</b></a> | 
            <a href="https://etnaland.eu/it/PD/151/Accessibilita.html"class="intestazione"><b>Accessibilità</b></a> | 
            <a href="https://etnalandonline.tm.vivaticket.com/biglietteria/trans/transazioniUtenteList.do?lang=it"class="intestazione"><b>Recupera biglietti</b></a> 
            <a href="" class="intestazione"><img id="account" src="immagini/account.png"/></a>
            <div class="area_personale">
            <a href="logout.php">Disconetti</a>
             </div>
        </nav>
      </header>
      <div class="box1">
        <div> <a href="home.php"><img  id="logo-etnaland" src="immagini/logo-etnaland1.png"/></a></div>
        <div class="wrapper">
            <a href="themepark.php" class="them">
              <img src="immagini/logothemepark.png" />
            </a>
            <div class="overlay">
              <a href="https://etnaland.eu/it/Themepark/AL/"><b>Attrazioni</b></a>
               <a href="https://etnaland.eu/it/Themepark/PD/103/La-mia-giornata-Themepark.html"><b>La mia giornata</b></a>
            </div> 
              <a href="acqua-park.php" class="acqua"><img src="immagini/logoacquapark.png" /></a>
              <div class="overlay2">
              <a href="https://etnaland.eu/it/Acquapark/AL/#Attrazioni"><b>Attrazioni</b></a>
              <a href="https://etnaland.eu/it/PD/86/La-mia-giornata-Acquapark.html"><b>La mia giornata</b></a>
              </div>
            <a href="preistoria.php" class="prei"><img src="immagini/logopreistoria.png"/></a>
            <div class="overlay6">
              <a ></a>
              <a ></a>
           </div class="lingua">
              <a id="ita" href="https://etnaland.eu/en/"><img id="ita" src="immagini/italiano.png"/></a>
              <a id="ing" href="https://etnaland.eu/en/" ><img  id="ing"src="immagini/inglese.png"/></a>
            </div>

      </div>
      </div>

      <nav class="nav2">
        <a id="cal" href="https://etnaland.eu/it/PD/116/Calendario-e-Prezzi.html" class="cal">Calendario e Prezzi</a>
        <a id="cal1" href="spotify.php" class="cal">Spotify</a>
        <a id="cal2"href="https://etnaland.eu/it/PD/21/Gruppi-organizzati.html" class="cal2">Info e Gruppi</a>
        <div class="overlay4">
          <a href="https://etnaland.eu/it/PD/21/Gruppi-organizzati.html">Gruppi organizzati</a>
          <a href="https://etnaland.eu/it/PD/104/Visite-d-istruzione.html">Visite d'istruzione</a>
          <a href="https://etnaland.eu/it/PD/94/Agenzie-di-trasporto.html">Agenzie di trasporto</a>
          <a href="https://etnaland.eu/it/PD/4/Come-arrivare.html">Come Arrivare</a>
          <a href="https://etnaland.eu/it/PD/23/Consigli-utili.html">Consigli Utili</a>
          <a href="https://etnaland.eu/it/Acquapark/PD/6/FAQ.html">FAQ</a>
          <a href="https://etnaland.eu/it/PD/151/Accessibilita.html">Accessibilità</a>
      </div>
        <a id="cal3" href="like.php" class="cal">Preferiti</a>
        <a id="cal4"href="https://etnaland.eu/it/PD/82/Servizi.html" class="cal1">Servizi</a>
        <div class="overlay3">
          <a href="https://etnaland.eu/it/PD/82/Servizi.html">Servizi</a>
          <a href="https://etnaland.eu/it/SL/7/Punti-ristoro.html">Punti Ristoro</a>
          <a href="https://etnaland.eu/it/PD/87/Photoland.html">Photoland</a>
          <a href="https://etnaland.eu/it/PD/34/Shop.html">Shop</a>
          <a href="https://etnaland.eu/it/PD/146/Altri-servizi.html">Altri Servizi</a>
      </div>
        <a id="cal5"href="recensione.php" class="col">Recensioni</a>
      </nav>
        <div class="nuvole"><img src="immagini/logo_acquapark_shadow.png"/></div>
        <div class="box2"> <img id="immagine" src="immagini/slide_acquapark.jpg" /></div>
       
        <div class="Esplorare">
          <div class="esplorare2"> Miniland </div>
          <div class="griglia-immagini">
          <a class="immagine1"><span class="titolo"><b>Laguna Bambini</b></span><img class="cuore"  id="13" src="immagini/cuore_vuoto_blu.png"> <span class="descrizione"> <b>Laguna Bambini</b><br>Piscina per bambini con scivoli, attrazioni e area idromassaggio per gli adulti.</span><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"> </a>
          <a class="immagine2"><span class="titolo"><b>Castello</b></span><img class="cuore"id="14" src="immagini/cuore_vuoto_blu.png"><span class="descrizione"><b>Castello</b><br>Un piccola struttura con soffioni, getti d'acqua e tunnel.</span><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"> </a>
          <a class="immagine3"><span class="titolo"><b>Mini Foam</b></span><img class="cuore"id="15" src="immagini/cuore_vuoto_blu.png"><span class="descrizione"><b>Mini Foam</b><br>Un grande e morbido tappeto di gomma bagnata.</span><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"> </a>
             
          </div>
          
     </div>
     <div class="Roteare">
      <div class="roteare2">Acquascivoli e Piscine </div>
      <div class="griglia-immagini">
      <a class="immagine6"><span class="titolo"><b>Devil Race</b></span><img class="cuore" id="16" src="immagini/cuore_vuoto_blu.png"><span class="descrizione"><b>Devil Race</b><br>Corri lungo la discesa di ben 130m, disteso a testa in giù aggrappato alle maniglie del materassino<br> sul quale raggiungerai folli velocità.</span><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"> </a>
    </div>
      <div class="griglia-immagini">
      <a class="immagine7"><span class="titolo"><b>Titania</b></span><img class="cuore" id="17" src="immagini/cuore_vuoto_blu.png"> <span class="descrizione"> <b>Titania</b><br>Scivolo dall'aspetto imponente e maestoso, capace di scelte e decisioni...  Rapide.</span><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"> </a>
        <a class="immagine8"><span class="titolo"><b>Colossum</b></span><img class="cuore" id="18" src="immagini/cuore_vuoto_blu.png"><span class="descrizione"><b>Colossum</b><br>Imponente, vorticoso, imprevedibile </span> <img class="nuvolette-banner" src="immagini/nuvolette-banner.png"></a>
          <a class="immagine9"><span class="titolo"><b>Super Red Cannon</b></span><img class="cuore" id="19" src="immagini/cuore_vuoto_blu.png"><span class="descrizione"><b>Super Red Cannon</b><br>Il Red Cannon si fa Super!</span><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"> </a>
      </div>
      <div class="griglia-immagini">
        <a class="immagine10"><span class="titolo"><b>Twin Twister</b></span><img class="cuore" id="20" src="immagini/cuore_vuoto_blu.png"><span class="descrizione"><b>Twin Twister</b><br>Quattro scivoli legati tra loro in una treccia lunga 120 metri.</span><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"> </a>
          <a class="immagine11"><span class="titolo"><b>Tobogan Giganti</b></span><img class="cuore" id="21" src="immagini/cuore_vuoto_blu.png"><span class="descrizione"><b>Tobogan Giganti</b><br>Due lunghi e grandi tobogan completamente aperti.</span><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"> </a>
            <a class="immagine12"><span class="titolo"><b>Piscina a Onde </b></span><img class="cuore" id="22" src="immagini/cuore_vuoto_blu.png"><span class="descrizione"><b>Piscina a Onde</b><br>Un enorme piscina dotata di lettini e ombrelloni ideale per rilassarsi e ascoltare musica.</span><img class="nuvolette-banner" src="immagini/nuvolette-banner.png"> </a>
           </div>
          <div class="nuvole2"></div>

      </div>
      <div class="box7">
        <a href="#" class="box6"><img id="social" src="immagini/social.png"></a>
        <a href="https://etnaland.eu/it/PD/116/Calendario-e-Prezzi.html" class="box6"><img id="calendario"src="immagini/footer-banner_calendario_it.png"></a>
        <a href="https://shop.etnaland.eu/" class="box6"><img id="shop" src="immagini/banner_shop-online_footer.jpg"></a>
      </div>

      <div class="box8">
        <a href="https://etnaland.eu/it/PD/87/Photoland.html" class="box9"><img id="photoland" src="immagini/footer-banner_photoland_it.png"></a>
        <a href="https://etnaland.eu/it/PD/110/Newsletter.html" class="box9"><img id="newsletter" src="immagini/footer-banner_newsletter_it.png"></a>
        <a href="https://etnaland.eu/it/PD/116/Calendario-e-Prezzi.html" class="box9"><img id="primacompri" src="immagini/footer-banner_primacompri_it.png"></a>
      </div>

      <div class="box10"><a href="#"><img src="immagini/immagine3.png"></a></div>

      <footer>
        <div class="box11">
          <div class="box12" > 
           <div class="meteo"> Meteo Oggi a Etnaland:
              <span id="weather-info"></span><img id="weather-icon" alt="Weather icon">
            </div>
          </div>
          <div class="pièdipagina">
              <div class="fondo">
              <a href="https://etnaland.eu/it/PD/25/Chi-siamo.html" >Chi Siamo</a>
                  <a href="https://etnaland.eu/it/PD/2/Regolamento.html" >Regolamento</a>
                  <a href="https://etnaland.eu/it/PD/91/Note-legali.html" >Note legali</a>
                  <a href="https://etnaland.eu/it/PD/39/Contatti.html" >Contatti</a>
                </div>
          
              </div>
          </div>
    
      <div class="box14"><img src="immagini/fine.png">
        <button class="bottone" ><img id="bottone" src="immagini/bottone.png"></button> </div>
      </footer>
      <button class="menu" id="mobile-menu-toggle">☰</button>
      <nav class="mobile-menu">
          <a class="inizio"><img id="etnaland" src="immagini/logo-etnaland1.png"><img id="close" src="immagini/ico-close.png"></a> 
          <div class="contenuto">
            <a href="themepark.php"><b>Themepark</b></a>
            <a href="acqua-park.php"><b>Acquapark</b></a>
            <a  href="preistoria.php"><b>Parco della Preiscoria</b></a>
            <a href="spotify.php"><b>Spotify</b></a>
              <a href="like.php"><b>Attrazioni Preferite</b></a>
              <a href="recensione.php"><b>Recensioni</b></a>
              <a href="logout.php"><b>Disconetti</b><img id="logout" src="immagini/logout.png"/></a>
            </div>
        </nav>
    </body>
</html>
