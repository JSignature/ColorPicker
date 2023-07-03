// Write your Color component here
import Color from './Color'

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
        {
          <div id="colors-list">
            <Color color="blue" />
            <Color color="red" />
            <Color color="green" />
          </div>
        }
      </div>
    </div>
  )
}

export default App
