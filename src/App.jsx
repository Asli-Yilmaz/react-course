import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <Header/>
      <ProductList/>
      <Footer/>
    </>
  )
}

function Header(){
  return <h1>Header</h1>
}
function ProductList(){
  const items=[
    {
      "image":"1.jpg",
      "title":"Iphone 16",
      "description": "Lorem ipsum dolor sit amet.",
      "price":80000,
      "is_active":false,
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
  ];

  return (
    items.length>0 ? (
    <>
      <h2>Product List</h2>
      {
        items.map((item,index)=>(
          <Product key={index} productObj={item}/>
        ))
      }
    </>
    ): (
      <p>Satışta ürün bulunmamaktadır.</p>
    )
  );
}
function Product({productObj}){
  if(!productObj.is_active) return null;
  return (
    <div>
      <img src={"/img/"%productObj.image}></img>
      <h2>{productObj.title}</h2>
      <p>{productObj.description}</p>
      <span> { productObj.price} TL</span>
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
