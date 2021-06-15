import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import ClickCounterWithoutHOC from './ClickCounterWithoutHOC'
import HoverCounterWithoutHOC from './HoverCounterWithoutHOC'


function App() {
  return (
    <div className="App">
      <br/>
      <ClickCounterWithoutHOC/>
      <HoverCounterWithoutHOC/>
    </div>
  );
}

export default App;
