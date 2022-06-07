import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer'
import Header from './Components/Header';
import data from './data/CardData'

function App() {
  return (
    <div className="App">
      <Header image={data.photo} name={data.name}/>
      <Body about={data.aboutme}/>
      <Footer />
    </div>
  );
}

export default App;
