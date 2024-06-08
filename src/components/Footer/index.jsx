
import './styles.css'; 

export const Footer = () => {
  return (
   <footer className='Footer'>
         <div class="container">
    <div class="footer-column">
      <h3>Navegação</h3>
      <ul>
        <li><a href="#">Perguntas Frequentes</a></li>
        <li><a href="#">Políticas de Privacidade</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Contato</h3>
      <ul>
        <li>Endereço: Rua das Flores, 123</li>
        <li>Telefone: (00) 1234-5678</li>
        <li>E-mail: contato@brunasstore.com</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Links Úteis</h3>
      <ul>
        <li><a href="#">Ajuda</a></li>
        <li><a href="#">Política de Devolução</a></li>
      </ul>
    </div>
    <div class="footer-column">

      <h3>Redes Sociais</h3>
        <ul class="social-icons">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </div>
  </div>
  <div class="copyright">
    <p>© 2024 Bruna's Store. Todos os direitos reservados.</p>
  </div>

    <div className='back-to-top'>
              <button onClick={scrollToTop}>Voltar ao Início</button>
            </div>
        </footer>
  );
};