import {items} from "../data";
import Product from "./Product";
export default function ProductList(){
    return (
    <>
    {
      items.length>0 ? (
      // mobilde yanyana 2, md de 3 xlde ise 4 ürün gösterilecek demektir g-4 ise elemanalr arası boşluk
      <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id="product-list">        
        {
          items.map((item,index)=>(
            <div className='col'  key={index} >
              <Product productObj={item}/>
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