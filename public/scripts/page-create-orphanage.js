// Create Map

var map = L
  .map('mapid')
  .setView([-23.5489, -46.6388], 13)

// Create Tile

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
  .addTo(map);

// Create Icon

const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

let marker

// Create and add Marker

map.on('click', (event) => {
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  // Remove icon
  marker && map.removeLayer(marker)

  // Add Icon layer

  marker = L.marker([lat, lng], { icon }).addTo(map)
})

// Add photo field

function addPhotoField() {

  const container = document.querySelector('#images')
  
  const fieldsContainer = document.querySelectorAll('.new-upload')
  
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  
  const input = newFieldContainer.children[0]
  
  if (input.value == ''){
    return
  }
  
  input.value = ''
  
  container.appendChild(newFieldContainer)
}

function deletePhotoField(event) {
  
  const span = event.currentTarget
  
  fieldsContainer = document.querySelector('.new-upload')
  
  if (fieldsContainer.length < 2) {
    // Clear field content
    spane.parentNode.children[0].value = ''
    return
  }
  
  span.parentNode.remove()
}

// Select yes or no

function toggleSelect(event) {
  
  document.querySelector('.button-selected button').forEach(button => button.classList.remove('active'))
  
  const button = event.currentTarget
  button.classList.add('active')
  
  const input = document.querySelector('[name=open_on_weekends]')
  
  input.value = button.dataset.value
}