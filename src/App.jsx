// Write your Color component here
import { useState } from 'react'

const Color = props => {
  return (
    <div
      className={props.color}
      onClick={() => props.selected(props.color)}
    ></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState('')
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {
          <div id="colors-list">
            <Color color="blue" selected={setSelectedColor} />
            <Color color="red" selected={setSelectedColor} />
            <Color color="green" selected={setSelectedColor} />
          </div>
        }
      </div>
    </div>
  )
}

export default App
