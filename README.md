# Cartão de Visitas Digital (Link na Bio)

Preview do Cartão de Vistas Digital

<img width="1323" height="656" alt="Image" src="https://github.com/user-attachments/assets/ccb0c486-e335-4d9f-9bf9-e59466f305cc" />

## 🚀 Sobre o Projeto

Este é o meu Cartão de Visitas Digital, uma aplicação construida para praticar o CRUD(Create, Read, Update e Delete), construída do zero para demonstrar minhas habilidades.

🔗 **Acesse a versão ao vivo** [**Clicando aqui**](https://cartao-de-vistas-digital.vercel.app)

---

## ✨ Funcionalidades Principais

**Página Pública**

- **Interface Responsiva:** Design limpo e minimalista, com foco em **mobile-first**, que se adapta a qualquer dispositivo.

- **Conteúdo Dinâmico: Perfil** e lista de links são carregados a partir de uma fonte de dados central.

- **Performance Instantânea:** A página é gerada estaticamente (**SSG**) com o Next.js para garantir um carregamento ultrarrápido e excelente **SEO**.

**Painel de Administração**

- **Rota Protegida:** Acesso seguro via autenticação "Basic" implementada com **Next.js** Middleware.

- **CRUD Completo:** Gerenciamento total dos links com funcionalidades para **Criar**, **Ler**, **Atualizar** e **Deletar**.

- **Live Preview:** O painel exibe um "espelho" da página pública, permitindo que o administrador veja as alterações em tempo real.

- **UX Assíncrona:** Formulários com feedback de carregamento (pending state) e redirecionamento automático após o sucesso das ações, utilizando **Server Actions** do Next.js.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **Framework Principal:**
  - [**Nextjs**](https://nextjs.org) - Utilizando os recursos mais recentes como App Router, Server Components e Server Actions.
- **Base da Interface:**
  - [**React.js**](https://react.dev/) - Para a construção de componentes de UI declarativos e reativos.
- **Linguagem e Estilização:**
  - [**Tailwind CSS**](https://tailwindcss.com/) - Para a criação de uma interface moderna e responsiva de forma ágil com utility-first.
  - [**TypeScript**](https://www.typescriptlang.org) - Para garantir um código mais seguro, legível e manutenível.
- **Validação de Dados:**
  - [**Zod**](https://zod.dev) - Para a validação de schemas, garantindo que os dados enviados pelos formulários sejam íntegros e seguros.
- **Bibliotecas Adicionais:**
  - [**UUID**](https://www.npmjs.com/package/uuid) - Para a geração de identificadores únicos universais para cada link.
- **Qualidade de Código (Linting & Formatting):**
  - [**ESlint**](https://eslint.org) - Para encontrar e corrigir problemas no código de forma padronizada.
- **Plataforma de Deploy:**
  - [**Vercel**](https://vercel.com) - Para deploy contínuo (CI/CD) e hospedagem otimizada para Next.js.

---

## 🚀 Como Rodar o Projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/Chang3MyMind/Cartao-de-Vistas-Digital](https://github.com/Chang3MyMind/Cartao-de-Vistas-Digital)
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Crie um arquivo de variáveis de ambiente. Copie o arquivo `.env.example` e renomeie-o para `.env.local`:
    ```bash
    cp .env.example .env.local
    ```
4.  Abra o arquivo `.env.local` e preencha as variáveis necessárias (como `ADMIN_USERNAME` e `ADMIN_PASSWORD`).

5.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

---

## 📫 Contato

**Matheus Mattos**

[**LinkedIn**](https://www.linkedin.com/in/matheusmattos4)

[**GitHub**](https://github.com/Chang3MyMind)

**E-mail** - matheusmattos.r@gmail.com
