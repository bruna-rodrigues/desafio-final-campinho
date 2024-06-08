# Bruna's Store

Este é um projeto de uma loja virtual construído com React. O projeto consome dados da [Fake Store API](https://fakestoreapi.com/) para exibir produtos e suas categorias.

## Funcionalidades

- **Carregar todas as categorias**: O usuário pode ver e selecionar diferentes categorias de produtos.
- **Buscar produtos por categoria**: O usuário pode buscar produtos dentro de uma categoria específica.
- **Exibir produtos**: Todos os produtos são exibidos na página principal.
- **Carregar produtos**: O usuário pode recarregar a lista de produtos.
- **Voltar ao topo**: Botão para voltar ao início da página.

## Componentes

- **Header**: Componente que exibe o cabeçalho da página, incluindo a logo, uma saudação e o campo de busca por categoria.
- **Footer**: Componente que exibe o rodapé da página, incluindo informações de contato e links para redes sociais.
- **Loading**: Componente que exibe um indicador de carregamento.
- **ProductItem**: Componente que exibe cada item de produto na lista.

## Estrutura de Arquivos

src/
├── components/
│ ├── Footer.js
│ ├── Header.js
│ ├── Loading.js
│ ├── ProductItem.js
├── App.css
├── App.js
├── index.js
└── logo.png


## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/brunas-store.git

2. Navegue até o projeto

    cd brunas-store

3. Instale as dependências:

    npm install

4. Inicie o projeto:

    npm start

## Uso

- Ao abrir o aplicativo, todos os produtos serão carregados automaticamente.
- Use o campo de busca por categoria para filtrar produtos de uma categoria específica.
- Clique no botão "Recarregar" para recarregar todos os produtos.
- Clique no botão "Voltar ao Início" para rolar a página até o topo.

## Tecnologias Utilizadas

- React
- Fake Store API
- CSS

## Contribuição
- Fork o projeto.
- Crie uma nova branch: git checkout -b minha-nova-funcionalidade
- Faça suas alterações e commit: git commit -m 'Adiciona nova funcionalidade'
- Envie para o branch original: git push origin minha-nova-funcionalidade
- Crie um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

