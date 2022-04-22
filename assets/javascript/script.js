const container = document.getElementById ('container')
const colors = ['red','blue','white','yellow']
const squares = 500

for(let i =0; i < squares; i++ ) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

const setColor = (element) => {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (element) => {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

const getRandomColor = () => {
  //returns a random color from index 0 to the last array item
  return colors[Math.floor(Math.random() * colors.length)]
}