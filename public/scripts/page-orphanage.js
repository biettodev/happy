const options = {
  draggin: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// Create Map

var map = L
  .map('mapid', options)
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

// Create and add Marker

L
  .marker([-23.5489, -46.6388], { icon })
  .addTo(map)

// Image gallery

function selectImage(event) {
  const button = event.currentTarget

  const buttons = document.querySelectorAll('.images button')

  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove('active')
  }

  const image = button.children[0]

  const imageContainer = document.querySelector('.orphanage-details > img')

  imageContainer.src = image.src

  button.classList.add('active')

}