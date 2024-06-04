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

  document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const visibilityIcon = document.getElementById('visibility');

    visibilityIcon.addEventListener('click', function() {
        const isPasswordHidden = passwordField.getAttribute('type') === 'password';
        passwordField.setAttribute('type', isPasswordHidden ? 'text' : 'password');


    });
});
