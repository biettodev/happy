// Create Map

var map = L
  .map('mapid')
  .setView([-23.5489, -46.6388], 13)

// Create Tile

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
  .addTo(map);

// Create Icon

const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// Create Popup overlay

const popup = L.
popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
  })
  .setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg" /></a>')

// Create and add Marker

L
  .marker([-23.5489, -46.6388], { icon })
  .addTo(map)
  .bindPopup(popup)