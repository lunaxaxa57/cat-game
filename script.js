let gameData = {
  fur: "#d9b58c",
  eyes: "#6bc7d1",
  name: "قطتك",
  collar: "#e98eae",
  house: "pink"
};


function goTo(screenId) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}


/* لون القطة */

function chooseFur(color, button) {

  gameData.fur = color;

  document.querySelectorAll(".cat").forEach(cat => {
    cat.style.setProperty("--fur", color);
  });

  document.querySelectorAll(".face").forEach(face => {
    face.style.background = color;
  });

  document.querySelectorAll(".ear").forEach(ear => {
    ear.style.background = color;
  });

  setTimeout(() => {
    goTo("eyesScreen");
  }, 400);
}


/* لون العيون */

function chooseEyes(color, button) {

  gameData.eyes = color;

  document.querySelectorAll(".eye").forEach(eye => {
    eye.style.background = color;
  });

  setTimeout(() => {
    goTo("nameScreen");
  }, 400);
}


/* الاسم */

function saveName() {

  const input = document.getElementById("nameInput");

  if (input.value.trim() === "") {
    input.focus();
    input.placeholder = "اكتبي اسمها أول 🥺";
    return;
  }

  gameData.name = input.value.trim();

  goTo("collarScreen");
}


/* الطوق */

function chooseCollar(color, button) {

  gameData.collar = color;

  setTimeout(() => {
    goTo("houseScreen");
  }, 400);
}


/* البيت */

function chooseHouse(house) {

  gameData.house = house;

  setupFinalRoom();

  setTimeout(() => {
    goTo("finalScreen");
  }, 400);
}


/* تجهيز النهاية */

function setupFinalRoom() {

  document.getElementById("finalName").textContent = gameData.name;
  document.getElementById("finalName2").textContent = gameData.name;

  const finalCat = document.getElementById("finalCat");

  const face = finalCat.querySelector(".final-face");
  const ears = finalCat.querySelectorAll(".final-ear");
  const body = finalCat.querySelector(".body");

  face.style.background = gameData.fur;
  body.style.background = gameData.fur;

  ears.forEach(ear => {
    ear.style.background = gameData.fur;
  });

  document.querySelectorAll(".final-eye").forEach(eye => {
    eye.style.background = gameData.eyes;
  });

  document.getElementById("finalCollar").style.background =
    gameData.collar;


  const room = document.querySelector(".room");

  if (gameData.house === "pink") {
    room.style.background = "#ffeaf2";
  }

  if (gameData.house === "blue") {
    room.style.background = "#e0f1ff";
  }

  if (gameData.house === "green") {
    room.style.background = "#e2f3df";
  }

  if (gameData.house === "purple") {
    room.style.background = "#eee5ff";
  }
}
