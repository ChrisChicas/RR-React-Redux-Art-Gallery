import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import {useSelector, useDispatch} from "react-redux"
import {lightMode, darkMode} from "./features/modeSlice"

function App() {
  const mode = useSelector(state => state.mode)
  const dispatch = useDispatch()

  const modeSwap = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }
  
  return (
    <div style={{ backgroundColor: mode.color1, color: 'black' }} className="App">
      <Nav />
      <button onClick={modeSwap}>{mode.darkMode ? "Light Mode" : "Dark Mode"}</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
