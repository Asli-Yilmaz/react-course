import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
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

function Header(){
  return (
	<header>
		<nav className="navbar navbar-expand bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <a href="#" className="navbar-brand">Store App</a>
      </div>
		</nav>
	</header>
  );
}
function ProductList(){
  const items=[
    {
      "image":"1.jpg",
      "title":"Iphone 16",
      "description": "Lorem ipsum dolor sit amet.",
      "price":80000,
      "is_active":true,
    },
    {
      "image":"2.jpg",
      "title":"Iphone 17",
      "description": "Lorem ipsum dolor sit amet.",
       "price":90000,
       "is_active":true,
    },
    {
      "image":"3.jpg",
      "title":"Iphone 18",
      "description": "Lorem ipsum dolor sit amet.",
       "price":100000,
       "is_active":true,
    },
    {
      "image":"4.jpg",
      "title":"Iphone 19",
      "description": "Lorem ipsum dolor sit amet.",
       "price":1000000,
       "is_active":true,
    },
    {
      "image":"4.jpg",
      "title":"Iphone 19",
      "description": "Lorem ipsum dolor sit amet.",
       "price":1000000,
       "is_active":true,
    },
    {
      "image":"4.jpg",
      "title":"Iphone 19",
      "description": "Lorem ipsum dolor sit amet.",
       "price":1000000,
       "is_active":true,
    },
    {
      "image":"4.jpg",
      "title":"Iphone 19",
      "description": "Lorem ipsum dolor sit amet.",
       "price":1000000,
       "is_active":true,
    },
    
  ];

  return (
    <>
    {
      items.length>0 ? (
      // mobilde yanyana 2, md de 3 xlde ise 4 ürün gösterilecek demektir g-4 ise elemanalr arası boşluk
      <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id="product-list">        
        {
          items.map((item,index)=>(
            <div className='col'>
              <Product key={index} productObj={item}/>
            </div>
          ))
        }
      </div>
      ): (
        <p>Satışta ürün bulunmamaktadır.</p>
      )
    }
    </>
  );
}
function Product({productObj}){
  if(!productObj.is_active) return null;
  return (
    <div className='card shadow-sm'>
      {/*mobil cihazlarda 2 birim pedding diğerlerinde 3 */}
      <img className="card-img-top p-2 p-md-3 border-bottom"src={"/img/"%productObj.image}></img>
      <div className="card-body">
        <h2 className='card-title'>{productObj.title}</h2>
        <p className='card-text'>{productObj.description}</p>
        <span className="badge text-bg-success"> { productObj.price} TL</span>
      </div>
    </div>
  );
}
function Footer(){
  const hour=new Date().getHours();
  const openingHour=8;
  const closingHour=20;
  const isOpen= hour>=openingHour && hour<closingHour;

  return(
    <footer>
      {/* {
        isOpen && (
          <p>Akşam {closingHour}'a kadar sipariş verebilirisniz.</p>
        ) */
        isOpen ? (
          <p>Akşam {closingHour}'a kadar sipariş verebilirisniz.</p>
        ):
        (<p>Şu an Kapalıyız.Açılış saatimiz {openingHour}.</p>)
      }
    </footer>
  )
}
export default App
