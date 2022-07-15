import HeatmapOverlay from "leaflet-heatmap";
import L from "leaflet";

var myData = {
  max: 1000,
  data: [
    { x: 50.32638, y: 9.81727, count: 1 },
    { x: 50.31009, y: 9.57019, count: 1 },
    { x: 50.31257, y: 9.44102, count: 1 }
  ]
};
var baseLayer = L.tileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18,
    minZoom: 7
  }
);
var cfg = {
  radius: 0.1,
  maxOpacity: 1,
  scaleRadius: true,
  useLocalExtrema: true,
  latField: "x",
  lngField: "y"
};
var heatmapLayer = new HeatmapOverlay(cfg);
var map = new L.map("leafletMapid", {
  center: new L.LatLng(50.339247, 9.902947),
  zoom: 8
});
heatmapLayer.setData(myData);

baseLayer.addTo(map);
heatmapLayer.addTo(map);
