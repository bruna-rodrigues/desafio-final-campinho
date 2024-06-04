import { useEffect, useState } from 'react'
import { Loading } from './components/Loading';
import { ProductItem } from './components/ProductItem';
import {Header} from  './components/Header';
import './App.css'

function App() {

  fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [header, setHeader] = useState();


  function getProducts() {
    try {
      console.log('aqui')
      setLoading(true)
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json))
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [loading])

  return (

    <main>

{
        header ?
          <Header />
          :
          
            <header className='Header'>

                <h1>Lojinha da Luíza</h1>

            </header>
          
          }


      {
        loading ?
          <Loading />
          :
          <div className='Products'>
            {products && products.length > 0 &&
              products.map((item) => {
                return (
                  <ProductItem
                    id={item.id}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                )
              })}
          </div>
      }
      <button onClick={getProducts}>Recarregar</button>
    </main>
  )
}

export default App
