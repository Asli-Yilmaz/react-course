import Header from './components/Header';
import ProductList from "./components/ProductList";
import './App.css'

export default function App() {
  
  return (
    <>
      <Header/>
      {/* header ile içeriği hizalamak için bunları da container içine aldık */}
      <div className='container mt-3'>
        <ProductList/>
      </div>
    </>
  )
}
