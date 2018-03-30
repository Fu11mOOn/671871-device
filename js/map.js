var openMap = document.querySelector(".contacts img");
var map = document.querySelector(".map-container");
var closeMap = map.querySelector(".close-button-map");
openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("map-container-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("map-container-show");
});
