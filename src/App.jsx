import './App.css';
import Header from "./components/Header"
import NavFooter from './components/NavFooter';
import MainView from './components/MainView';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainView/>
      <NavFooter/>
    </div>
  );
}

export default App;
