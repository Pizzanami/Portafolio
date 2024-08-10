// alert("Hola mundo, soy Itza <3");

let presentacion = document.getElementById('mi_nombre');

let typewriter = new Typewriter(presentacion, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(250)
  .typeString('<strong>Itzanami Berlanga</strong>')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora <strong>front-end junior</strong>')
  .pauseFor(300)
  .deleteAll()
  .start();

  function copyText() {

    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("itzanami.berlanga@gmail.com");
}