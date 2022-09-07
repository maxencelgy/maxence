AOS.init();
const txtAnim = document.getElementById("bigTitle");
new Typewriter(txtAnim, {
  deleteSpeed: 35,
})
  .changeDelay(35)
  .typeString("Salut, je suis Maxence Leguay 19 ans, <br>")
  .pauseFor(700)
  .typeString("voici mon site personnel, bonne visite.<br><br>")
  .pauseFor(1000)
  .typeString('Developpeur <span style="color: var(--vert)";>Junior </span>!')
  .pauseFor(1700)
  .deleteChars(9)
  .typeString('<span style="color: #F22616";> Laravel </span>!')
  .pauseFor(1500)
  .deleteChars(9)
  .typeString('<span style="color: #000000";> Symfony </span>!')
  .pauseFor(1500)
  .deleteChars(9)
  .typeString('<span style="color: #ff6910";> HTML </span>!')
  .pauseFor(1500)
  .deleteChars(6)
  .typeString('<span style="color: #27ae60";> CSS/SCSS </span>!')
  .pauseFor(1500)
  .deleteChars(10)
  .typeString('<span style="color: #ea39ff";> PHP </span>!')
  .pauseFor(1500)
  .deleteChars(5)
  .typeString('<span style="color: #005F8B";> MySql </span>!')
  .pauseFor(1500)
  .deleteChars(8)
  .typeString('<span style="color: #FACA5B";> JavaScript </span>!')
  .start();

$(document).ready(function () {
  const discover = $("#discover");
  const skip = $("#skip");
  const main = $("#main");

  setTimeout(function () {
    discover.fadeIn(2500);
  }, 8000);

  discover.on("click", function (e) {
    e.preventDefault();
    main.css("display", "none");
    $("body").css({ background: "#131313", height: "auto", width: "auto" });
    $("body").removeClass("no-before");
    $(".container").fadeIn();
    cache.addClass("cache");
    about.removeClass("cache");
  });

  skip.on("click", function (e) {
    e.preventDefault();
    main.css("display", "none");
    $("body").css({ background: "#131313", height: "auto", width: "auto" });
    $("body").removeClass("no-before");
    $(".container").fadeIn();
    cache.css("display", "none");
    about.fadeIn(800);
  });

  const cache = $(".cache");
  const about = $("#about");
  const project = $("#projects");
  const contact = $("#contact");

  const disco = $(".disco");
  const discoTwo = $(".disco2");
  const discoThree = $(".disco3");
  const discoFourth = $(".disco4");

  discoTwo.on("click", function (e) {
    disco.removeClass("selected");
    disco.removeClass("selected2");
    discoTwo.addClass("selected");
    cache.css("display", "none");
    about.fadeIn(500);
    e.preventDefault();
  });
  discoThree.on("click", function (e) {
    disco.removeClass("selected");
    disco.removeClass("selected2");
    discoThree.addClass("selected2");
    cache.css("display", "none");
    project.fadeIn(500);
    e.preventDefault();
  });
  discoFourth.on("click", function (e) {
    disco.removeClass("selected");
    disco.removeClass("selected2");
    discoFourth.addClass("selected");
    cache.css("display", "none");
    contact.fadeIn(500);
    e.preventDefault();
  });

  const burger = $("#burger");
  const croix = $("#croix");
  const navigation = $(".navigation");

  burger.on("click", function () {
    navigation.fadeIn();
    burger.css("display", "none");
    croix.css("display", "block");
  });
  croix.on("click", function () {
    navigation.fadeOut();
    burger.css("display", "block");
    croix.css("display", "none");
  });

  jQuery(burger).click(function () {
    if (this.id == "croix") {
      alert("Button 1 was clicked");
    } else if (this.id == "burger") {
      discoTwo.on("click", function (e) {
        disco.removeClass("selected");
        discoTwo.addClass("selected");
        cache.css("display", "none");
        about.fadeIn(500);
        navigation.fadeOut();
        croix.css("display", "none");
        burger.css("display", "block");
        e.preventDefault();
      });
      discoThree.on("click", function (e) {
        disco.removeClass("selected");
        discoThree.addClass("selected");
        cache.css("display", "none");
        project.fadeIn(500);
        navigation.fadeOut();
        croix.css("display", "none");
        burger.css("display", "block");
        e.preventDefault();
      });
      discoFourth.on("click", function (e) {
        disco.removeClass("selected");
        discoFourth.addClass("selected");
        cache.css("display", "none");
        contact.fadeIn(500);
        navigation.fadeOut();
        croix.css("display", "none");
        burger.css("display", "block");
        e.preventDefault();
      });
    }
  });

  const indispo = $(".indispo");

  indispo.on("click", function (e) {
    e.preventDefault();
  });
});
