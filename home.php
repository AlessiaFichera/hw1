
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
    
      <title>Etnaland</title>
      <link rel="icon" href="immagini/download.png" type="image/png">
      <link rel="stylesheet" href="home.css" />
      <script src="home.js" defer></script>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta charset="utf-8">
    </head>
    <body>
    
      <header>
        <nav class="nav1">
          <a href="https://etnaland.eu/it/PD/25/Chi-siamo.html" class="intestazione"><b>Chi Siamo</b></a> | 
          <a href="https://etnaland.eu/it/PD/4/Come-arrivare.html" class="intestazione"><b>Come Arrivare</b></a> | 
          <a href="https://etnaland.eu/it/PD/84/News-Etnaland.html"class="intestazione1"><b>Media & Press ▾</b></a> | 
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
       <a href="home.php"><img  id="logo-etnaland" src="immagini/logo-etnaland1.png"/></a> 
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
              <a id="ita" href="https://etnaland.eu/en/"><img src="immagini/italiano.png"/></a>
              <a id="ing" href="https://etnaland.eu/en/" ><img src="immagini/inglese.png"/></a>
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

      <div class="box2"> <img id="immagine-box2" src="immagini/scorri.jpg" /></div>

      <div class="nuvole">
        <a href="https://etnaland.eu/it/Themepark/AL/" class="box3"><img  id="immagine_them" src="immagini/BANNER_TK_02.jpg" /></a>
        <a href="https://etnaland.eu/it/Acquapark/AL/" class="box4"><img id="immagine_acqua"src="immagini/BANNER_AK.jpg" /></a>
      </div>

      <div class="box5">
        <a href="https://etnaland.eu/it/PD/97/Parco-della-Preistoria.html" class="box3"><img id="immagine_prei" src="immagini/BANNER_PARCO_PREISTORIA.jpg" /></a>
        <a  class="box4"><img id="video" class="video" src="immagini/banner-video-2016_it.jpg" /></a>
      </div>
      <div id="video1" class="video1"></div>
      <nav class="box7">
        <a href="#" class="box6"><img id="social" src="immagini/social.png"></a>
        <a href="https://etnaland.eu/it/PD/116/Calendario-e-Prezzi.html" class="box6"><img id="calendario"src="immagini/footer-banner_calendario_it.png"></a>
        <a href="https://shop.etnaland.eu/" class="box6"><img id="shop" src="immagini/banner_shop-online_footer.jpg"></a>
      </nav>

      <nav class="box8">
        <a href="https://etnaland.eu/it/PD/87/Photoland.html" class="box9"><img id="photoland" src="immagini/footer-banner_photoland_it.png"></a>
        <a href="https://etnaland.eu/it/PD/110/Newsletter.html" class="box9"><img id="newsletter" src="immagini/footer-banner_newsletter_it.png"></a>
        <a href="https://etnaland.eu/it/PD/116/Calendario-e-Prezzi.html" class="box9"><img id="primacompri" src="immagini/footer-banner_primacompri_it.png"></a>
      </nav>

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
