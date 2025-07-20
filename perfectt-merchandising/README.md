# 🛍️ Perfectt Merchandising

Bem-vindo ao repositório do site **Perfectt Merchandising**!  
Este projeto é a presença online da Perfectt Merchandising, focada em apresentar seus serviços de forma elegante, moderna e responsiva. O site foi desenvolvido com **React** e **Styled Components**, garantindo uma UI dinâmica e de fácil manutenção.

---

## 🌟 Visão Geral do Projeto

O site da Perfectt Merchandising é uma **Single Page Application (SPA)** que destaca a empresa, seus serviços e a forma de contato. A arquitetura foi pensada para ser modular e estilisticamente consistente, utilizando Styled Components para gerenciar os estilos de forma eficaz.

### Principais Características:

- **Design Moderno e Responsivo**: Funciona perfeitamente em desktops, tablets e smartphones.
- **Navegação Intuitiva**: Header fixo com efeito *glassmorphism* e animação de esconder/mostrar no scroll.
- **Hero Section**: Apresentação impactante com imagem da equipe.
- **About Section**: Detalhes sobre a empresa e missão.
- **Services Section**: Carrossel interativo com imagens e descrições dos serviços.
- **Mission Section**: Seção dedicada à missão da empresa.
- **Contact Section**: Formulário para contato direto.
- **Estilização Coesa**: Tema visual padronizado com preto, branco e dourado usando Styled Components.

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **Styled Components**
- **Vite**
- **React Slick**

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou Yarn

### Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/perfectt-merchandising.git
```

Navegue até o diretório do projeto:

```bash
cd perfectt-merchandising
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

### Executando em Modo de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse em `http://localhost:5173`

### Construindo para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados estarão na pasta `dist/`.

---

## 📂 Estrutura do Projeto

```
perfectt-merchandising/
├── public/
│   └── favicon.ico
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── perfectt-logo.png
│   │   ├── team-background.jpg
│   │   └── services/
│   │       ├── design-criativo.jpg
│   │       └── ...
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.styles.js
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.styles.js
│   │   └── ...
│   ├── sections/
│   │   ├── AboutSection/
│   │   ├── ContactSection/
│   │   ├── HeroSection/
│   │   ├── MissionSection/
│   │   ├── ServicesSection/
│   │   └── ...
│   ├── App.jsx
│   ├── GlobalStyle.js
│   ├── main.jsx
│   └── theme.js
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Personalização e Tematização

- `src/theme.js`: Variáveis de design como cores, fontes e breakpoints.
- `src/GlobalStyle.js`: CSS global e resets.
- Arquivos `.styles.js`: Estilos específicos por componente/seção com uso do tema.

---

## 🤝 Contribuição

Contribuições são bem-vindas!

1. Faça um fork.
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: nova funcionalidade'`)
4. Push para o repositório (`git push origin feature/minha-feature`)
5. Abra um Pull Request.

---

🌐 Projeto com fins didáticos.
