let selectedCat = "🐱";

function changeCat(cat) {
  selectedCat = cat;

  document.getElementById("cat").textContent = cat;

  document.getElementById("cat").style.transform = "scale(1.2)";

  setTimeout(() => {
    document.getElementById("cat").style.transform = "scale(1)";
  }, 200);
}

function finish() {

  const name = document.getElementById("catName").value.trim();

  if (name === "") {
    alert("اكتبي اسم قطتك أول 🥺");
    return;
  }

  document.querySelector(".card").style.display = "none";

  document.getElementById("result").innerHTML = `
    <h2>🎉 مبرووووك!</h2>
    <p>تبنيتي ${selectedCat}</p>
    <p>اسمها صار <strong>${name}</strong> 🐾</p>
    <p>انتظري... اللعبة الحقيقية توها تبدأ 👀</p>
  `;
}
