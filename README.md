# Sobre

Painel responsivo que possibilita o cadastro, alteração e exclusão de produtos no estoque.

# Funcionamento

![interfaceAPI](https://github.com/user-attachments/assets/cbf1811c-4c50-4e8d-8035-c92c589c15d4)

## cadastro

Para cadastrar os produtos não é necessário inserir nenhum ID, isso é feito automaticamente. Apenas o preço e o nome devem ser inseridos.

## alteração

Já para alterar as informações de um produto, você deve inserir o ID do produto que deseja alterar e os novos valores nos campos "nome" e "preço".

## exclusão

Para excluir um produto, basta inserir o ID do produto que deseja realizar a exclusão.

# Teste você mesmo

<img src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo.png" height="120"/>

Para testar essa aplicação, é necessário possuir o docker instalado e as seguintes portas disponíveis: 3000 e 3306.

Após o docker instalado, faça o seguinte: 

- clone esse repositório na sua máquina local por meio do seguinte comando: <code> git clone https://github.com/D4N13LCS/API-crud </code>

- crie um arquivo .env na raiz do projeto da seguinte forma:

![envAPI](https://github.com/user-attachments/assets/6d728d17-aa07-4d51-8cc3-c6b4dc06293a)

- dentro do diretório onde os arquivos foram clonados, utilize o comando: <code> docker compose up --build </code>

- Por último, acesse http://localhost:3000 no seu navegador.

## Banco de dados

Caso deseje averiguar o comportamento das ações no banco de dados ou consultar os dados inseridos e/ou atualizados, faça o seguinte:

- Execute o comando <code> docker ps </code> para obter o ID do container do banco de dados
- Execute o comando <code> docker exec -it ID-do-container-do-banco-de-dados mysql -u root -p</code> para acessar o banco de dados
- Coloque root quando for pedida a senha
- após isso execute <code> USE someDataBase; </code>

Agora é só testar!
