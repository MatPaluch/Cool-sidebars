document.getElementById("mojPrzycisk").addEventListener("click", function () {
  var element = document.getElementById("mojElement");
  element.classList.add("mojaKlasa");
  var element = document.getElementById("aside");
  element.classList.add("rightside");
});
function usunKlase() {
  var element = document.getElementById("mojElement");
  element.classList.remove("mojaKlasa");
  var element = document.getElementById("aside");
  element.classList.remove("rightside");
}
