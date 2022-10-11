import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { VerNav } from './components/vertical'
import { Header } from './components/brand'
import { Cards } from './components/card'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Hero">
        <VerNav />
        <Cards />
      </div>
    </div>
  );
}

export default App;
