/* =====================================
   EMMU TECH JAVASCRIPT
===================================== */


/* ================= DARK MODE ================= */

const themeBtn =
  document.getElementById("themeBtn");


if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark");

  themeBtn.textContent = "☀️";

}


themeBtn.addEventListener("click", function () {

  document.body.classList.toggle("dark");


  if (
    document.body.classList.contains("dark")
  ) {

    themeBtn.textContent = "☀️";

    localStorage.setItem(
      "theme",
      "dark"
    );

  } else {

    themeBtn.textContent = "🌙";

    localStorage.setItem(
      "theme",
      "light"
    );

  }

});


/* ================= SEARCH ================= */

const searchBox =
  document.getElementById("searchBox");

const cards =
  document.querySelectorAll(".searchable");


searchBox.addEventListener(
  "input",
  function () {

    const search =
      searchBox.value
        .toLowerCase()
        .trim();


    let found = 0;


    cards.forEach(function (card) {

      const text =
        card.textContent.toLowerCase();


      if (text.includes(search)) {

        card.style.display = "";

        found++;

      } else {

        card.style.display = "none";

      }

    });


    const result =
      document.getElementById(
        "searchResult"
      );


    if (search === "") {

      result.textContent = "";

    } else {

      result.textContent =
        found +
        " result(s) found.";

    }

  }
);


/* ================= MESSAGE ================= */

function showMessage(message) {

  const box =
    document.getElementById(
      "messageBox"
    );

  const text =
    document.getElementById(
      "messageText"
    );


  text.textContent = message;

  box.classList.add("show");


  setTimeout(function () {

    box.classList.remove("show");

  }, 3000);

}


function closeMessage() {

  document
    .getElementById("messageBox")
    .classList.remove("show");

}


/* ================= PREVIOUS YEARS ================= */

function selectYear(year) {

  document
    .getElementById("selectedYear")
    .textContent =
      "You selected " +
      year +
      ". More resources can be added here.";

}


/* ================= CURRENT YEAR ================= */

document
  .getElementById("year")
  .textContent =
    new Date().getFullYear();


/* ================= NAVIGATION ================= */

document
  .querySelectorAll("nav a")
  .forEach(function (link) {

    link.addEventListener(
      "click",
      function (event) {

        event.preventDefault();


        const target =
          document.querySelector(
            link.getAttribute("href")
          );


        if (target) {

          target.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  });
