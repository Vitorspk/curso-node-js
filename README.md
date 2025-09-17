# Portal de Notícias - Curso Node.js

Um portal de notícias desenvolvido em Node.js como projeto de aprendizado, utilizando Express.js, EJS e MySQL.

## 📋 Descrição

Este é um projeto de portal de notícias criado durante um curso de Node.js. A aplicação permite visualizar notícias e adicionar novas notícias através de um formulário administrativo.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** (v4.16.2) - Framework web para Node.js
- **EJS** (v2.5.7) - Template engine para renderização de views
- **MySQL** (v2.15.0) - Banco de dados relacional
- **Consign** (v0.1.6) - Autoload de módulos e injeção de dependências

## 📁 Estrutura do Projeto

```
curso-node-js/
├── app/
│   ├── routes/               # Rotas da aplicação
│   │   ├── home.js          # Rota da página inicial
│   │   ├── noticias.js      # Rota de listagem de notícias
│   │   └── formulario_inclusao_noticia.js  # Rota do formulário
│   └── views/                # Templates EJS
│       ├── admin/            # Views administrativas
│       │   └── form_add_noticia.ejs
│       ├── home/             # View da página inicial
│       │   └── index.ejs
│       └── noticias/         # Views de notícias
│           ├── noticia.ejs
│           └── noticias.ejs
├── config/
│   ├── dbConnection.js      # Configuração do banco de dados
│   └── server.js            # Configuração do servidor Express
├── app.js                   # Arquivo principal da aplicação
├── mod_teste.js            # Módulo de teste
├── noticias.js             # Arquivo de exemplo
├── package.json            # Dependências do projeto
└── README.md               # Este arquivo
```

## 💾 Configuração do Banco de Dados

A aplicação utiliza MySQL como banco de dados. O banco de dados esperado é `portal_noticias` com uma tabela `noticias`.

### Estrutura esperada da tabela:

```sql
CREATE DATABASE portal_noticias;

USE portal_noticias;

CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    conteudo TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Vitorspk/curso-node-js.git
cd curso-node-js
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados MySQL:
   - Crie o banco de dados `portal_noticias`
   - Execute o script SQL para criar a tabela
   - Atualize as credenciais em `config/dbConnection.js`

4. Inicie o servidor:
```bash
node app.js
```

O servidor estará disponível em `http://localhost:3000`

## 🛣️ Rotas Disponíveis

- **/** - Página inicial
- **/noticias** - Listagem de todas as notícias
- **/formulario_inclusao_noticia** - Formulário para adicionar nova notícia

## 📝 Funcionalidades

- ✅ Visualização de notícias
- ✅ Listagem de notícias do banco de dados
- ✅ Formulário para inclusão de novas notícias
- ✅ Integração com banco de dados MySQL
- ✅ Template engine EJS para renderização dinâmica

## 🚧 Melhorias Futuras

- [ ] Implementar autenticação de usuários
- [ ] Adicionar validação de formulários
- [ ] Implementar edição e exclusão de notícias
- [ ] Adicionar paginação na listagem
- [ ] Melhorar tratamento de erros
- [ ] Adicionar testes automatizados
- [ ] Implementar upload de imagens para notícias
- [ ] Adicionar sistema de comentários

## 👨‍💻 Autor

**Vitor Schiavo**

## 📄 Licença

Este projeto está sob a licença ISC.
