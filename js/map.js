const mapContainer = document.querySelector("#map");
const mapOption = {
  center: new kakao.maps.LatLng(37.512723468898294, 127.06076770855582),
};
renderMap();
window.addEventListener("resize", renderMap);

function renderMap() {
  mapContainer.innerHTML = "";
  const map = new kakao.maps.Map(mapContainer, mapOption);
  const marker = new kakao.maps.Marker({ position: mapOption.center });
  marker.setMap(map);
}

const viewContainer = document.querySelector("#view");
const view = new kakao.maps.Roadview(viewContainer);
const viewMapper = new kakao.maps.RoadviewClient();

viewMapper.getNearestPanoId(mapOption.center, 60, (panoId) => {
  view.setPanoId(panoId, mapOption.center);
});

const [btnMap, btnView] = document.querySelectorAll(".btns li");

btnMap.addEventListener("click", (e) => {
  mapContainer.classList.add("on");
  viewContainer.classList.remove("on");
  btnMap.classList.add("on");
  btnView.classList.remove("on");
});

btnView.addEventListener("click", (e) => {
  mapContainer.classList.remove("on");
  viewContainer.classList.add("on");
  btnMap.classList.remove("on");
  btnView.classList.add("on");
});
