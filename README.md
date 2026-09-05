# Projeto de Desenvolvimento Web - Trabalhos Compensatórios 1 a 4

Este repositório reúne os trabalhos desenvolvidos ao longo da disciplina de AAP4, como trabalhos compensatórios, apresentando a evolução de uma aplicação de cadastro e gestão de clientes.

Os trabalhos foram desenvolvidos de forma progressiva, começando pela criação da interface com HTML e CSS, passando pela utilização de JavaScript e requisições assíncronas, até chegar à definição da arquitetura MVC e à implementação de uma aplicação com operações CRUD e banco de dados MySQL.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Java
- MySQL
- Git e GitHub

---

# Trabalho 1 - Interface Web com HTML e CSS

O primeiro trabalho teve como objetivo desenvolver a interface de uma aplicação web para cadastro e visualização de dados de clientes.

Nesta etapa, foi criada a estrutura inicial da página utilizando HTML5 e sua aparência foi definida utilizando CSS3.

A aplicação possui uma tela de cadastro de clientes contendo campos como:

- Nome
- E-mail
- Telefone
- CEP
- Rua
- Número
- Bairro
- Cidade
- Estado
- Senha

Também foram utilizados elementos HTML de forma semântica, buscando organizar a página de maneira adequada e facilitar sua compreensão e acessibilidade.

### Objetivo da etapa

Criar a estrutura visual inicial da aplicação, trabalhando os conceitos básicos de HTML e CSS e preparando a interface para as etapas seguintes.

---

# Trabalho 2 - JavaScript e Requisições Assíncronas

No segundo trabalho, a interface desenvolvida anteriormente foi aprimorada com JavaScript.

O objetivo desta etapa foi tornar a página mais interativa, permitindo realizar validações no lado do cliente e preencher automaticamente informações de endereço a partir do CEP informado pelo usuário.

Foram implementadas funcionalidades como:

- Validação dos campos do formulário;
- Verificação dos dados antes do envio;
- Busca automática de endereço a partir do CEP;
- Preenchimento dinâmico dos campos de endereço;
- Utilização de requisições assíncronas para buscar os dados sem recarregar a página;
- Manipulação dos elementos da página por meio do JavaScript.

### Objetivo da etapa

Adicionar interatividade à aplicação e utilizar JavaScript para melhorar a experiência do usuário, especialmente durante o preenchimento do formulário.

---

# Trabalho 3 - Arquitetura MVC e Controle de Sessão

O terceiro trabalho teve como objetivo definir a arquitetura do lado do servidor da aplicação utilizando o padrão MVC (Model-View-Controller).

Nesta etapa, foi analisada a divisão da aplicação em diferentes responsabilidades:

### Model

Responsável por representar os dados e as regras relacionadas às informações utilizadas pela aplicação.

### View

Responsável pela interface apresentada ao usuário, utilizando as páginas HTML e os recursos visuais da aplicação.

### Controller

Responsável por receber as requisições do usuário, processar as ações solicitadas e estabelecer a comunicação entre a View e o Model.

Também foi definido o fluxo de comunicação entre essas partes durante uma requisição HTTP.

Além disso, foi estudado o controle de sessões e o uso de cookies para manter o usuário autenticado durante diferentes requisições.

### Objetivo da etapa

Planejar a organização da aplicação no lado do servidor, separando suas responsabilidades e preparando a estrutura necessária para a implementação do sistema completo.

---

# Trabalho 4 - Aplicação Web CRUD com Banco de Dados

O quarto trabalho representa a evolução da aplicação para um sistema web funcional, integrando a interface, o servidor e o banco de dados.

Nesta etapa, a aplicação passa a trabalhar com um banco de dados relacional utilizando MySQL e deve realizar as operações fundamentais de um CRUD:

- **Create:** cadastrar novos registros;
- **Read:** consultar e visualizar registros;
- **Update:** alterar registros existentes;
- **Delete:** excluir registros.

A aplicação utiliza a arquitetura MVC definida no Trabalho 3 e estabelece a comunicação entre o servidor Java e o banco de dados.

Para realizar o acesso aos dados, será utilizada uma camada DAO, responsável pela comunicação com o banco por meio de JDBC ou tecnologia equivalente.

O sistema também deverá tratar as requisições e respostas HTTP realizadas entre o navegador e o servidor.

### Objetivo da etapa

Integrar as etapas anteriores em uma aplicação web funcional, permitindo o cadastro, consulta, alteração e exclusão de dados armazenados em um banco de dados MySQL.

---

# Evolução do projeto

Os trabalhos foram desenvolvidos de maneira progressiva, de modo que cada etapa acrescenta novos recursos à aplicação.

A evolução pode ser representada da seguinte forma:

```text
TRABALHO 1
HTML + CSS
     ↓
Criação da interface
     ↓
TRABALHO 2
JavaScript
     ↓
Validações e requisições assíncronas
     ↓
TRABALHO 3
Arquitetura MVC
     ↓
Organização do lado do servidor
e controle de sessão
     ↓
TRABALHO 4
Java + MVC + DAO + MySQL
     ↓
Aplicação CRUD completa
