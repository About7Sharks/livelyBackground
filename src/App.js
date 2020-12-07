import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { startSound } from './util/sound'
import { useEffect } from "react";

function App() {
  const sockHasEntered = (e) => {
    console.log('hey sock', e)
    startSound()
    window.removeEventListener("mousemove", sockHasEntered);
  }

  useEffect(() => {
    window.addEventListener("mousemove", sockHasEntered);

  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
