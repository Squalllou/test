const quiz = document.getElementById("quiz");

if (quiz) {
    quiz.addEventListener("submit", function(event) {
        event.preventDefault();

        window.location.href = "resultat.html";
    });
}

const chargement = document.getElementById("chargement");
const cadeau = document.getElementById("cadeau");

if (chargement && cadeau) {

    setTimeout(function () {

        chargement.style.display = "none";
        cadeau.hidden = false;

    }, 30000);

}