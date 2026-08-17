let cat = {
  fur: "#d9ad83",
  eyes: "#69c9dc",
  name: "",
  collar: "#e88dab",
  house: "#ffe0ec"
};

function goTo(id) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}


function chooseFur(color) {

  cat.fur = color;

  document.querySelectorAll(".cat-face").forEach(face => {
    face.style.background = color;
  });

  document.querySelectorAll(".ear").forEach(ear => {
    ear.style.background = color;
  });

  setTimeout(() => {
    goTo("eyesScreen");
  }, 350);
}


function chooseEyes(color) {

  cat.eyes = color;

  document.querySelectorAll(".cat-eye").forEach(eye => {
    eye.style.background = color;
  });

  setTimeout(() => {
    goTo("nameScreen");
  }, 350);
}


function saveName() {

  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (name === "") {
    input.placeholder = "اكتبي اسم قطتك أول 🥺";
    input.focus();
    return;
  }

  cat.name = name;

  goTo("collarScreen");
}


function chooseCollar(color) {

  cat.collar = color;

  setTimeout(() => {
    goTo("houseScreen");
  }, 350);
}


function chooseHouse(color) {

  cat.house = color;

  setupFinalCat();

  setTimeout(() => {
    goTo("finalScreen");
  }, 350);
}


function setupFinalCat() {

  document.getElementById("finalName").textContent = cat.name;
  document.getElementById("finalName2").textContent = cat.name;

  const face = document.querySelector(".final-face");
  const body = document.querySelector(".final-body");
  const ears = document.querySelectorAll(".final-ear");

  face.style.background = cat.fur;
  body.style.background = cat.fur;

  ears.forEach(ear => {
    ear.style.background = cat.fur;
  });

  document.querySelectorAll(".final-eye").forEach(eye => {
    eye.style.background = cat.eyes;
  });

  document.getElementById("finalCollar").style.background = cat.collar;

  document.getElementById("room").style.background = cat.house;
}
