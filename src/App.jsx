
import React from 'react';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import { ProductItem } from './components/ProductItem';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [header, setHeader] = useState();
  const [footer, setFooter] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');


  // Função para carregar todas as categorias
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }, []);

  // Função para carregar produtos
  const getProducts = () => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  };

  // Função para buscar produtos por categoria
  const searchProducts = () => {
    if (selectedCategory === '') {
      alert('Please select a category');
      return;
    }
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Função para voltar ao topo da página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {
        header ?
          <Header />
          :
          <header className='Header'>
            <div className='container'>
              <div className='logo'>
              <img src='/logo.png' alt="Logo da Loja" />
              </div>
           
              <div className='header-text'>
                <h1>Sejam bem-vindos!</h1>
                
              </div>

              <div className='campo-busca'>
                <label htmlFor="category">Buscar por categoria:</label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <button onClick={searchProducts}>Buscar</button>
              </div>
            </div>

            <div className='container-botao'>
              <button className='botao-recarregar' onClick={getProducts}>Recarregar</button>
            </div>
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

      {
        footer ?
          <Footer />
          :
          <footer className='Footer'>
            <div className="container">
              <div className="footer-column">
                <h3>Contato</h3>
                <ul>
                  <li>Endereço: Rua das Flores, 123</li>
                  <li>Telefone: (00) 1234-5678</li>
                  <li>E-mail: contato@brunasstore.com</li>
                </ul>
              </div>
            
              <div className="footer-column">
                <h3>Redes Sociais</h3>
                <ul className="social-icons">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="copyright">
              <p>© 2024 Bruna's Store. Todos os direitos reservados.</p>
            </div>
            <div className='back-to-top'>
              <button onClick={scrollToTop}>Voltar ao Início</button>
            </div>
          </footer>
      }
    </main>
  );
}

export default App;
