import './App.css';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo';
import ProductPictures from './components/ProductPictures';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="hero">
        <ProductPictures />
        <ProductInfo />

      </div>
    </div>
  );
}

export default App;
