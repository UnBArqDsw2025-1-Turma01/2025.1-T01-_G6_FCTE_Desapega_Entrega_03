# FCTE Desapega

## Documentação

A documentação do projeto é gerada utilizando o [docsify](https://docsify.js.org/).

### Instalando o docsify

Execute o comando:

```shell
npm i docsify-cli -g
```

### Executando a documentação localmente

Para iniciar o site da documentação localmente, utilize o comando:

```shell
docsify serve ./docs
```

## Frontend

O frontend do projeto foi desenvolvido utilizando React + Vite.

### Instalando dependências

Na pasta `frontend`, execute:

```shell
npm install
```

### Executando o frontend localmente

Na pasta `frontend`, execute:

```shell
npm run dev
```

O frontend estará disponível em `http://localhost:5173`.

### Storybook

O Storybook é utilizado para documentação e desenvolvimento dos componentes.

Para executar o Storybook, na pasta `frontend`, execute:

```shell
npm run storybook
```

O Storybook estará disponível em `http://localhost:6006`.

## Backend

Este documento descreve como configurar e executar o backend da API Desapega, desenvolvido em Node.js, Express e Sequelize, usando PostgreSQL em Docker.


## Pré-requisitos

* Docker & Docker Compose instalados
* Node.js (v16+) e npm (para desenvolvimento local sem Docker)
* Git (para clonar o repositório)


## Estrutura do Projeto

```
backend/
├── src/
│   ├── config/
│   │   └── sequelize.js      # configuração do Sequelize
│   ├── db/
│   │   └── connection.js     # inicializa Sequelize
│   ├── models/
│   │   ├── index.js          # registra todos os modelos
│   │   └── user.js           # definição do model User
│   ├── migrations/           # migrations do Sequelize
│   ├── seeders/              # seeders (opcional)
│   ├── routes/
│   │   └── user.routes.js    # rotas de usuário
│   ├── controllers/
│   │   └── user.controller.js
│   ├── services/
│   │   └── user.service.js
│   └── server.js             # ponto de entrada Express
├── package.json
├── .env                      # variáveis de ambiente (não commitado)
└── Dockerfile

```


## Variáveis de Ambiente

Crie um arquivo `.env` na raiz de `backend/` com estas chaves:

```dotenv
PORT=3000
DB_HOST=db
DB_PORT=5432
DB_USER=desapegaadmin
DB_PASSWORD=desapegasenha
DB_NAME=desapegadb
NODE_ENV=development
```

> **Atenção:** `%DB_HOST=db%` e `%DB_PORT=5432%` fazem o backend apontar para o container PostgreSQL do Docker Compose.


## Comandos Docker (recomendado)

1. **Subir containers** (build + up):
```bash
docker compose up --build -d
````

2. **Verificar logs**:
```bash
docker compose logs -f backend
docker compose logs -f db
````

3. **Executar migrations**:
```bash
docker compose exec backend npx sequelize-cli db:migrate
````

4. **Parar e remover containers + volumes**:
```bash
docker compose down --volumes
````
