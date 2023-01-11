import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer.jsx';
import SearchItem from './components/SearchItem/SearchItem.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';



function App() {
 return (
          <div className="App">
        <NavBar />
        <SearchItem ></SearchItem>
        <ButtonsContainer></ButtonsContainer>
        <ItemListContainer></ItemListContainer>

        </div>
  );
}

export default App;
