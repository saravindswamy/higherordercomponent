import './App.css';
import Hello from './Hello'
import Test from './Test'
import EnhancedBorder from './HOC/ApplyBorder'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter';
import HocCounter from './HOC/HocCounter'

const UpdatedClickCounter = HocCounter(ClickCounter)
const UpdatedHoverCounter = HocCounter(HoverCounter)

function App() {


  return (
    <div className="App">

  Lets code tamil <br />
  <UpdatedClickCounter name="Aravind"/>
  <UpdatedHoverCounter name="swamy"/>

    </div>
  );
}

export default App;
