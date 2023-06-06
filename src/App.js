import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode, setLightMode } from './features/modeSlice';

function App() {
  const mode = useSelector((state) => state);
  const dispatch = useDispatch();

  const onModeChange = (e) => {
    const actionCreator = mode.darkMode ? setLightMode : setDarkMode;
    dispatch(actionCreator());
  }

  
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <Nav />
      <button
      type='button'
      onClick={onModeChange}>Toggle Dark Mode</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
