import Main from './Components/Main/Main';
import './App.scss';
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
    <div className="App">
      <Main />
    </div>
    </HashRouter>
    
  );
}

export default App;
