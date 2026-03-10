# TechSolutions 🚀

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen?logo=mongodb)
![Vercel](https://img.shields.io/badge/Vercel-Frontend-black?logo=vercel)
![Render](https://img.shields.io/badge/Render-API-purple)

**TechSolutions** é uma aplicação **full-stack** de um site institucional de tecnologia.  
O projeto apresenta serviços, produtos e um formulário de contato funcional que salva mensagens em um banco de dados.

A aplicação possui:

- **Frontend em React**
- **API em Node.js + Express**
- **Banco de dados MongoDB**

Tudo deployado na nuvem.

---

# 🌐 Deploy

Frontend (Vercel)

```
https://tech-solutions-sable.vercel.app
```

API (Render)

```
https://techsolutions-api.onrender.com
```

---

# 📌 Funcionalidades

- Página inicial com apresentação da empresa
- Página **Produtos** com cards interativos
- Página **Empresa** com informações institucionais
- Página **Contato** com formulário funcional
- Salvamento de mensagens no banco de dados
- Layout responsivo (desktop e mobile)
- Interface moderna com **glassmorphism**

---

# 🧠 Arquitetura da aplicação

O fluxo da aplicação funciona assim:

```
Frontend (React / Vercel)
        ↓
POST /contact
        ↓
API Node.js + Express (Render)
        ↓
MongoDB Atlas
```

Quando o usuário envia o formulário de contato:

1. O React envia uma requisição **POST** para a API
2. A API recebe os dados
3. O backend salva a mensagem no **MongoDB**
4. O usuário recebe confirmação de envio

---

# 🛠 Tecnologias utilizadas

## Frontend

- React
- Vite
- React Router
- React Icons
- CSS (Flexbox, Glassmorphism, Hover Effects)

## Backend

- Node.js
- Express
- Mongoose

## Banco de dados

- MongoDB Atlas

## Deploy

- Vercel (Frontend)
- Render (API)

---

# 📂 Estrutura do projeto

```
TechSolutions
│
├── backend
│   ├── models
│   │   └── Contact.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── css
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# 💻 Rodando o projeto localmente

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/anaolr-aula/TechSolutions.git
```

Entre na pasta:

```bash
cd TechSolutions
```

---

# ▶ Rodando o Backend

Entre na pasta backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
npm start
```

Servidor rodará em:

```
http://localhost:5000
```

---

# ▶ Rodando o Frontend

Abra outro terminal.

Entre na pasta frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Frontend rodará em:

```
http://localhost:5173
```

---

# 📬 API

## Endpoint

```
POST /contact
```

## Exemplo de requisição

```json
{
  "name": "Ana",
  "email": "ana@email.com",
  "message": "Olá! Gostaria de saber mais sobre os serviços."
}
```

## Resposta

```json
{
  "message": "Mensagem salva com sucesso!"
}
```

---

# 🎯 Objetivo do projeto

Este projeto foi desenvolvido para praticar:

- Desenvolvimento **Full-Stack**
- Integração **Frontend + API**
- Uso de **MongoDB na nuvem**
- Deploy de aplicações web modernas

---
