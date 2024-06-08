import './styles.css'
import logo from '/logo.png';

export const Header = () => {

  <header className='Header'>
  <div className='container'>
  <img src='/logo.png' alt="Logo da Loja" className="logo" />
    <h1>Sejam bem-vindos!</h1>
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